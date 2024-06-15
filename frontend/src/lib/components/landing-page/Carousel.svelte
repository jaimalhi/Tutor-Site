<script>
   import { onMount } from "svelte";

   let subjects = [
      { name: "Math", icon: "/icons/math.png", color: "bg-blue-100" },
      { name: "English", icon: "/icons/english.png", color: "bg-pink-100" },
      { name: "History", icon: "/icons/history.png", color: "bg-yellow-100" },
      { name: "Chemistry", icon: "/icons/chem.png", color: "bg-blue-200" },
      { name: "Biology", icon: "/icons/biology.png", color: "bg-green-100" },
      { name: "Physics", icon: "/icons/physics.png", color: "bg-orange-100" },
      { name: "Earth Science", icon: "/icons/earth-sci.png", color: "bg-orange-300" },
   ];

   let currentScroll = 0;
   let scrollSpeed = 0.5; // Adjust the speed by changing this value
   let itemWidth = 300; // Adjust based on your item width

   onMount(() => {
      startScrolling();
   });

   function startScrolling() {
      const scroll = () => {
         currentScroll -= scrollSpeed;
         if (Math.abs(currentScroll) >= subjects.length * itemWidth) {
            currentScroll = 0;
         }
         requestAnimationFrame(scroll);
      };
      scroll();
   }
</script>

<div class="carousel-container" style="transform: translateX({currentScroll}px);">
   {#each subjects as subject}
      <div class={`carousel-item card ${subject.color} p-5 m-2 shadow-md`}>
         <div class="card-body items-center text-center">
            <img src={subject.icon} alt={subject.name} width="64px" class="mb-2" />
            <h2 class="card-title">{subject.name}</h2>
         </div>
      </div>
   {/each}
   {#each subjects as subject}
      <!-- Duplicate items for seamless scrolling -->
      <div class={`carousel-item card ${subject.color} p-5 m-2 shadow-md`}>
         <div class="card-body items-center text-center">
            <img src={subject.icon} alt={subject.name} width="64px" class="mb-2" />
            <h2 class="card-title">{subject.name}</h2>
         </div>
      </div>
   {/each}
</div>

<style>
   .carousel-container {
      width: 100%;
      display: flex;
      white-space: nowrap;
   }
   .carousel-item {
      width: calc(15% - 1rem);
   }
</style>
