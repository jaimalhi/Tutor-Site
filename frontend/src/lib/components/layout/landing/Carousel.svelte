<script lang="ts">
   let subjects = [
      { name: "Math", icon: "/icons/math.png", color: "bg-blue-100" },
      { name: "English", icon: "/icons/english.png", color: "bg-pink-100" },
      { name: "History", icon: "/icons/history.png", color: "bg-yellow-100" },
      { name: "Chemistry", icon: "/icons/chem.png", color: "bg-blue-200" },
      { name: "Biology", icon: "/icons/biology.png", color: "bg-green-100" },
      { name: "Physics", icon: "/icons/physics.png", color: "bg-orange-100" },
      { name: "Earth Science", icon: "/icons/earth-sci.png", color: "bg-orange-300" },
   ];
</script>

<div class="carousel">
   <div class="carousel-track">
      {#each subjects as subject}
         <div class={`carousel-item card ${subject.color} p-5 m-2 shadow-md`}>
            <div class="card-body items-center text-center">
               <img src={subject.icon} alt={subject.name} width="64px" class="mb-2" />
               <h2 class="card-title">{subject.name}</h2>
            </div>
         </div>
      {/each}
      {#each subjects as subject}
         <div class={`carousel-item card ${subject.color} p-5 m-2 shadow-md`}>
            <div class="card-body items-center text-center">
               <img src={subject.icon} alt={subject.name} width="64px" class="mb-2" />
               <h2 class="card-title">{subject.name}</h2>
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
      animation: scroll 29s linear infinite;
   }

   .carousel-item {
      width: calc(12% - 1rem); /* Adjust based on your number of items */
      flex: none;
      scroll-snap-align: center;
   }

   @keyframes scroll {
      0% {
         transform: translateX(0);
      }
      100% {
         transform: translateX(-100%);
      }
   }
</style>
