import { z } from "zod";
import "just-clone";
import "ts-deepmerge";
import "memoize-weak";
import { s as superValidate, z as zod, f as fail, a as sendMail, b as setError, m as message } from "../../../chunks/sendMail.js";
import "@exodus/schemasafe";
import "../../../chunks/index.js";
import "devalue";
import "../../../chunks/stores.js";
import "../../../chunks/formData.js";
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email, requires @ and ."),
  retypeEmail: z.string().email("Invalid email, requires @ and ."),
  message: z.string().min(2, "Message details are required")
}).refine((data) => data.email === data.retypeEmail, {
  message: "Emails don't match!",
  path: ["email"]
}).refine((data) => data.retypeEmail === data.email, {
  message: "Emails don't match!",
  path: ["retypeEmail"]
});
const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));
    if (!form.valid) {
      return fail(400, { form });
    }
    const subjectLine = `Contact Form Submission: ${form.data.firstName} ${form.data.lastName}`;
    const textBody = form.data.message;
    const htmlBody = `<p>${form.data.message}</p>`;
    try {
      const response = await sendMail(form.data.email, subjectLine, textBody, htmlBody);
      console.log("Response: " + response);
    } catch (error) {
      console.error("Error: " + error);
      return setError(form, "", "400");
    }
    return message(form, "Form posted successfully!");
  }
};
const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};
export {
  actions,
  load
};
