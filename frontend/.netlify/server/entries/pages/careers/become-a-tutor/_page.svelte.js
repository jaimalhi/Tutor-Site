import { a as subscribe } from "../../../../chunks/lifecycle.js";
import { c as create_ssr_component, v as validate_component, s as spread, e as escape, d as escape_attribute_value, f as escape_object, a as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/stores.js";
import "just-clone";
import "ts-deepmerge";
import { s as superForm } from "../../../../chunks/formData.js";
import "../../../../chunks/index.js";
import "devalue";
import { T as Toast } from "../../../../chunks/Toast.js";
const css = {
  code: "small.svelte-c8t25j{margin-left:8px;margin-top:4px;opacity:calc(0.5)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { superForm } from \\"sveltekit-superforms\\";\\nimport Toast from \\"$lib/components/utils/Toast.svelte\\";\\nexport let data;\\nconst { form, errors, allErrors, constraints, message, enhance } = superForm(data.form, {\\n  taintedMessage: \\"Are you sure you want to leave?\\"\\n});\\n<\/script>\\r\\n\\r\\n<Toast\\r\\n   {message}\\r\\n   {allErrors}\\r\\n   successMsg=\\"Application sent successfully!\\"\\r\\n   errorMsg=\\"Couldn't send the application, please try again\\" />\\r\\n\\r\\n<div\\r\\n   class=\\"flex flex-col justify-center items-center text-base-100 bg-neutral-content min-h-screen pb-10 pt-6 md:pt-28\\">\\r\\n   <div class=\\"w-3/4 lg:w-1/2\\">\\r\\n      <h1 class=\\"text-primary text-5xl lg:text-6xl font-semibold mb-4\\">Become a Tutor</h1>\\r\\n      <p class=\\"mb-4\\">\\r\\n         Thank you for your interest in joining our team at Avio Tutor! Please fill out the form\\r\\n         below as your application to become a tutor with us. We will review your application and\\r\\n         get back to you within 3-5 business days.\\r\\n      </p>\\r\\n      <form method=\\"POST\\" enctype=\\"multipart/form-data\\" class=\\"space-y-2\\" use:enhance>\\r\\n         <div class=\\"flex space-x-3\\">\\r\\n            <label class=\\"form-control w-1/2\\">\\r\\n               <div class=\\"label\\">\\r\\n                  <span class=\\"label-text text-primary\\">First Name</span>\\r\\n               </div>\\r\\n               <input\\r\\n                  type=\\"text\\"\\r\\n                  placeholder=\\"Jane\\"\\r\\n                  name=\\"firstName\\"\\r\\n                  class=\\"input input-ghost w-full {$errors.firstName ? 'input-error' : ''}\\"\\r\\n                  aria-invalid={$errors.firstName ? \\"true\\" : undefined}\\r\\n                  bind:value={$form.firstName}\\r\\n                  {...constraints} />\\r\\n               {#if $errors.firstName}\\r\\n                  <small>{$errors.firstName}</small>\\r\\n               {/if}\\r\\n            </label>\\r\\n            <label class=\\"form-control w-1/2\\">\\r\\n               <div class=\\"label\\">\\r\\n                  <span class=\\"label-text text-primary\\">Last Name</span>\\r\\n               </div>\\r\\n               <input\\r\\n                  type=\\"text\\"\\r\\n                  placeholder=\\"Doe\\"\\r\\n                  name=\\"lastName\\"\\r\\n                  class=\\"input input-ghost w-full {$errors.lastName ? 'input-error' : ''}\\"\\r\\n                  aria-invalid={$errors.lastName ? \\"true\\" : undefined}\\r\\n                  bind:value={$form.lastName}\\r\\n                  {...constraints} />\\r\\n               {#if $errors.lastName}\\r\\n                  <small>{$errors.lastName}</small>\\r\\n               {/if}\\r\\n            </label>\\r\\n         </div>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Email</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"email\\"\\r\\n               placeholder=\\"janedoe@example.com\\"\\r\\n               name=\\"email\\"\\r\\n               class=\\"input input-ghost w-full {$errors.email ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.email ? \\"true\\" : undefined}\\r\\n               bind:value={$form.email}\\r\\n               {...constraints} />\\r\\n            {#if $errors.email}\\r\\n               <small>{$errors.email}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Retype Email</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"email\\"\\r\\n               placeholder=\\"janedoe@example.com\\"\\r\\n               name=\\"retypeEmail\\"\\r\\n               class=\\"input input-ghost w-full {$errors.retypeEmail ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.retypeEmail ? \\"true\\" : undefined}\\r\\n               bind:value={$form.retypeEmail}\\r\\n               {...constraints} />\\r\\n            {#if $errors.retypeEmail}\\r\\n               <small>{$errors.retypeEmail}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Highest level of education</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"text\\"\\r\\n               placeholder=\\"Bachelors Degree, Masters Degree, Doctorate, etc.\\"\\r\\n               name=\\"educationLevel\\"\\r\\n               class=\\"input input-ghost w-full {$errors.educationLevel ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.educationLevel ? \\"true\\" : undefined}\\r\\n               bind:value={$form.educationLevel}\\r\\n               {...constraints} />\\r\\n            {#if $errors.educationLevel}\\r\\n               <small>{$errors.educationLevel}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control max-h-48\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Describe the focus of your studies</span>\\r\\n            </div>\\r\\n            <textarea\\r\\n               class=\\"textarea textarea-ghost h-24 {$errors.studyFocus ? 'input-error' : ''}\\"\\r\\n               placeholder=\\"e.g. Computer Science, Mathematics, etc.\\"\\r\\n               name=\\"studyFocus\\"\\r\\n               aria-invalid={$errors.studyFocus ? \\"true\\" : undefined}\\r\\n               bind:value={$form.studyFocus}\\r\\n               {...constraints}></textarea>\\r\\n            {#if $errors.studyFocus}\\r\\n               <small>{$errors.studyFocus}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control max-h-48\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\"\\r\\n                  >Describe your tutoring or relevant experience(s)</span>\\r\\n            </div>\\r\\n            <textarea\\r\\n               class=\\"textarea textarea-ghost h-24 {$errors.tutoringExperience\\r\\n                  ? 'input-error'\\r\\n                  : ''}\\"\\r\\n               placeholder=\\"What would make you a good tutor...\\"\\r\\n               name=\\"tutoringExperience\\"\\r\\n               aria-invalid={$errors.tutoringExperience ? \\"true\\" : undefined}\\r\\n               bind:value={$form.tutoringExperience}\\r\\n               {...constraints}></textarea>\\r\\n            {#if $errors.tutoringExperience}\\r\\n               <small>{$errors.tutoringExperience}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">What subjects would you like to tutor?</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"text\\"\\r\\n               placeholder=\\"Math, Science, English, etc.\\"\\r\\n               name=\\"subjectsToTutor\\"\\r\\n               class=\\"input input-ghost w-full {$errors.subjectsToTutor ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.subjectsToTutor ? \\"true\\" : undefined}\\r\\n               bind:value={$form.subjectsToTutor}\\r\\n               {...constraints} />\\r\\n            {#if $errors.subjectsToTutor}\\r\\n               <small>{$errors.subjectsToTutor}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control w-full\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">How did you hear about us?</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"text\\"\\r\\n               placeholder=\\"Google search, referral, etc.\\"\\r\\n               name=\\"howDidYouHear\\"\\r\\n               class=\\"input input-ghost w-full {$errors.howDidYouHear ? 'input-error' : ''}\\"\\r\\n               aria-invalid={$errors.howDidYouHear ? \\"true\\" : undefined}\\r\\n               bind:value={$form.howDidYouHear}\\r\\n               {...constraints} />\\r\\n            {#if $errors.howDidYouHear}\\r\\n               <small>{$errors.howDidYouHear}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control w-full max-w-xs\\">\\r\\n            <div class=\\"label\\">\\r\\n               <span class=\\"label-text text-primary\\">Upload your Resume/CV</span>\\r\\n            </div>\\r\\n            <input\\r\\n               type=\\"file\\"\\r\\n               name=\\"resumeUpload\\"\\r\\n               class=\\"file-input file-input-ghost w-full {$errors.resumeUpload\\r\\n                  ? 'input-error'\\r\\n                  : ''}\\"\\r\\n               aria-invalid={$errors.resumeUpload ? \\"true\\" : undefined}\\r\\n               bind:value={$form.resumeUpload}\\r\\n               {...constraints}\\r\\n               accept=\\".pdf,application/pdf\\" />\\r\\n            {#if $errors.resumeUpload}\\r\\n               <small>{$errors.resumeUpload}</small>\\r\\n            {/if}\\r\\n         </label>\\r\\n         <label class=\\"form-control items-center\\">\\r\\n            <button type=\\"submit\\" class=\\"btn btn-primary w-1/2 mt-4\\">Submit Application</button>\\r\\n         </label>\\r\\n      </form>\\r\\n   </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   small {\\r\\n      margin-left: 8px;\\r\\n      margin-top: 4px;\\r\\n      opacity: calc(0.5);\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqMG,mBAAM,CACH,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,KAAK,GAAG,CACpB"}`
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
      successMsg: "Application sent successfully!",
      errorMsg: "Couldn't send the application, please try again"
    },
    {},
    {}
  )} <div class="flex flex-col justify-center items-center text-base-100 bg-neutral-content min-h-screen pb-10 pt-6 md:pt-28"><div class="w-3/4 lg:w-1/2"><h1 class="text-primary text-5xl lg:text-6xl font-semibold mb-4" data-svelte-h="svelte-17zy3es">Become a Tutor</h1> <p class="mb-4" data-svelte-h="svelte-5r3z9c">Thank you for your interest in joining our team at Avio Tutor! Please fill out the form
         below as your application to become a tutor with us. We will review your application and
         get back to you within 3-5 business days.</p> <form method="POST" enctype="multipart/form-data" class="space-y-2"><div class="flex space-x-3"><label class="form-control w-1/2"><div class="label" data-svelte-h="svelte-c5safu"><span class="label-text text-primary">First Name</span></div> <input${spread(
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
  )}${add_attribute("value", $form.retypeEmail, 0)}> ${$errors.retypeEmail ? `<small class="svelte-c8t25j">${escape($errors.retypeEmail)}</small>` : ``}</label> <label class="form-control w-full"><div class="label" data-svelte-h="svelte-etch08"><span class="label-text text-primary">Highest level of education</span></div> <input${spread(
    [
      { type: "text" },
      {
        placeholder: "Bachelors Degree, Masters Degree, Doctorate, etc."
      },
      { name: "educationLevel" },
      {
        class: "input input-ghost w-full " + escape($errors.educationLevel ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.educationLevel ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.educationLevel, 0)}> ${$errors.educationLevel ? `<small class="svelte-c8t25j">${escape($errors.educationLevel)}</small>` : ``}</label> <label class="form-control max-h-48"><div class="label" data-svelte-h="svelte-1aks3hu"><span class="label-text text-primary">Describe the focus of your studies</span></div> <textarea${spread(
    [
      {
        class: "textarea textarea-ghost h-24 " + escape($errors.studyFocus ? "input-error" : "", true)
      },
      {
        placeholder: "e.g. Computer Science, Mathematics, etc."
      },
      { name: "studyFocus" },
      {
        "aria-invalid": escape_attribute_value($errors.studyFocus ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}>${escape($form.studyFocus || "")}</textarea> ${$errors.studyFocus ? `<small class="svelte-c8t25j">${escape($errors.studyFocus)}</small>` : ``}</label> <label class="form-control max-h-48"><div class="label" data-svelte-h="svelte-roho7f"><span class="label-text text-primary">Describe your tutoring or relevant experience(s)</span></div> <textarea${spread(
    [
      {
        class: "textarea textarea-ghost h-24 " + escape($errors.tutoringExperience ? "input-error" : "", true)
      },
      {
        placeholder: "What would make you a good tutor..."
      },
      { name: "tutoringExperience" },
      {
        "aria-invalid": escape_attribute_value($errors.tutoringExperience ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}>${escape($form.tutoringExperience || "")}</textarea> ${$errors.tutoringExperience ? `<small class="svelte-c8t25j">${escape($errors.tutoringExperience)}</small>` : ``}</label> <label class="form-control w-full"><div class="label" data-svelte-h="svelte-71bfpt"><span class="label-text text-primary">What subjects would you like to tutor?</span></div> <input${spread(
    [
      { type: "text" },
      {
        placeholder: "Math, Science, English, etc."
      },
      { name: "subjectsToTutor" },
      {
        class: "input input-ghost w-full " + escape($errors.subjectsToTutor ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.subjectsToTutor ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.subjectsToTutor, 0)}> ${$errors.subjectsToTutor ? `<small class="svelte-c8t25j">${escape($errors.subjectsToTutor)}</small>` : ``}</label> <label class="form-control w-full"><div class="label" data-svelte-h="svelte-1c3v15f"><span class="label-text text-primary">How did you hear about us?</span></div> <input${spread(
    [
      { type: "text" },
      {
        placeholder: "Google search, referral, etc."
      },
      { name: "howDidYouHear" },
      {
        class: "input input-ghost w-full " + escape($errors.howDidYouHear ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.howDidYouHear ? "true" : void 0)
      },
      escape_object(constraints)
    ],
    {}
  )}${add_attribute("value", $form.howDidYouHear, 0)}> ${$errors.howDidYouHear ? `<small class="svelte-c8t25j">${escape($errors.howDidYouHear)}</small>` : ``}</label> <label class="form-control w-full max-w-xs"><div class="label" data-svelte-h="svelte-ajkqm"><span class="label-text text-primary">Upload your Resume/CV</span></div> <input${spread(
    [
      { type: "file" },
      { name: "resumeUpload" },
      {
        class: "file-input file-input-ghost w-full " + escape($errors.resumeUpload ? "input-error" : "", true)
      },
      {
        "aria-invalid": escape_attribute_value($errors.resumeUpload ? "true" : void 0)
      },
      escape_object(constraints),
      { accept: ".pdf,application/pdf" }
    ],
    {}
  )}> ${$errors.resumeUpload ? `<small class="svelte-c8t25j">${escape($errors.resumeUpload)}</small>` : ``}</label> <label class="form-control items-center" data-svelte-h="svelte-kymkef"><button type="submit" class="btn btn-primary w-1/2 mt-4">Submit Application</button></label></form></div> </div>`;
});
export {
  Page as default
};
