<script lang="ts">
   import type { Writable } from "svelte/store";
   import type { Readable } from "svelte/store";

   export let message: Writable<any>;
   export let allErrors: Readable<any>;
   export let successMsg: string = "";
   export let errorMsg: string = "";

   let fadeOut: boolean = false;
   let showToast: boolean = false;
   let toastSuccess: boolean;

   $: {
      if ($message) {
         fadeOut = false;
         showToast = true;
         toastSuccess = true;
         setTimeout(() => {
            fadeOut = true;
            setTimeout(() => {
               showToast = false;
            }, 500); // Duration of the fade-out effect
         }, 3000); // Show for 2.5 seconds, then fade out for 0.5 seconds
      } else if ($allErrors.length > 0) {
         fadeOut = false;
         showToast = true;
         toastSuccess = false;
         setTimeout(() => {
            fadeOut = true;
            setTimeout(() => {
               showToast = false;
            }, 500); // Duration of the fade-out effect
         }, 3000); // Show for 2.5 seconds, then fade out for 0.5 seconds
      }
   }
</script>

{#if showToast}
   <div class="toast toast-bottom toast-end {fadeOut ? 'fade-out' : ''}">
      <div class="alert {toastSuccess ? 'alert-success' : 'alert-error'}">
         <span>
            {toastSuccess ? successMsg : errorMsg}
         </span>
      </div>
   </div>
{/if}

<style>
   .fade-out {
      opacity: 0;
      transition: opacity 0.5s;
   }
</style>
