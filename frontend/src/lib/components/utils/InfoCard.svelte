<script lang="ts">
   import type { InfoCardProps } from "$lib/components/utils/infoCard.ts";

   export let props: InfoCardProps;

   let offsetDirection = "";
   let rotationClass = "";

   if (props.textOffset === "right") {
      offsetDirection = "flex-row-reverse -space-x-16";
      rotationClass = "rotate-3 translate-x-3";
   } else if (props.textOffset === "left") {
      offsetDirection = "space-x-16";
      rotationClass = "-rotate-3 -translate-x-3";
   }
</script>

<div class="flex justify-between items-center w-8/12 {offsetDirection}">
   <aside class="w-5/12">
      <h1 class="text-5xl font-semibold text-primary mb-6">{props.heading}</h1>
      <p class="mb-6">{@html props.description}</p>
      {#if props.linkText !== null}
         <a
            href="/"
            class="w-11/12 text-2xl flex justify-between border-b-2 border-black hover:text-secondary hover:border-b-secondary">
            <p>{props.linkText}</p>
            <p>&#10142;</p>
         </a>
      {/if}
   </aside>
   <div class="mx-auto {props.widthClass} min-w-64">
      <div class="p-4 shadow-lg {props.borderColor} custom-border">
         <img src={props.src} alt={props.alt} class="w-full rounded-lg {rotationClass}" />
      </div>
   </div>
</div>

<style>
   .custom-border {
      border-width: 3px;
      border-radius: 8px;
   }
</style>
