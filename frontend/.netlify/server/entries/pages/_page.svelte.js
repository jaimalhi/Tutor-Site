import { c as create_ssr_component, b as each, e as escape, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { n as null_to_empty } from "../../chunks/lifecycle.js";
import { I as InfoCard } from "../../chunks/InfoCard.js";
const css$2 = {
  code: ".carousel.svelte-1c1rs61{display:flex;overflow:hidden;position:relative;width:100%}.carousel-track.svelte-1c1rs61{display:flex;width:calc(14 * 100% / 8);animation:svelte-1c1rs61-scroll 20s linear infinite}@keyframes svelte-1c1rs61-scroll{0%{transform:translateX(0)}100%{transform:translateX(-60%)}}@media(max-width: 768px){.carousel-track.svelte-1c1rs61{animation:svelte-1c1rs61-scrollMobile 20s linear infinite}}@keyframes svelte-1c1rs61-scrollMobile{0%{transform:translateX(0)}100%{transform:translateX(-200%)}}",
  map: '{"version":3,"file":"Carousel.svelte","sources":["Carousel.svelte"],"sourcesContent":["<script lang=\\"ts\\">let subjects = [\\n  { name: \\"Math\\", icon: \\"/icons/math.png\\", color: \\"bg-blue-100\\" },\\n  { name: \\"English\\", icon: \\"/icons/english.png\\", color: \\"bg-pink-100\\" },\\n  { name: \\"History\\", icon: \\"/icons/history.png\\", color: \\"bg-yellow-100\\" },\\n  { name: \\"Chemistry\\", icon: \\"/icons/chem.png\\", color: \\"bg-blue-200\\" },\\n  { name: \\"Biology\\", icon: \\"/icons/biology.png\\", color: \\"bg-green-100\\" },\\n  { name: \\"Physics\\", icon: \\"/icons/physics.png\\", color: \\"bg-red-100\\" },\\n  { name: \\"Earth Science\\", icon: \\"/icons/earth-sci.png\\", color: \\"bg-orange-200\\" },\\n  { name: \\"Programming\\", icon: \\"/icons/coding.png\\", color: \\"bg-purple-200\\" }\\n];\\nlet duplicatedSubjects = [...subjects, ...subjects];\\n<\/script>\\r\\n\\r\\n<div class=\\"carousel\\">\\r\\n   <div class=\\"carousel-track\\">\\r\\n      {#each duplicatedSubjects as subject}\\r\\n         <div class={`carousel-item card ${subject.color} p-5 m-2 shadow-md w-32 lg:w-48`}>\\r\\n            <div class=\\"card-body justify-center items-center text-center\\">\\r\\n               <img src={subject.icon} alt={subject.name} class=\\"lg:mb-2 max-w-12 lg:max-w-16\\" />\\r\\n               <h2 class=\\"card-title text-base lg:text-xl\\">{subject.name}</h2>\\r\\n            </div>\\r\\n         </div>\\r\\n      {/each}\\r\\n   </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   .carousel {\\r\\n      display: flex;\\r\\n      overflow: hidden;\\r\\n      position: relative;\\r\\n      width: 100%;\\r\\n   }\\r\\n\\r\\n   .carousel-track {\\r\\n      display: flex;\\r\\n      width: calc(14 * 100% / 8); /* accommodate the duplicated items */\\r\\n      animation: scroll 20s linear infinite; /* default for larger screens */\\r\\n   }\\r\\n\\r\\n   @keyframes scroll {\\r\\n      0% {\\r\\n         transform: translateX(0);\\r\\n      }\\r\\n      100% {\\r\\n         transform: translateX(-60%);\\r\\n      }\\r\\n   }\\r\\n\\r\\n   /* Adjust animation speed for mobile */\\r\\n   @media (max-width: 768px) {\\r\\n      .carousel-track {\\r\\n         animation: scrollMobile 20s linear infinite;\\r\\n      }\\r\\n   }\\r\\n\\r\\n   @keyframes scrollMobile {\\r\\n      0% {\\r\\n         transform: translateX(0);\\r\\n      }\\r\\n      100% {\\r\\n         transform: translateX(-200%);\\r\\n      }\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2BG,wBAAU,CACP,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IACV,CAEA,8BAAgB,CACb,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,EAAE,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAC1B,SAAS,CAAE,qBAAM,CAAC,GAAG,CAAC,MAAM,CAAC,QAChC,CAEA,WAAW,qBAAO,CACf,EAAG,CACA,SAAS,CAAE,WAAW,CAAC,CAC1B,CACA,IAAK,CACF,SAAS,CAAE,WAAW,IAAI,CAC7B,CACH,CAGA,MAAO,YAAY,KAAK,CAAE,CACvB,8BAAgB,CACb,SAAS,CAAE,2BAAY,CAAC,GAAG,CAAC,MAAM,CAAC,QACtC,CACH,CAEA,WAAW,2BAAa,CACrB,EAAG,CACA,SAAS,CAAE,WAAW,CAAC,CAC1B,CACA,IAAK,CACF,SAAS,CAAE,WAAW,KAAK,CAC9B,CACH"}'
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subjects = [
    {
      name: "Math",
      icon: "/icons/math.png",
      color: "bg-blue-100"
    },
    {
      name: "English",
      icon: "/icons/english.png",
      color: "bg-pink-100"
    },
    {
      name: "History",
      icon: "/icons/history.png",
      color: "bg-yellow-100"
    },
    {
      name: "Chemistry",
      icon: "/icons/chem.png",
      color: "bg-blue-200"
    },
    {
      name: "Biology",
      icon: "/icons/biology.png",
      color: "bg-green-100"
    },
    {
      name: "Physics",
      icon: "/icons/physics.png",
      color: "bg-red-100"
    },
    {
      name: "Earth Science",
      icon: "/icons/earth-sci.png",
      color: "bg-orange-200"
    },
    {
      name: "Programming",
      icon: "/icons/coding.png",
      color: "bg-purple-200"
    }
  ];
  let duplicatedSubjects = [...subjects, ...subjects];
  $$result.css.add(css$2);
  return `<div class="carousel svelte-1c1rs61"><div class="carousel-track svelte-1c1rs61">${each(duplicatedSubjects, (subject) => {
    return `<div class="${escape(null_to_empty(`carousel-item card ${subject.color} p-5 m-2 shadow-md w-32 lg:w-48`), true) + " svelte-1c1rs61"}"><div class="card-body justify-center items-center text-center"><img${add_attribute("src", subject.icon, 0)}${add_attribute("alt", subject.name, 0)} class="lg:mb-2 max-w-12 lg:max-w-16"> <h2 class="card-title text-base lg:text-xl">${escape(subject.name)}</h2></div> </div>`;
  })}</div> </div>`;
});
const css$1 = {
  code: ".cursor.svelte-hywqef{display:inline-block;margin-left:-10px;width:3px;animation:svelte-hywqef-blink 1s step-end infinite}@keyframes svelte-hywqef-blink{50%{background-color:transparent}}",
  map: '{"version":3,"file":"TypingEffect.svelte","sources":["TypingEffect.svelte"],"sourcesContent":["<script>\\r\\n   import { onMount } from \\"svelte\\";\\r\\n\\r\\n   // The words to type\\r\\n   let words = [\\"Math\\", \\"Science\\", \\"English\\", \\"History\\"];\\r\\n\\r\\n   // State variables\\r\\n   let currentWordIndex = 0;\\r\\n   let currentText = \\"\\";\\r\\n   let isDeleting = false;\\r\\n\\r\\n   let typeSpeed = 150;\\r\\n   let deleteSpeed = 75;\\r\\n   let delayBetweenWords = 2000;\\r\\n\\r\\n   // Typing effect logic\\r\\n   function type() {\\r\\n      let currentWord = words[currentWordIndex];\\r\\n      if (isDeleting) {\\r\\n         currentText = currentWord.substring(0, currentText.length - 1);\\r\\n      } else {\\r\\n         currentText = currentWord.substring(0, currentText.length + 1);\\r\\n      }\\r\\n\\r\\n      if (!isDeleting && currentText === currentWord) {\\r\\n         setTimeout(() => {\\r\\n            isDeleting = true;\\r\\n            type();\\r\\n         }, delayBetweenWords);\\r\\n         return;\\r\\n      } else if (isDeleting && currentText === \\"\\") {\\r\\n         isDeleting = false;\\r\\n         currentWordIndex = (currentWordIndex + 1) % words.length;\\r\\n      }\\r\\n\\r\\n      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);\\r\\n   }\\r\\n\\r\\n   onMount(() => {\\r\\n      type();\\r\\n   });\\r\\n<\/script>\\r\\n\\r\\n<!-- Content -->\\r\\n<span class=\\"text-primary\\">{currentText}</span>\\r\\n<span class=\\"cursor bg-primary\\">&nbsp;</span>\\r\\n\\r\\n<style>\\r\\n   .cursor {\\r\\n      display: inline-block;\\r\\n      margin-left: -10px;\\r\\n      width: 3px;\\r\\n      animation: blink 1s step-end infinite;\\r\\n   }\\r\\n\\r\\n   @keyframes blink {\\r\\n      50% {\\r\\n         background-color: transparent;\\r\\n      }\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgDG,qBAAQ,CACL,OAAO,CAAE,YAAY,CACrB,WAAW,CAAE,KAAK,CAClB,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,mBAAK,CAAC,EAAE,CAAC,QAAQ,CAAC,QAChC,CAEA,WAAW,mBAAM,CACd,GAAI,CACD,gBAAgB,CAAE,WACrB,CACH"}'
};
const TypingEffect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentText = "";
  $$result.css.add(css$1);
  return ` <span class="text-primary">${escape(currentText)}</span> <span class="cursor bg-primary svelte-hywqef" data-svelte-h="svelte-ev0kux"> </span>`;
});
const css = {
  code: '#hero-head.svelte-dcs6b5{background-image:url("/hero-image.png");background-size:center;background-position:center;background-repeat:no-repeat}.separator-top.svelte-dcs6b5{width:0;height:0;margin:0;border-left:101vw solid transparent;border-bottom:5vw solid #ebebeb}.separator-bottom.svelte-dcs6b5{width:0;height:0;margin:0;border-right:101vw solid transparent;border-top:5vw solid #ebebeb}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Carousel from \\"$lib/components/landing-page/Carousel.svelte\\";\\nimport TypingEffect from \\"$lib/components/landing-page/TypingEffect.svelte\\";\\nimport InfoCard from \\"$lib/components/utils/InfoCard.svelte\\";\\nconst infoCard1 = {\\n  heading: \\"Personalized 1-on-1 Lessons\\",\\n  description: \\"Following a thorough review of your performance, objectives, and curriculum in our complimentary Zoom consultation, we develop a personalized lesson plan that aligns with your learning approach and timetable.\\",\\n  linkText: \\"How it Works\\",\\n  linkHref: \\"/how-it-works\\",\\n  src: \\"/general/studying.jpg\\",\\n  alt: \\"woman studying on a desk with a laptop and books\\",\\n  textOffset: \\"left\\",\\n  widthClass: \\"w-5/12\\",\\n  borderColor: \\"border-yellow-400\\"\\n};\\nconst infoCard2 = {\\n  heading: \\"Learn from Top University Grad Tutors\\",\\n  description: \\"Our experienced tutors, who are graduates of top universities, are  experts in their respective fields and able to teach at all levels. They are not only intellectually adept but also compassionate and captivating in their teaching approach.\\",\\n  linkText: \\"Contact Us\\",\\n  linkHref: \\"/contact\\",\\n  src: \\"/general/grad-cap.jpg\\",\\n  alt: \\"women in graduation cap and gown\\",\\n  textOffset: \\"right\\",\\n  widthClass: \\"w-5/12\\",\\n  borderColor: \\"border-teal-400\\"\\n};\\n<\/script>\\r\\n\\r\\n<!-- Hero Section -->\\r\\n<div class=\\"hero min-h-screen place-items-start items-center\\" id=\\"hero-head\\">\\r\\n   <div class=\\"hero-overlay bg-opacity-60\\"></div>\\r\\n   <div class=\\"hero-content text-left text-neutral-content ml-12\\">\\r\\n      <div class=\\"max-w-md text-base-100\\">\\r\\n         <p class=\\"text-black mb-5 bg-blue-200 rounded-md px-4 w-max\\">Online Private Tutoring</p>\\r\\n         <h1 class=\\"mb-5 text-5xl font-bold\\">\\r\\n            Find the perfect tutor for <TypingEffect />\\r\\n         </h1>\\r\\n         <a href=\\"/how-it-works\\" class=\\"btn btn-primary px-6 text-base-100\\">Get Started &#10142;</a>\\r\\n      </div>\\r\\n   </div>\\r\\n</div>\\r\\n\\r\\n<!-- Subject Display -->\\r\\n<div class=\\"separator-top\\"></div>\\r\\n<div style=\\"background-color: #ebebeb; width: 100vw\\">\\r\\n   <h1 class=\\"text-center text-3xl lg:text-4xl font-bold mb-4\\">\\r\\n      Specialized Education in a Variety of Subjects\\r\\n   </h1>\\r\\n   <Carousel />\\r\\n</div>\\r\\n<div class=\\"separator-bottom\\"></div>\\r\\n\\r\\n<!-- General Content -->\\r\\n<div class=\\"flex flex-col justify-center items-center mt-14 mb-32\\">\\r\\n   <InfoCard props={infoCard1} />\\r\\n   <div class=\\"lg:mb-32\\" />\\r\\n\\r\\n   <hr class=\\"flex w-10/12 border-t-2 border-pink-300 my-12 lg:hidden\\" />\\r\\n\\r\\n   <InfoCard props={infoCard2} />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   #hero-head {\\r\\n      background-image: url(\\"/hero-image.png\\");\\r\\n      background-size: center;\\r\\n      background-position: center;\\r\\n      background-repeat: no-repeat;\\r\\n   }\\r\\n\\r\\n   .separator-top {\\r\\n      width: 0;\\r\\n      height: 0;\\r\\n      margin: 0;\\r\\n      border-left: 101vw solid transparent;\\r\\n      border-bottom: 5vw solid #ebebeb;\\r\\n   }\\r\\n   .separator-bottom {\\r\\n      width: 0;\\r\\n      height: 0;\\r\\n      margin: 0;\\r\\n      border-right: 101vw solid transparent;\\r\\n      border-top: 5vw solid #ebebeb;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8DG,wBAAW,CACR,gBAAgB,CAAE,sBAAsB,CACxC,eAAe,CAAE,MAAM,CACvB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SACtB,CAEA,4BAAe,CACZ,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,KAAK,CAAC,KAAK,CAAC,WAAW,CACpC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC5B,CACA,+BAAkB,CACf,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,CAAC,CACT,YAAY,CAAE,KAAK,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACzB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const infoCard1 = {
    heading: "Personalized 1-on-1 Lessons",
    description: "Following a thorough review of your performance, objectives, and curriculum in our complimentary Zoom consultation, we develop a personalized lesson plan that aligns with your learning approach and timetable.",
    linkText: "How it Works",
    linkHref: "/how-it-works",
    src: "/general/studying.jpg",
    alt: "woman studying on a desk with a laptop and books",
    textOffset: "left",
    widthClass: "w-5/12",
    borderColor: "border-yellow-400"
  };
  const infoCard2 = {
    heading: "Learn from Top University Grad Tutors",
    description: "Our experienced tutors, who are graduates of top universities, are  experts in their respective fields and able to teach at all levels. They are not only intellectually adept but also compassionate and captivating in their teaching approach.",
    linkText: "Contact Us",
    linkHref: "/contact",
    src: "/general/grad-cap.jpg",
    alt: "women in graduation cap and gown",
    textOffset: "right",
    widthClass: "w-5/12",
    borderColor: "border-teal-400"
  };
  $$result.css.add(css);
  return ` <div class="hero min-h-screen place-items-start items-center svelte-dcs6b5" id="hero-head"><div class="hero-overlay bg-opacity-60"></div> <div class="hero-content text-left text-neutral-content ml-12"><div class="max-w-md text-base-100"><p class="text-black mb-5 bg-blue-200 rounded-md px-4 w-max" data-svelte-h="svelte-45f5m8">Online Private Tutoring</p> <h1 class="mb-5 text-5xl font-bold">Find the perfect tutor for ${validate_component(TypingEffect, "TypingEffect").$$render($$result, {}, {}, {})}</h1> <a href="/how-it-works" class="btn btn-primary px-6 text-base-100" data-svelte-h="svelte-18683wp">Get Started ➞</a></div></div></div>  <div class="separator-top svelte-dcs6b5"></div> <div style="background-color: #ebebeb; width: 100vw"><h1 class="text-center text-3xl lg:text-4xl font-bold mb-4" data-svelte-h="svelte-1rvrmsw">Specialized Education in a Variety of Subjects</h1> ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}</div> <div class="separator-bottom svelte-dcs6b5"></div>  <div class="flex flex-col justify-center items-center mt-14 mb-32">${validate_component(InfoCard, "InfoCard").$$render($$result, { props: infoCard1 }, {}, {})} <div class="lg:mb-32"></div> <hr class="flex w-10/12 border-t-2 border-pink-300 my-12 lg:hidden"> ${validate_component(InfoCard, "InfoCard").$$render($$result, { props: infoCard2 }, {}, {})} </div>`;
});
export {
  Page as default
};
