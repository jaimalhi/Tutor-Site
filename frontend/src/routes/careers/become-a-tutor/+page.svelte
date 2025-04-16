<script lang="ts">
   import { superForm } from "sveltekit-superforms";
   import type { PageData } from "./$types.ts";
   import Toast from "$lib/components/utils/Toast.svelte";
   export let data: PageData;
   import { Turnstile } from "svelte-turnstile";
   import { CAPTCHA_SITE_KEY } from "$lib/config/links.js";

   const { form, errors, allErrors, constraints, message, enhance } = superForm(data.form, {
      taintedMessage: "Are you sure you want to leave?",
   });

   let captchaToken = "";
   function captchaCallback(event: any) {
      captchaToken = event.detail.token;
      $form.captchaToken = captchaToken;
   }
</script>

<Toast
   {message}
   {allErrors}
   successMsg="Application sent successfully!"
   errorMsg="Couldn't send the application, please try again" />

<div
   class="flex flex-col justify-center items-center text-base-100 bg-neutral-content min-h-screen pb-10 pt-6 lg:pt-28">
   <div class="w-3/4 lg:w-1/2">
      <h1 class="text-primary text-5xl lg:text-6xl font-semibold mb-4">Become a Tutor</h1>
      <p class="mb-4">
         Thank you for your interest in joining our team at Avio Tutor! Please fill out the form
         below as your application to become a tutor with us. We will review your application and
         get back to you within 3-5 business days.
         <br />
         <span class="opacity-50 text-sm"
            >You can only send one application every 10 minutes.
         </span>
      </p>
      <form method="POST" enctype="multipart/form-data" class="space-y-2" use:enhance>
         <div class="flex space-x-3">
            <label class="form-control w-1/2">
               <div class="label">
                  <span class="label-text text-primary">First Name</span>
               </div>
               <input
                  type="text"
                  placeholder="Jane"
                  name="firstName"
                  class="input input-ghost w-full {$errors.firstName ? 'input-error' : ''}"
                  aria-invalid={$errors.firstName ? "true" : undefined}
                  bind:value={$form.firstName}
                  {...constraints} />
               {#if $errors.firstName}
                  <small>{$errors.firstName}</small>
               {/if}
            </label>
            <label class="form-control w-1/2">
               <div class="label">
                  <span class="label-text text-primary">Last Name</span>
               </div>
               <input
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  class="input input-ghost w-full {$errors.lastName ? 'input-error' : ''}"
                  aria-invalid={$errors.lastName ? "true" : undefined}
                  bind:value={$form.lastName}
                  {...constraints} />
               {#if $errors.lastName}
                  <small>{$errors.lastName}</small>
               {/if}
            </label>
         </div>
         <label class="form-control w-full">
            <div class="label">
               <span class="label-text text-primary">Email</span>
            </div>
            <input
               type="email"
               placeholder="janedoe@example.com"
               name="email"
               class="input input-ghost w-full {$errors.email ? 'input-error' : ''}"
               aria-invalid={$errors.email ? "true" : undefined}
               bind:value={$form.email}
               {...constraints} />
            {#if $errors.email}
               <small>{$errors.email}</small>
            {/if}
         </label>
         <label class="form-control w-full">
            <div class="label">
               <span class="label-text text-primary">Retype Email</span>
            </div>
            <input
               type="email"
               placeholder="janedoe@example.com"
               name="retypeEmail"
               class="input input-ghost w-full {$errors.retypeEmail ? 'input-error' : ''}"
               aria-invalid={$errors.retypeEmail ? "true" : undefined}
               bind:value={$form.retypeEmail}
               {...constraints} />
            {#if $errors.retypeEmail}
               <small>{$errors.retypeEmail}</small>
            {/if}
         </label>
         <label class="form-control w-full">
            <div class="label">
               <span class="label-text text-primary">Highest level of education</span>
            </div>
            <input
               type="text"
               placeholder="Bachelors Degree, Masters Degree, Doctorate, etc."
               name="educationLevel"
               class="input input-ghost w-full {$errors.educationLevel ? 'input-error' : ''}"
               aria-invalid={$errors.educationLevel ? "true" : undefined}
               bind:value={$form.educationLevel}
               {...constraints} />
            {#if $errors.educationLevel}
               <small>{$errors.educationLevel}</small>
            {/if}
         </label>
         <label class="form-control max-h-48">
            <div class="label">
               <span class="label-text text-primary">Describe the focus of your studies</span>
            </div>
            <textarea
               class="textarea textarea-ghost h-24 {$errors.studyFocus ? 'input-error' : ''}"
               placeholder="e.g. Computer Science, Mathematics, etc."
               name="studyFocus"
               aria-invalid={$errors.studyFocus ? "true" : undefined}
               bind:value={$form.studyFocus}
               {...constraints}></textarea>
            {#if $errors.studyFocus}
               <small>{$errors.studyFocus}</small>
            {/if}
         </label>
         <label class="form-control max-h-48">
            <div class="label">
               <span class="label-text text-primary"
                  >Describe your tutoring or relevant experience(s)</span>
            </div>
            <textarea
               class="textarea textarea-ghost h-24 {$errors.tutoringExperience
                  ? 'input-error'
                  : ''}"
               placeholder="What would make you a good tutor..."
               name="tutoringExperience"
               aria-invalid={$errors.tutoringExperience ? "true" : undefined}
               bind:value={$form.tutoringExperience}
               {...constraints}></textarea>
            {#if $errors.tutoringExperience}
               <small>{$errors.tutoringExperience}</small>
            {/if}
         </label>
         <label class="form-control w-full">
            <div class="label">
               <span class="label-text text-primary">What subjects would you like to tutor?</span>
            </div>
            <input
               type="text"
               placeholder="Math, Science, English, etc."
               name="subjectsToTutor"
               class="input input-ghost w-full {$errors.subjectsToTutor ? 'input-error' : ''}"
               aria-invalid={$errors.subjectsToTutor ? "true" : undefined}
               bind:value={$form.subjectsToTutor}
               {...constraints} />
            {#if $errors.subjectsToTutor}
               <small>{$errors.subjectsToTutor}</small>
            {/if}
         </label>
         <label class="form-control w-full">
            <div class="label">
               <span class="label-text text-primary">How did you hear about us?</span>
            </div>
            <input
               type="text"
               placeholder="Google search, referral, etc."
               name="howDidYouHear"
               class="input input-ghost w-full {$errors.howDidYouHear ? 'input-error' : ''}"
               aria-invalid={$errors.howDidYouHear ? "true" : undefined}
               bind:value={$form.howDidYouHear}
               {...constraints} />
            {#if $errors.howDidYouHear}
               <small>{$errors.howDidYouHear}</small>
            {/if}
         </label>
         <label class="form-control w-full max-w-xs">
            <div class="label">
               <span class="label-text text-primary">Upload your Resume/CV</span>
            </div>
            <input
               type="file"
               name="resumeUpload"
               class="file-input file-input-ghost w-full {$errors.resumeUpload
                  ? 'input-error'
                  : ''}"
               aria-invalid={$errors.resumeUpload ? "true" : undefined}
               bind:value={$form.resumeUpload}
               {...constraints}
               accept=".pdf,application/pdf" />
            {#if $errors.resumeUpload}
               <small>{$errors.resumeUpload}</small>
            {/if}
         </label>
         <label class="form-control items-center">
            <button type="submit" class="btn btn-primary w-1/2 my-4">Submit Application</button>
         </label>
         <label class="form-control items-center">
            <input
               type="text"
               name="captchaToken"
               class="hidden"
               bind:value={$form.captchaToken}
               {...constraints} />
            <Turnstile
               siteKey={CAPTCHA_SITE_KEY}
               responseFieldName="captchaToken"
               on:callback={captchaCallback} />
         </label>
      </form>
   </div>
</div>

<style>
   small {
      margin-left: 8px;
      margin-top: 4px;
      opacity: calc(0.5);
   }
</style>
