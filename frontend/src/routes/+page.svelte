<script lang="ts">
   import Carousel from "$lib/components/landing-page/Carousel.svelte";
   import TypingEffect from "$lib/components/landing-page/TypingEffect.svelte";
   import InfoCard from "$lib/components/utils/InfoCard.svelte";
   import type { InfoCardProps } from "$lib/components/utils/infoCard.ts";

   const infoCard1: InfoCardProps = {
      heading: "Personalized 1-on-1 Lessons",
      description:
         "Following a thorough review of your performance, objectives, and curriculum in our complimentary Zoom consultation, we develop a personalized lesson plan that aligns with your learning approach and timetable.",
      linkText: "See how it works",
      linkHref: "/how-it-works",
      src: "/general/studying.jpg",
      alt: "woman studying on a desk with a laptop and books",
      textOffset: "left",
      widthClass: "w-5/12",
      borderColor: "border-yellow-400",
   };

   const infoCard2: InfoCardProps = {
      heading: "Learn from Top University Grad Tutors",
      description:
         "Our experienced tutors, who are graduates of top universities, are  experts in their respective fields and able to teach at all levels. They are not only intellectually adept but also compassionate and captivating in their teaching approach.",
      linkText: "Contact Us",
      linkHref: "/contact",
      src: "/general/grad-cap.jpg",
      alt: "women in graduation cap and gown",
      textOffset: "right",
      widthClass: "w-5/12",
      borderColor: "border-teal-400",
   };
</script>

<!-- Hero Section -->
<div class="hero min-h-screen place-items-start items-center" id="hero-head">
   <div class="hero-overlay bg-opacity-60"></div>
   <div class="hero-content text-left text-neutral-content ml-12">
      <div class="max-w-md text-base-100">
         <p class="text-black mb-5 bg-blue-200 rounded-md px-4 w-max">Online Private Tutoring</p>
         <h1 class="mb-5 text-5xl font-bold">
            Find the perfect tutor for <TypingEffect />
         </h1>
         <a href="/how-it-works" class="btn btn-primary px-6 text-base-100">Get Started &#10142;</a>
      </div>
   </div>
</div>

<!-- Subject Display -->
<div class="separator-top"></div>
<div class="mx-1" style="background-color: #ebebeb; width: 100vw">
   <p class="text-center text-primary font-semibold mb-1">Subjects</p>
   <h1 class="text-center text-3xl md:text-4xl font-bold mb-4">
      Specialized education in a variety of subjects
   </h1>
   <Carousel />
</div>
<div class="separator-bottom"></div>

<!-- General Content -->
<div class="flex flex-col justify-center items-center mt-14 mb-32">
   <InfoCard props={infoCard1} />
   <div class="md:mb-32" />

   <hr class="flex w-10/12 border-t-2 border-pink-300 my-12 md:hidden" />

   <InfoCard props={infoCard2} />
</div>

<style>
   #hero-head {
      background-image: url("/hero-image.png");
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
