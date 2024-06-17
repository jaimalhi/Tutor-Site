import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { I as InfoCard } from "../../../chunks/InfoCard.js";
import { c as calendlyLink } from "../../../chunks/links.js";
const css = {
  code: "#get-started.svelte-525oo3>li.svelte-525oo3{width:16rem;font-weight:600;font-size:large}#get-started.svelte-525oo3 p.svelte-525oo3{font-weight:400;font-size:medium}.separator-top.svelte-525oo3.svelte-525oo3{width:0;height:0;margin-bottom:-1px;border-right:100vw solid transparent;border-bottom:5vw solid #31a9bf}.separator-bottom.svelte-525oo3.svelte-525oo3{width:0;height:0;margin-top:-1px;border-left:100vw solid transparent;border-top:5vw solid #31a9bf}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import InfoCard from \\"$lib/components/utils/InfoCard.svelte\\";\\nimport { calendlyLink } from \\"$lib/config/links.js\\";\\nlet htmlString1 = `\\n   <ul class=\\"list-disc ml-5\\">\\n       <li>Featuring top tutors and straightforward payment process with highly secure payment software, ensuring you receive a receipt for every transaction</li>\\n       <li>Exceptional support team is available seven days a week to assist you</li>\\n       <li>Lesson cancellation free of charge, provided you notify us at least 6 hours before your scheduled lesson</li>\\n       <li>Tailored to your needs, ensuring you receive undivided attention.</li>\\n       <li>Flexible scheduling to fit your preferences.</li>\\n   </ul>\\n   `;\\nconst infoCard1 = {\\n  heading: \\"Why choose Avio Tutor?\\",\\n  description: htmlString1,\\n  linkText: null,\\n  linkHref: null,\\n  src: \\"/general/social.jpg\\",\\n  alt: \\"two people conversing while holding a tablet\\",\\n  textOffset: \\"left\\",\\n  widthClass: \\"w-5/12\\",\\n  borderColor: \\"border-teal-400\\"\\n};\\nlet htmlString2 = `\\n   <p class=\\"mb-2\\">USING A PROVEN LESSON FRAMEWORK</p>\\n   <ol class=\\"list-decimal ml-5\\">\\n       <li>Student Check-in and Introduction </li>\\n       <li>Learning and Consolidation</li>\\n       <li>Practice and Skill Development</li>\\n       <li>Review and Planning</li>\\n   </ol>\\n   `;\\nconst infoCard2 = {\\n  heading: \\"How your Lessons Work\\",\\n  description: htmlString2,\\n  linkText: null,\\n  linkHref: null,\\n  src: \\"/general/classroom.jpg\\",\\n  alt: \\"student raising hand in classroom\\",\\n  textOffset: \\"right\\",\\n  widthClass: \\"w-5/12\\",\\n  borderColor: \\"border-yellow-400\\"\\n};\\n<\/script>\\r\\n\\r\\n<!-- Top Section -->\\r\\n<div class=\\"flex justify-center items-center text-base-100 bg-neutral-content h-80 mb-20\\">\\r\\n   <h1 class=\\"text-5xl lg:text-6xl text-center mx-2\\">\\r\\n      HOW OUR TUTORING WORKS <span class=\\"text-primary\\">FOR YOU</span>\\r\\n   </h1>\\r\\n</div>\\r\\n\\r\\n<!-- Info Card 1 -->\\r\\n<div class=\\"flex justify-center items-center mb-12\\">\\r\\n   <InfoCard props={infoCard1} />\\r\\n</div>\\r\\n\\r\\n<!-- How to get started -->\\r\\n<div class=\\"separator-top\\"></div>\\r\\n<div class=\\"flex flex-col justify-center items-center py-3\\" style=\\"background-color: #31a9bf;\\">\\r\\n   <h1 class=\\"text-4xl lg:text-5xl font-semibold mb-8\\">\\r\\n      <span class=\\"text-base-100\\">How to</span> get Started\\r\\n   </h1>\\r\\n   <ul\\r\\n      class=\\"flex flex-col lg:flex-row mb-8 justify-center items-start list-decimal lg:space-x-16 space-y-2 lg:space-y-0\\"\\r\\n      id=\\"get-started\\">\\r\\n      <li>\\r\\n         <h3>Submit Form</h3>\\r\\n         <p>\\r\\n            Fill in a consultation form and we\'ll get in touch within 24 hours - it only takes 2\\r\\n            minutes!\\r\\n         </p>\\r\\n      </li>\\r\\n      <li>\\r\\n         <h3>Free Consult</h3>\\r\\n         <p>\\r\\n            Conduct a free 15-min consultation with your tutor over Zoom, creating a tutoring plan.\\r\\n         </p>\\r\\n      </li>\\r\\n      <li>\\r\\n         <h3>Start Lessons</h3>\\r\\n         <p>Start lessons with your tutor, following a personalized learning program!</p>\\r\\n      </li>\\r\\n   </ul>\\r\\n   <a href={calendlyLink} target=\\"_blank\\" class=\\"btn btn-accent px-8\\">Book a FREE Consultation</a>\\r\\n</div>\\r\\n<div class=\\"separator-bottom mb-8\\"></div>\\r\\n\\r\\n<!-- Info Card 2 -->\\r\\n<div class=\\"flex justify-center items-center mb-20\\">\\r\\n   <InfoCard props={infoCard2} />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   #get-started > li {\\r\\n      width: 16rem;\\r\\n      font-weight: 600;\\r\\n      font-size: large;\\r\\n   }\\r\\n\\r\\n   #get-started p {\\r\\n      font-weight: 400;\\r\\n      font-size: medium;\\r\\n   }\\r\\n\\r\\n   .separator-top {\\r\\n      width: 0;\\r\\n      height: 0;\\r\\n      margin-bottom: -1px;\\r\\n      border-right: 100vw solid transparent;\\r\\n      border-bottom: 5vw solid #31a9bf;\\r\\n   }\\r\\n   .separator-bottom {\\r\\n      width: 0;\\r\\n      height: 0;\\r\\n      margin-top: -1px;\\r\\n      border-left: 100vw solid transparent;\\r\\n      border-top: 5vw solid #31a9bf;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6FG,0BAAY,CAAG,gBAAG,CACf,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KACd,CAEA,0BAAY,CAAC,eAAE,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MACd,CAEA,0CAAe,CACZ,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,KAAK,CAAC,KAAK,CAAC,WAAW,CACrC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC5B,CACA,6CAAkB,CACf,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,KAAK,CAAC,KAAK,CAAC,WAAW,CACpC,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACzB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let htmlString1 = `
   <ul class="list-disc ml-5">
       <li>Featuring top tutors and straightforward payment process with highly secure payment software, ensuring you receive a receipt for every transaction</li>
       <li>Exceptional support team is available seven days a week to assist you</li>
       <li>Lesson cancellation free of charge, provided you notify us at least 6 hours before your scheduled lesson</li>
       <li>Tailored to your needs, ensuring you receive undivided attention.</li>
       <li>Flexible scheduling to fit your preferences.</li>
   </ul>
   `;
  const infoCard1 = {
    heading: "Why choose Avio Tutor?",
    description: htmlString1,
    linkText: null,
    linkHref: null,
    src: "/general/social.jpg",
    alt: "two people conversing while holding a tablet",
    textOffset: "left",
    widthClass: "w-5/12",
    borderColor: "border-teal-400"
  };
  let htmlString2 = `
   <p class="mb-2">USING A PROVEN LESSON FRAMEWORK</p>
   <ol class="list-decimal ml-5">
       <li>Student Check-in and Introduction </li>
       <li>Learning and Consolidation</li>
       <li>Practice and Skill Development</li>
       <li>Review and Planning</li>
   </ol>
   `;
  const infoCard2 = {
    heading: "How your Lessons Work",
    description: htmlString2,
    linkText: null,
    linkHref: null,
    src: "/general/classroom.jpg",
    alt: "student raising hand in classroom",
    textOffset: "right",
    widthClass: "w-5/12",
    borderColor: "border-yellow-400"
  };
  $$result.css.add(css);
  return ` <div class="flex justify-center items-center text-base-100 bg-neutral-content h-80 mb-20" data-svelte-h="svelte-2l9abs"><h1 class="text-5xl lg:text-6xl text-center mx-2">HOW OUR TUTORING WORKS <span class="text-primary">FOR YOU</span></h1></div>  <div class="flex justify-center items-center mb-12">${validate_component(InfoCard, "InfoCard").$$render($$result, { props: infoCard1 }, {}, {})}</div>  <div class="separator-top svelte-525oo3"></div> <div class="flex flex-col justify-center items-center py-3" style="background-color: #31a9bf;" data-svelte-h="svelte-180s7i8"><h1 class="text-4xl lg:text-5xl font-semibold mb-8"><span class="text-base-100">How to</span> get Started</h1> <ul class="flex flex-col lg:flex-row mb-8 justify-center items-start list-decimal lg:space-x-16 space-y-2 lg:space-y-0 svelte-525oo3" id="get-started"><li class="svelte-525oo3"><h3>Submit Form</h3> <p class="svelte-525oo3">Fill in a consultation form and we&#39;ll get in touch within 24 hours - it only takes 2
            minutes!</p></li> <li class="svelte-525oo3"><h3>Free Consult</h3> <p class="svelte-525oo3">Conduct a free 15-min consultation with your tutor over Zoom, creating a tutoring plan.</p></li> <li class="svelte-525oo3"><h3>Start Lessons</h3> <p class="svelte-525oo3">Start lessons with your tutor, following a personalized learning program!</p></li></ul> <a${add_attribute("href", calendlyLink, 0)} target="_blank" class="btn btn-accent px-8">Book a FREE Consultation</a></div> <div class="separator-bottom mb-8 svelte-525oo3"></div>  <div class="flex justify-center items-center mb-20">${validate_component(InfoCard, "InfoCard").$$render($$result, { props: infoCard2 }, {}, {})} </div>`;
});
export {
  Page as default
};
