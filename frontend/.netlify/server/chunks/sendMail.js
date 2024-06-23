import { f as fail$1 } from "./index.js";
import "just-clone";
import { a as schemaInfo, S as SuperFormError, d as defaultValues, b as schemaShape, p as parseRequest, m as mergeDefaults, c as mapErrors, r as replaceInvalidDefaults } from "./formData.js";
import { merge as merge$1 } from "ts-deepmerge";
import { zodToJsonSchema } from "zod-to-json-schema";
import baseMemoize from "memoize-weak";
import { a as avioEmail } from "./links.js";
function constraints(schema) {
  return _constraints(schemaInfo(schema, false, []), []);
}
function merge(...constraints2) {
  const filtered = constraints2.filter((c) => !!c);
  if (!filtered.length)
    return void 0;
  if (filtered.length == 1)
    return filtered[0];
  return merge$1(...filtered);
}
function _constraints(info, path) {
  if (!info)
    return void 0;
  let output = void 0;
  if (info.union && info.union.length) {
    const infos = info.union.map((s) => schemaInfo(s, info.isOptional, path));
    const merged = infos.map((i) => _constraints(i, path));
    output = merge(output, ...merged);
    if (output && (info.isNullable || info.isOptional || infos.some((i) => i?.isNullable || i?.isOptional))) {
      delete output.required;
    }
  }
  if (info.array) {
    output = merge(output, ...info.array.map((i) => _constraints(schemaInfo(i, info.isOptional, path), path)));
  }
  if (info.properties) {
    const obj = {};
    for (const [key, prop] of Object.entries(info.properties)) {
      const propInfo = schemaInfo(prop, !info.required?.includes(key) || prop.default !== void 0, [key]);
      const propConstraint = _constraints(propInfo, [...path, key]);
      if (typeof propConstraint === "object" && Object.values(propConstraint).length > 0) {
        obj[key] = propConstraint;
      }
    }
    output = merge(output, obj);
  }
  return output ?? constraint(info);
}
function constraint(info) {
  const output = {};
  const schema = info.schema;
  const type = schema.type;
  const format = schema.format;
  if (type == "integer" && format == "unix-time") {
    const date = schema;
    if (date.minimum !== void 0)
      output.min = new Date(date.minimum).toISOString();
    if (date.maximum !== void 0)
      output.max = new Date(date.maximum).toISOString();
  } else if (type == "string") {
    const str = schema;
    const patterns = [
      str.pattern,
      ...str.allOf ? str.allOf.map((s) => typeof s == "boolean" ? void 0 : s.pattern) : []
    ].filter((s) => s !== void 0);
    if (patterns.length > 0)
      output.pattern = patterns[0];
    if (str.minLength !== void 0)
      output.minlength = str.minLength;
    if (str.maxLength !== void 0)
      output.maxlength = str.maxLength;
  } else if (type == "number" || type == "integer") {
    const num = schema;
    if (num.minimum !== void 0)
      output.min = num.minimum;
    else if (num.exclusiveMinimum !== void 0)
      output.min = num.exclusiveMinimum + (type == "integer" ? 1 : Number.MIN_VALUE);
    if (num.maximum !== void 0)
      output.max = num.maximum;
    else if (num.exclusiveMaximum !== void 0)
      output.max = num.exclusiveMaximum - (type == "integer" ? 1 : Number.MIN_VALUE);
    if (num.multipleOf !== void 0)
      output.step = num.multipleOf;
  } else if (type == "array") {
    const arr = schema;
    if (arr.minItems !== void 0)
      output.min = arr.minItems;
    if (arr.maxItems !== void 0)
      output.max = arr.maxItems;
  }
  if (!info.isNullable && !info.isOptional) {
    output.required = true;
  }
  return Object.keys(output).length > 0 ? output : void 0;
}
function schemaHash(schema) {
  return hashCode(_schemaHash(schemaInfo(schema, false, []), 0, []));
}
function _schemaHash(info, depth, path) {
  if (!info)
    return "";
  function tab() {
    return "  ".repeat(depth);
  }
  function mapSchemas(schemas) {
    return schemas.map((s) => _schemaHash(schemaInfo(s, info?.isOptional ?? false, path), depth + 1, path)).filter((s) => s).join("|");
  }
  function nullish() {
    const output = [];
    if (info?.isNullable)
      output.push("null");
    if (info?.isOptional)
      output.push("undefined");
    return !output.length ? "" : "|" + output.join("|");
  }
  if (info.union) {
    return "Union {\n  " + tab() + mapSchemas(info.union) + "\n" + tab() + "}" + nullish();
  }
  if (info.properties) {
    const output = [];
    for (const [key, prop] of Object.entries(info.properties)) {
      const propInfo = schemaInfo(prop, !info.required?.includes(key) || prop.default !== void 0, [key]);
      output.push(key + ": " + _schemaHash(propInfo, depth + 1, path));
    }
    return "Object {\n  " + tab() + output.join(",\n  ") + "\n" + tab() + "}" + nullish();
  }
  if (info.array) {
    return "Array[" + mapSchemas(info.array) + "]" + nullish();
  }
  return info.types.join("|") + nullish();
}
function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  if (hash < 0)
    hash = hash >>> 0;
  return hash.toString(36);
}
// @__NO_SIDE_EFFECTS__
function createAdapter(adapter, jsonSchema) {
  if (!adapter || !("superFormValidationLibrary" in adapter)) {
    throw new SuperFormError('Superforms v2 requires a validation adapter for the schema. Import one of your choice from "sveltekit-superforms/adapters" and wrap the schema with it.');
  }
  if (!jsonSchema)
    jsonSchema = adapter.jsonSchema;
  return {
    ...adapter,
    constraints: adapter.constraints ?? constraints(jsonSchema),
    defaults: adapter.defaults ?? defaultValues(jsonSchema),
    shape: schemaShape(jsonSchema),
    id: schemaHash(jsonSchema)
  };
}
async function superValidate(data, adapter, options) {
  if (data && "superFormValidationLibrary" in data) {
    options = adapter;
    adapter = data;
    data = void 0;
  }
  const validator = adapter;
  const defaults = options?.defaults ?? validator.defaults;
  const jsonSchema = validator.jsonSchema;
  const parsed = await parseRequest(data, jsonSchema, options);
  const addErrors = options?.errors ?? (options?.strict ? true : !!parsed.data);
  const parsedData = options?.strict ? parsed.data ?? {} : mergeDefaults(parsed.data, defaults);
  let status;
  if (!!parsed.data || addErrors) {
    status = await /* @__PURE__ */ validator.validate(parsedData);
  } else {
    status = { success: false, issues: [] };
  }
  const valid = status.success;
  const errors = valid || !addErrors ? {} : mapErrors(status.issues, validator.shape);
  const dataWithDefaults = valid ? status.data : replaceInvalidDefaults(options?.strict ? mergeDefaults(parsedData, defaults) : parsedData, defaults, jsonSchema, status.issues, options?.preprocessed);
  let outputData;
  if (jsonSchema.additionalProperties === false) {
    outputData = {};
    for (const key of Object.keys(jsonSchema.properties ?? {})) {
      if (key in dataWithDefaults)
        outputData[key] = dataWithDefaults[key];
    }
  } else {
    outputData = dataWithDefaults;
  }
  const output = {
    id: parsed.id ?? options?.id ?? validator.id,
    valid,
    posted: parsed.posted,
    errors,
    data: outputData
  };
  if (!parsed.posted) {
    output.constraints = validator.constraints;
    if (Object.keys(validator.shape).length) {
      output.shape = validator.shape;
    }
  }
  return output;
}
function message(form, message2, options) {
  if (options?.status && options.status >= 400) {
    form.valid = false;
  }
  form.message = message2;
  const remove = options?.removeFiles !== false;
  const output = remove ? withFiles({ form }) : { form };
  return form.valid ? output : fail$1(options?.status ?? 400, output);
}
function setError(form, path, error, options) {
  if (options === void 0)
    options = {};
  const errArr = Array.isArray(error) ? error : [error];
  if (!form.errors)
    form.errors = {};
  {
    if (!form.errors._errors)
      form.errors._errors = [];
    form.errors._errors = options.overwrite ? errArr : form.errors._errors.concat(errArr);
  }
  form.valid = false;
  const output = options.removeFiles === false ? { form } : withFiles({ form });
  return fail$1(options.status ?? 400, output);
}
function withFiles(obj) {
  if (typeof obj !== "object")
    return obj;
  for (const key in obj) {
    const value = obj[key];
    if (value instanceof File)
      delete obj[key];
    else if (value && typeof value === "object")
      withFiles(value);
  }
  return obj;
}
const removeFiles = withFiles;
function fail(status, data) {
  function checkForm(data2) {
    return !!data2 && typeof data2 === "object" && "valid" in data2 && "data" in data2 && "id" in data2;
  }
  function checkObj(data2) {
    if (data2 && typeof data2 === "object") {
      for (const key in data2) {
        const v = data2[key];
        if (checkForm(v)) {
          v.valid = false;
          removeFiles(v);
        } else if (v && typeof v === "object") {
          checkObj(v);
        }
      }
    }
    return data2;
  }
  return fail$1(status, checkObj(data));
}
const memoize = baseMemoize;
const defaultOptions = {
  dateStrategy: "integer",
  pipeStrategy: "output",
  $refStrategy: "none"
};
const zodToJSONSchema = /* @__NO_SIDE_EFFECTS__ */ (...params) => {
  params[1] = typeof params[1] == "object" ? { ...defaultOptions, ...params[1] } : defaultOptions;
  return zodToJsonSchema(...params);
};
async function validate(schema, data, errorMap) {
  const result = await schema.safeParseAsync(data, { errorMap });
  if (result.success) {
    return {
      data: result.data,
      success: true
    };
  }
  return {
    issues: result.error.issues.map(({ message: message2, path }) => ({ message: message2, path })),
    success: false
  };
}
function _zod(schema, options) {
  return /* @__PURE__ */ createAdapter({
    superFormValidationLibrary: "zod",
    validate: async (data) => validate(schema, data, options?.errorMap),
    jsonSchema: options?.jsonSchema ?? /* @__PURE__ */ zodToJSONSchema(schema, options?.config),
    defaults: options?.defaults
  });
}
const zod = /* @__PURE__ */ memoize(_zod);
const MAIL_KEY = "239de73cf7b08f769e7763b3721ea5aa-6fafb9bf-6516d9fc";
const PROD_MAIL_DOMAIN = "mail.aviotutor.com";
const mailDomain = PROD_MAIL_DOMAIN;
console.log("Mail Domain: " + mailDomain);
async function sendMail(email, subject, textBody, htmlBody, resume) {
  const formData = new FormData();
  formData.append("from", `Avio ${avioEmail}`);
  formData.append("to", avioEmail);
  formData.append("cc", "aviotutor@gmail.com");
  formData.append("subject", `${subject} <${email}>`);
  formData.append("html", `<h1>${subject} &lt;${email}&gt;</h1>${htmlBody}`);
  formData.append("text", `Subject: ${subject} <${email}>

Message: ${textBody}`);
  if (resume) {
    formData.append("attachment", resume, resume.name);
  }
  const auth = Buffer.from(`api:${MAIL_KEY}`).toString("base64");
  const response = await fetch(`https://api.mailgun.net/v3/${mailDomain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`
    },
    body: formData
  });
  return response.text();
}
export {
  sendMail as a,
  setError as b,
  fail as f,
  message as m,
  superValidate as s,
  zod as z
};
