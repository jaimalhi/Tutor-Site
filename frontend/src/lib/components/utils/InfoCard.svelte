<script lang="ts">
   import type { InfoCardProps } from "$lib/components/utils/infoCard.ts";

   export let props: InfoCardProps;

   let offsetSettings = "";
   let rotationClass = "";

   if (props.textOffset === "right") {
      offsetSettings = "lg:flex-row-reverse lg:-ml-36";
      rotationClass = "rotate-3 translate-x-3";
   } else if (props.textOffset === "left") {
      offsetSettings = "";
      rotationClass = "-rotate-3 -translate-x-3";
   }
</script>

<div class="flex justify-start items-center w-8/12 {offsetSettings}">
   <aside class="lg:w-5/12">
      <h1 class="text-4xl lg:5xl font-semibold text-primary mb-6">{props.heading}</h1>
      <p class="mb-6">{@html props.description}</p>
      {#if props.linkText !== null}
         <a
            href={props.linkHref ? props.linkHref : "/"}
            class="w-11/12 text-2xl flex justify-between border-b-2 border-black hover:text-secondary hover:border-b-secondary">
            <p>{props.linkText}</p>
            <p>&#10142;</p>
         </a>
      {/if}
   </aside>
   <div class="mx-auto {props.widthClass} hidden lg:flex">
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
