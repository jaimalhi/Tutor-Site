import { a as subscribe } from "../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component, s as spread, e as escape, d as escape_attribute_value, f as escape_object, a as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/stores.js";
import "just-clone";
import "ts-deepmerge";
import { s as superForm } from "../../../chunks/formData.js";
import "../../../chunks/index.js";
import "devalue";
import { T as Toast } from "../../../chunks/Toast.js";
const css = {
  code: "small.svelte-c8t25j{margin-left:8px;margin-top:4px;opacity:calc(0.5)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { superForm } from \\"sveltekit-superforms\\";\\nexport let data;\\nimport Toast from \\"$lib/components/utils/Toast.svelte\\";\\nimport SuperDebug from \\"sveltekit-superforms\\";\\nconst { form, errors, allErrors, constraints, message, enhance } = superForm(data.form, {\\n  taintedMessage: \\"Are you sure you want to leave?\\"\\n});\\n<\/script>\\r\\n\\r\\n<Toast\\r\\n   {message}\\r\\n   {allErrors}\\r\\n   successMsg=\\"Message sent successfully!\\"\\r\\n   errorMsg=\\"Couldn't send the message, please try again\\" />\\r\\n\\r\\n<!-- <SuperDebug data={$form} /> -->\\r\\n\\r\\n<!-- Contact Form -->\\r\\n<div\\r\\n   class=\\"flex flex-col justify-center items-center text-base-100 bg-neutral-content min-h-screen pb-6\\">\\r\\n   <div class=\\"w-3/4 lg:w-1/2\\">\\r\\n      <h1 class=\\"text-primary text-5xl lg:text-6xl font-semibold mb-4\\">Contact Us</h1>\\r\\n      <p class=\\"mb-4\\">\\r\\n         Got questions or need assistance? We're here to help! Reach out to us using the form below,\\r\\n         and our support team will respond within 24 hours.\\r\\n      </p>\\r\\n      <form method=\\"POST\\" class=\\"space-y-2\\" use:enhance>\\r\\n         <div class=\\"flex space-x-3\\">\\r\\n            <label class=\\"form-control w-1/2\\">\\r\\n               <div class=\\"label\\">\\r\\n                  <span class=\\"label-text text-primary\\">First Name</span>\\r\\n               </div>\\r\\n               <input\\r\\n                  type=\\"text\\"\\r\\n                  placeholder=\\"Jane\\"\\r\\n                  name=\\"firstName\\"\\r\\n                  class=\\"input input-ghost w-full {$errors.firstName ? 'input-error' : ''}\\"\\r\\n                  aria-invalid={$errors.firstName ? \\"true\\" : undefined}\\r\\n                  bind:value={$form.firstName}\\r\\n                  {...constraints} />\\r\\n               {#if $errors.firstName}\\r\\n                  <small>{$errors.firstName}</small>\\r\\n               {/if}\\r\\n            </label>\\r\\n            <label class=\\"form-control w-1/2\\">\\r\\n               <div class=\\"label\\">\\r\\n                  <span class=\\"label-text text-primary\\">Last Name</span>\\r\\n               </div>\\r\\n               <input\\r\\n                  type=\\"text\\"\\r\\n                  placeholder=\\"Doe\\"\\r\\n                  name=\\"lastName\\"\\r\\n                  class=\\"input input-ghost w-full {$errors.lastName ? 'input-error' : ''}\\"\\r\\n                  aria-invalid={$errors.lastName ? \\"true\\" : undefined}\\r\\n                  bind:value={$form.lastName}\\r\\n                  {...constraints} />\\r\\n               {#if $errors.lastName}\\r\\n                  <small>{$errors.lastName}</small>\\r\\n               {/if}\\r\\n            </label>\\r\\n         </div>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Email</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"email\\"\\r\\n               placeholder=\\"janedoe@example.com\\"\\r\\n               name=\\"email\\"\\r\\n               class=\\"input input-ghost w-full {$errors.email ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.email ? \\"true\\" : undefined}\\r\\n               bind:value={$form.email}\\r\\n               {...constraints} />\\r\\n            {#if $errors.email}\\r\\n               <small>{$errors.email}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Retype Email</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"email\\"\\r\\n               placeholder=\\"janedoe@example.com\\"\\r\\n               name=\\"retypeEmail\\"\\r\\n               class=\\"input input-ghost w-full {$errors.retypeEmail ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.retypeEmail ? \\"true\\" : undefined}\\r\\n               bind:value={$form.retypeEmail}\\r\\n               {...constraints} />\\r\\n            {#if $errors.retypeEmail}\\r\\n               <small>{$errors.retypeEmail}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control max-h-48\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Message</span>\\r\\n            </div>\\r\\n            <textarea\\r\\n               class=\\"textarea textarea-ghost h-24 {$errors.message ? 'input-error' : ''}\\"\\r\\n               placeholder=\\"Math tutor required...\\"\\r\\n               name=\\"message\\"\\r\\n               aria-invalid={$errors.message ? \\"true\\" : undefined}\\r\\n               bind:value={$form.message}\\r\\n               {...constraints}></textarea>\\r\\n            {#if $errors.message}\\r\\n               <small>{$errors.message}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control items-center\\">\\r\\n            <button class=\\"btn btn-primary w-1/2 mt-4\\">Send Message</button>\\r\\n         </label>\\r\\n      </form>\\r\\n   </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   small {\\r\\n      margin-left: 8px;\\r\\n      margin-top: 4px;\\r\\n      opacity: calc(0.5);\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoHG,mBAAM,CACH,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,KAAK,GAAG,CACpB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { form, errors, allErrors, constraints, message, enhance } = superForm(data.form, {
    taintedMessage: "Are you sure you want to leave?"
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return `${validate_component(Toast, "Toast").$$render(
    $$result,
    {
      message,
      allErrors,
      successMsg: "Message sent successfully!",
      errorMsg: "Couldn't send the message, please try again"
    },
    {},
    {}
  )}   <div class="flex flex-col justify-center items-center text-base-100 bg-neutral-content min-h-screen pb-6"><div class="w-3/4 lg:w-1/2"><h1 class="text-primary text-5xl lg:text-6xl font-semibold mb-4" data-svelte-h="svelte-wpydme">Contact Us</h1> <p class="mb-4" data-svelte-h="svelte-19iv9oj">Got questions or need assistance? We&#39;re here to help! Reach out to us using the form below,
         and our support team will respond within 24 hours.</p> <form method="POST" class="space-y-2"><div class="flex space-x-3"><label class="form-control w-1/2"><div class="label" data-svelte-h="svelte-c5safu"><span class="label-text text-primary">First Name</span></div> <input${spread(
    [
      { type: "text" },
      { placeholder: "Jane" },
      { name: "firstName" },
      {
        class: "input input-ghost w-full " + escape($errors.firstName ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.firstName ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.firstName, 0)}> ${$errors.firstName ? `<small class="svelte-c8t25j">${escape($errors.firstName)}</small>` : ``}</label> <label class="form-control w-1/2"><div class="label" data-svelte-h="svelte-rjn2le"><span class="label-text text-primary">Last Name</span></div> <input${spread(
    [
      { type: "text" },
      { placeholder: "Doe" },
      { name: "lastName" },
      {
        class: "input input-ghost w-full " + escape($errors.lastName ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.lastName ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.lastName, 0)}> ${$errors.lastName ? `<small class="svelte-c8t25j">${escape($errors.lastName)}</small>` : ``}</label></div> <label class="form-control w-full"><div class="label" data-svelte-h="svelte-1p83pub"><span class="label-text text-primary">Email</span></div> <input${spread(
    [
      { type: "email" },
      { placeholder: "janedoe@example.com" },
      { name: "email" },
      {
        class: "input input-ghost w-full " + escape($errors.email ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.email ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.email, 0)}> ${$errors.email ? `<small class="svelte-c8t25j">${escape($errors.email)}</small>` : ``}</label> <label class="form-control w-full"><div class="label" data-svelte-h="svelte-apc5d8"><span class="label-text text-primary">Retype Email</span></div> <input${spread(
    [
      { type: "email" },
      { placeholder: "janedoe@example.com" },
      { name: "retypeEmail" },
      {
        class: "input input-ghost w-full " + escape($errors.retypeEmail ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.retypeEmail ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.retypeEmail, 0)}> ${$errors.retypeEmail ? `<small class="svelte-c8t25j">${escape($errors.retypeEmail)}</small>` : ``}</label> <label class="form-control max-h-48"><div class="label" data-svelte-h="svelte-1gzqxz8"><span class="label-text text-primary">Message</span></div> <textarea${spread(
    [
      {
        class: "textarea textarea-ghost h-24 " + escape($errors.message ? "input-error" : "", true)
      },
      { placeholder: "Math tutor required..." },
      { name: "message" },
      {
        "aria-invalid": escape_attribute_value($errors.message ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}>${escape($form.message || "")}</textarea> ${$errors.message ? `<small class="svelte-c8t25j">${escape($errors.message)}</small>` : ``}</label> <label class="form-control items-center" data-svelte-h="svelte-67yi6f"><button class="btn btn-primary w-1/2 mt-4">Send Message</button></label></form></div> </div>`;
});
export {
  Page as default
};
