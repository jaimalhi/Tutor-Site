<script>
   // ?    import "../global.css";
   import "tailwindcss/tailwind.css";
   import Navbar from "$lib/components/layout/Navbar.svelte";
   import Footer from "$lib/components/layout/Footer.svelte";
</script>

<Navbar />
<div class="pt-20 md:pt-0">
   <slot />
</div>
<Footer />

<!-- ? Is the below needed -->
<!-- <style>
   @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
   :global(html, body) {
      font-family: "Inter", sans-serif;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
   }
</style> -->
