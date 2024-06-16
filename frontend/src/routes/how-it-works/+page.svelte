<script lang="ts">
   import InfoCard from "$lib/components/utils/InfoCard.svelte";
   import type { InfoCardProps } from "$lib/components/utils/infoCard.ts";

   let htmlString1: string = `
   <ul class="list-disc ml-5">
       <li>Featuring top tutors and straightforward payment process with highly secure payment software, ensuring you receive a receipt for every transaction</li>
       <li>Exceptional support team is available seven days a week to assist you</li>
       <li>Lesson cancellation free of charge, provided you notify us at least 6 hours before your scheduled lesson</li>
       <li>Tailored to your needs, ensuring you receive undivided attention.</li>
       <li>Flexible scheduling to fit your preferences.</li>
   </ul>
   `;

   const infoCard1: InfoCardProps = {
      heading: "Why choose Avio Tutor?",
      description: htmlString1,
      linkText: null,
      src: "laptop.png",
      alt: "laptop on desk",
      textOffset: "left",
      widthClass: "w-5/12",
      borderColor: "border-teal-400",
   };

   let htmlString2: string = `
   <p class="mb-2">USING A SCIENTIFICALLY-PROVEN LESSON FRAMEWORK</p>
   <ol class="list-decimal ml-5">
       <li>Student Check-in and Introduction </li>
       <li>Learning and Consolidation</li>
       <li>Practice and Skill Development</li>
       <li>Review and Planning</li>
   </ol>
   `;

   const infoCard2: InfoCardProps = {
      heading: "How your lessons work",
      description: htmlString2,
      linkText: null,
      src: "laptop.png",
      alt: "laptop on desk",
      textOffset: "right",
      widthClass: "w-5/12",
      borderColor: "border-yellow-400",
   };
</script>

<!-- Top Section -->
<div class="flex justify-center items-center text-base-100 bg-neutral-content h-80 mb-20">
   <h1 class="text-6xl mt-12">HOW YOUR TUTORING WORKS <span class="text-primary">FOR YOU</span></h1>
</div>

<!-- Info Card 1 -->
<div class="flex justify-center items-baseline mb-12">
   <InfoCard props={infoCard1} />
</div>

<!-- How to get started -->
<div class="separator-top"></div>
<div class="flex flex-col justify-center items-center" style="background-color: #31a9bf;">
   <h1 class="text-5xl font-semibold mb-8">
      <span class="text-base-100">How to</span> get Started
   </h1>
   <ul class="flex justify-center items-center list-decimal space-x-10 mb-8" id="get-started">
      <li>
         <h3>Submit Form</h3>
         <p>
            Fill in a consultation form and we'll get in touch within 24 hours - it only takes 2
            minutes!
         </p>
      </li>
      <li>
         <h3>Free Consult</h3>
         <p>
            Conduct a free 15-min consultation with your tutor over Zoom, creating a tutoring plan.
         </p>
      </li>
      <li>
         <h3>Start Lessons</h3>
         <p>Start lessons with your tutor, following a personalized learning program!</p>
      </li>
   </ul>
   <a href="/" class="btn btn-accent px-8">Book a FREE Consultation</a>
</div>
<div class="separator-bottom"></div>

<!-- Info Card 2 -->
<div class="flex justify-center items-baseline mb-12">
   <InfoCard props={infoCard2} />
</div>

<style>
   #get-started > li {
      width: 20rem;
      font-weight: 600;
      font-size: large;
   }

   #get-started p {
      font-weight: 400;
      font-size: medium;
   }

   .separator-top {
      width: 0;
      height: 0;
      border-right: 100vw solid transparent;
      border-bottom: 5vw solid #31a9bf;
   }
   .separator-bottom {
      width: 0;
      height: 0;
      border-left: 100vw solid transparent;
      border-top: 5vw solid #31a9bf;
   }
</style>
