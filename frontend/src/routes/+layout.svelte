<script>
   import "../global.css";
   import "tailwindcss/tailwind.css";
   import Navbar from "$lib/components/layout/Navbar.svelte";
   import Footer from "$lib/components/layout/Footer.svelte";
</script>

<Navbar />
<slot />
<Footer />
