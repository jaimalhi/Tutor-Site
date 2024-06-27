<script>
   import "tailwindcss/tailwind.css";
   import "$lib/global.css";
   import Navbar from "$lib/components/layout/Navbar.svelte";
   import Footer from "$lib/components/layout/Footer.svelte";
</script>

<svelte:head>
   <title>Avio Tutor</title>
   <meta
      name="description"
      content="Avio Tutor provides personalized one-on-one tutoring for students of all ages. We offer flexible scheduling with virtual sessions. Our goal is to boost confidence, enhance critical thinking skills, and help students achieve academic success." />
   <link rel="canonical" href="https://www.aviotutor.com" />
   <meta name="author" content="Avio Tutor" />
   <meta property="og:title" content="Avio Tutor - Personalized 1-on-1 Tutoring" />
   <meta
      property="og:description"
      content="Avio Tutor provides personalized one-on-one tutoring for students of all ages. We offer flexible scheduling with virtual sessions. Our goal is to boost confidence, enhance critical thinking skills, and help students achieve academic success." />
   <meta property="og:url" content="https://www.aviotutor.com" />
   <meta property="og:site_name" content="Avio Tutor" />
   <meta property="og:type" content="website" />
</svelte:head>

<Navbar />
<div class="pt-20 md:pt-0">
   <slot />
</div>
<Footer />
