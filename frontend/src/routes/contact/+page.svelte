<script lang="ts">
   import { superForm } from "sveltekit-superforms";
   import type { PageData } from "./$types.ts";
   export let data: PageData;
   import Toast from "$lib/components/utils/Toast.svelte";
   import SuperDebug from "sveltekit-superforms";

   const { form, errors, allErrors, constraints, message, enhance } = superForm(data.form, {
      taintedMessage: "Are you sure you want to leave?",
   });
</script>

<Toast
   {message}
   {allErrors}
   successMsg="Message sent successfully!"
   errorMsg="Couldn't send the message, please try again" />

<!-- <SuperDebug data={$form} /> -->

<!-- Contact Form -->
<div
   class="flex flex-col justify-center items-center text-base-100 bg-neutral-content min-h-screen pb-6 pt-6 lg:pt-28">
   <div class="w-3/4 lg:w-1/2">
      <h1 class="text-primary text-5xl lg:text-6xl font-semibold mb-4">Contact Us</h1>
      <p class="mb-4">
         Got questions or need assistance? We're here to help! Reach out to us using the form below,
         and our support team will respond within 24 hours.
      </p>
      <form method="POST" class="space-y-2" use:enhance>
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
         <label class="form-control max-h-48">
            <div class="label">
               <span class="label-text text-primary">Message</span>
            </div>
            <textarea
               class="textarea textarea-ghost h-24 {$errors.message ? 'input-error' : ''}"
               placeholder="Math tutor required..."
               name="message"
               aria-invalid={$errors.message ? "true" : undefined}
               bind:value={$form.message}
               {...constraints}></textarea>
            {#if $errors.message}
               <small>{$errors.message}</small>
            {/if}
         </label>
         <label class="form-control items-center">
            <button class="btn btn-primary w-1/2 mt-4">Send Message</button>
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
