<script lang="ts">
   export let src: string;
   export let alt: string;
   export let borderColor: string;
   export let widthClass: string;
   export let offsetDirection: string;

   let rotationClass = "";

   if (offsetDirection === "left") {
      rotationClass = "-rotate-3 -translate-x-3";
   } else if (offsetDirection === "right") {
      rotationClass = "rotate-3 translate-x-3";
   }
</script>

<div class="mx-auto {widthClass}">
   <div class="p-4 shadow-lg {borderColor} custom-border">
      <img {src} {alt} class="w-full rounded-lg {rotationClass}" />
   </div>
</div>

<style>
   .custom-border {
      border-width: 3px;
      border-radius: 8px;
   }
</style>
