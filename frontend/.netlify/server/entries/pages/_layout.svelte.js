import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { c as calendlyLink } from "../../chunks/links.js";
const css$1 = {
  code: "#nav-dropdown.svelte-crvysy li.svelte-crvysy a.svelte-crvysy{touch-action:manipulation}",
  map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\r\\n   import { calendlyLink } from \\"$lib/config/links.js\\";\\r\\n\\r\\n   let dropdownOpen = false;\\r\\n\\r\\n   function toggleDropdown() {\\r\\n      dropdownOpen = !dropdownOpen;\\r\\n   }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"navbar absolute bg-neutral-content md:bg-transparent z-10\\">\\r\\n   <div class=\\"navbar-start mt-1\\">\\r\\n      <a href=\\"/\\" class=\\"flex justify-end\\">\\r\\n         <img src=\\"/logos/avio-light.png\\" width=\\"128px\\" alt=\\"avio-tutor-logo\\" />\\r\\n      </a>\\r\\n   </div>\\r\\n   <div class=\\"navbar-center hidden lg:flex\\">\\r\\n      <ul class=\\"menu menu-horizontal px-1 font-semibold text-base-100\\">\\r\\n         <li><a href=\\"/\\">Home</a></li>\\r\\n         <li><a href=\\"/how-it-works\\">How it Works</a></li>\\r\\n         <li><a href=\\"/contact\\">Contact Us</a></li>\\r\\n      </ul>\\r\\n   </div>\\r\\n   <div class=\\"navbar-end\\">\\r\\n      <button class=\\"dropdown dropdown-left\\" on:click={toggleDropdown}>\\r\\n         <div tabindex=\\"0\\" role=\\"button\\" class=\\"btn btn-ghost lg:hidden\\">\\r\\n            <svg\\r\\n               xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n               class=\\"h-5 w-5 text-base-100\\"\\r\\n               fill=\\"none\\"\\r\\n               viewBox=\\"0 0 24 24\\"\\r\\n               stroke=\\"currentColor\\">\\r\\n               <path\\r\\n                  stroke-linecap=\\"round\\"\\r\\n                  stroke-linejoin=\\"round\\"\\r\\n                  stroke-width=\\"2\\"\\r\\n                  d=\\"M4 6h16M4 12h8m-8 6h16\\" />\\r\\n            </svg>\\r\\n         </div>\\r\\n         <ul\\r\\n            class=\\"menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52 font-semibold {dropdownOpen\\r\\n               ? 'dropdown-open'\\r\\n               : ''}\\"\\r\\n            id=\\"nav-dropdown\\">\\r\\n            <li><a href=\\"/\\">Home</a></li>\\r\\n            <li>\\r\\n               <a href=\\"/how-it-works\\">How it Works</a>\\r\\n            </li>\\r\\n            <li>\\r\\n               <a href=\\"/contact\\">Contact Us</a>\\r\\n            </li>\\r\\n            <hr />\\r\\n            <!-- <li><a href=\\"/login\\" class=\\"text-primary\\">Login</a></li> -->\\r\\n            <li>\\r\\n               <a href={calendlyLink} target=\\"_blank\\" class=\\"text-primary\\"> FREE Consultation </a>\\r\\n            </li>\\r\\n         </ul>\\r\\n      </button>\\r\\n      <div class=\\"hidden lg:flex\\">\\r\\n         <!-- <a href=\\"/login\\" class=\\"btn btn-outline text-base-100 mr-4 px-6\\">Login</a> -->\\r\\n         <a\\r\\n            href={calendlyLink}\\r\\n            target=\\"_blank\\"\\r\\n            class=\\"btn btn-primary text-base-100 mr-4\\"\\r\\n            on:click={() => (window.location.href = calendlyLink)}>\\r\\n            Book a FREE Consultation\\r\\n         </a>\\r\\n      </div>\\r\\n   </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   /* Handle touch events explicitly */\\r\\n   #nav-dropdown li a {\\r\\n      touch-action: manipulation;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyEG,2BAAa,CAAC,gBAAE,CAAC,eAAE,CAChB,YAAY,CAAE,YACjB"}`
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="navbar absolute bg-neutral-content md:bg-transparent z-10"><div class="navbar-start mt-1" data-svelte-h="svelte-d7zb9j"><a href="/" class="flex justify-end"><img src="/logos/avio-light.png" width="128px" alt="avio-tutor-logo"></a></div> <div class="navbar-center hidden lg:flex" data-svelte-h="svelte-1ye2zaa"><ul class="menu menu-horizontal px-1 font-semibold text-base-100"><li class="svelte-crvysy"><a href="/" class="svelte-crvysy">Home</a></li> <li class="svelte-crvysy"><a href="/how-it-works" class="svelte-crvysy">How it Works</a></li> <li class="svelte-crvysy"><a href="/contact" class="svelte-crvysy">Contact Us</a></li></ul></div> <div class="navbar-end"><button class="dropdown dropdown-left"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden" data-svelte-h="svelte-lkh4n1"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="${"menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52 font-semibold " + escape("", true) + " svelte-crvysy"}" id="nav-dropdown"><li data-svelte-h="svelte-1huopth"><a href="/" class="svelte-crvysy">Home</a></li> <li data-svelte-h="svelte-1349kpa"><a href="/how-it-works" class="svelte-crvysy">How it Works</a></li> <li data-svelte-h="svelte-z8dn4m"><a href="/contact" class="svelte-crvysy">Contact Us</a></li> <hr>  <li data-svelte-h="svelte-bczvwo"><a${add_attribute("href", calendlyLink, 0)} target="_blank" class="text-primary svelte-crvysy">FREE Consultation</a></li></ul></button> <div class="hidden lg:flex"> <a${add_attribute("href", calendlyLink, 0)} target="_blank" class="btn btn-primary text-base-100 mr-4" data-svelte-h="svelte-fzptj3">Book a FREE Consultation</a></div></div> </div>`;
});
const css = {
  code: "#icons.svelte-1siraj8 img.svelte-1siraj8{filter:invert(1) brightness(2);margin-right:8px;width:20px}#icons.svelte-1siraj8.svelte-1siraj8{display:flex}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer class=\\"footer p-10 bg-neutral text-base-100\\">\\r\\n   <a href=\\"/\\">\\r\\n      <img src=\\"/logos/avio-light.png\\" width=\\"128px\\" alt=\\"avio-tutor-logo\\" />\\r\\n   </a>\\r\\n   <nav>\\r\\n      <h6 class=\\"footer-title\\">About Us</h6>\\r\\n      <a href=\\"/how-it-works\\" class=\\"link link-hover\\">How it Works</a>\\r\\n      <a href=\\"/contact\\" class=\\"link link-hover\\">Contact Us</a>\\r\\n      <a href=\\"/careers/become-a-tutor\\" class=\\"link link-hover\\">Become a Tutor</a>\\r\\n   </nav>\\r\\n   <nav>\\r\\n      <h6 class=\\"footer-title\\">Legal</h6>\\r\\n      <a href=\\"/legal/terms-of-service\\" class=\\"link link-hover\\">Terms of Service</a>\\r\\n      <a href=\\"/legal/privacy-policy\\" class=\\"link link-hover\\">Privacy Policy</a>\\r\\n   </nav>\\r\\n   <nav>\\r\\n      <h6 class=\\"footer-title\\">Contact</h6>\\r\\n      <a\\r\\n         class=\\"link link-hover\\"\\r\\n         id=\\"icons\\"\\r\\n         data-auto-recognition=\\"true\\"\\r\\n         href=\\"mailto:aviotutor@gmail.com\\">\\r\\n         <img src=\\"/icons/mail.png\\" alt=\\"email-icon\\" />\\r\\n         aviotutor@gmail.com\\r\\n      </a>\\r\\n      <a class=\\"link link-hover\\" id=\\"icons\\" href=\\"tel:+17789890044\\">\\r\\n         <img src=\\"/icons/telephone.png\\" alt=\\"email-icon\\" />\\r\\n         +1 778 989 0044\\r\\n      </a>\\r\\n   </nav>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n   #icons img {\\r\\n      filter: invert(1) brightness(2);\\r\\n      margin-right: 8px;\\r\\n      width: 20px;\\r\\n   }\\r\\n\\r\\n   #icons {\\r\\n      display: flex;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiCG,qBAAM,CAAC,kBAAI,CACR,MAAM,CAAE,OAAO,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAC/B,YAAY,CAAE,GAAG,CACjB,KAAK,CAAE,IACV,CAEA,oCAAO,CACJ,OAAO,CAAE,IACZ"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="footer p-10 bg-neutral text-base-100" data-svelte-h="svelte-aupisx"><a href="/"><img src="/logos/avio-light.png" width="128px" alt="avio-tutor-logo"></a> <nav><h6 class="footer-title">About Us</h6> <a href="/how-it-works" class="link link-hover">How it Works</a> <a href="/contact" class="link link-hover">Contact Us</a> <a href="/careers/become-a-tutor" class="link link-hover">Become a Tutor</a></nav> <nav><h6 class="footer-title">Legal</h6> <a href="/legal/terms-of-service" class="link link-hover">Terms of Service</a> <a href="/legal/privacy-policy" class="link link-hover">Privacy Policy</a></nav> <nav><h6 class="footer-title">Contact</h6> <a class="link link-hover svelte-1siraj8" id="icons" data-auto-recognition="true" href="mailto:aviotutor@gmail.com"><img src="/icons/mail.png" alt="email-icon" class="svelte-1siraj8">
         aviotutor@gmail.com</a> <a class="link link-hover svelte-1siraj8" id="icons" href="tel:+17789890044"><img src="/icons/telephone.png" alt="email-icon" class="svelte-1siraj8">
         +1 778 989 0044</a></nav> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="pt-20 md:pt-0">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  `;
});
export {
  Layout as default
};
