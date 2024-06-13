<script>
   import TypingEffect from "$lib/components/layout/landing/TypingEffect.svelte";
</script>

<!-- Hero Section -->
<div class="hero min-h-screen place-items-start items-center" id="hero-head">
   <div class="hero-overlay bg-opacity-60"></div>
   <div class="hero-content text-left text-neutral-content ml-12">
      <div class="max-w-md text-base-100">
         <p class="mb-5">Online Private Tutoring</p>
         <h1 class="mb-5 text-5xl font-bold">
            Find the perfect tutor for <TypingEffect />
         </h1>
         <button class="btn btn-primary px-6 text-base-100">Get Started &#10142;</button>
      </div>
   </div>
</div>

<style>
   #hero-head {
      background-image: url("hero-image.jpeg");
      background-size: center;
      background-position: center;
      background-repeat: no-repeat;
   }
</style>
