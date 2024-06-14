<script>
   import Carousel from "$lib/components/layout/landing/Carousel.svelte";
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

<!-- Subject Display -->
<div class="separator-top"></div>
<div style="background-color: #ebebeb;">
   <p class="text-center text-primary font-semibold mb-1">Subjects</p>
   <h1 class="text-center text-4xl font-bold mb-4">
      Specialized education in a variety of subjects
   </h1>
   <Carousel />
</div>
<div class="separator-bottom"></div>

<!-- General Content -->
<div class="bg-secondary">PLACEHOLDER</div>

<style>
   #hero-head {
      background-image: url("hero-image.jpeg");
      background-size: center;
      background-position: center;
      background-repeat: no-repeat;
   }

   .separator-top {
      width: 0;
      height: 0;
      border-left: 100vw solid transparent;
      border-bottom: 5vw solid #ebebeb;
   }
   .separator-bottom {
      width: 0;
      height: 0;
      border-right: 100vw solid transparent;
      border-top: 5vw solid #ebebeb;
   }
</style>
