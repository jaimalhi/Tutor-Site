<script lang="ts">
   let subjects = [
      { name: "Math", icon: "/icons/math.png", color: "bg-blue-100" },
      { name: "English", icon: "/icons/english.png", color: "bg-pink-100" },
      { name: "History", icon: "/icons/history.png", color: "bg-yellow-100" },
      { name: "Chemistry", icon: "/icons/chem.png", color: "bg-blue-200" },
      { name: "Biology", icon: "/icons/biology.png", color: "bg-green-100" },
      { name: "Physics", icon: "/icons/physics.png", color: "bg-red-100" },
      { name: "Earth Science", icon: "/icons/earth-sci.png", color: "bg-orange-200" },
      { name: "Programming", icon: "/icons/coding.png", color: "bg-purple-200" },
   ];

   // Create a duplicated array for seamless wrapping
   let duplicatedSubjects = [...subjects, ...subjects];
</script>

<div class="carousel">
   <div class="carousel-track">
      {#each duplicatedSubjects as subject}
         <div class={`carousel-item card ${subject.color} p-5 m-2 shadow-md w-32 lg:w-48`}>
            <div class="card-body justify-center items-center text-center">
               <img src={subject.icon} alt={subject.name} class="lg:mb-2 max-w-12 lg:max-w-16" />
               <h2 class="card-title text-base lg:text-xl">{subject.name}</h2>
            </div>
         </div>
      {/each}
   </div>
</div>

<style>
   .carousel {
      display: flex;
      overflow: hidden;
      position: relative;
      width: 100%;
   }

   .carousel-track {
      display: flex;
      width: calc(14 * 100% / 8); /* accommodate the duplicated items */
      animation: scroll 20s linear infinite; /* default for larger screens */
   }

   @keyframes scroll {
      0% {
         transform: translateX(0);
      }
      100% {
         transform: translateX(-60%);
      }
   }

   /* Adjust animation speed for mobile */
   @media (max-width: 768px) {
      .carousel-track {
         animation: scrollMobile 20s linear infinite;
      }
   }

   @keyframes scrollMobile {
      0% {
         transform: translateX(0);
      }
      100% {
         transform: translateX(-200%);
      }
   }
</style>
