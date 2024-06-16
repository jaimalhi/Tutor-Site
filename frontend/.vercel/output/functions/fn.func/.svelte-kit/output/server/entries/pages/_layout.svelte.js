import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { c as calendlyLink } from "../../chunks/links.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="navbar absolute bg-neutral-content md:bg-transparent z-10" data-svelte-h="svelte-1efx043"><div class="navbar-start mt-1"><a href="/" class="flex justify-end"><img src="/logos/avio-light.png" width="128px" alt="avio-tutor-logo"></a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 font-semibold text-base-100"><li><a href="/">Home</a></li> <li><a href="/how-it-works">How it works</a></li> <li><a href="/contact">Contact Us</a></li></ul></div> <div class="navbar-end"><div class="dropdown dropdown-left"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"><li><a href="/">Home</a></li> <li><a href="/how-it-works">How it works</a></li> <li><a href="/contact">Contact Us</a></li> <hr>  <li><a${add_attribute("href", calendlyLink, 0)} target="_blank" class="text-primary">FREE Consultation</a></li></ul></div> <div class="hidden lg:flex"> <a${add_attribute("href", calendlyLink, 0)} target="_blank" class="btn btn-primary text-base-100 mr-4">Book a FREE Consultation</a></div></div></div>`;
});
const css = {
  code: "#icons.svelte-1siraj8 img.svelte-1siraj8{filter:invert(1) brightness(2);margin-right:8px;width:20px}#icons.svelte-1siraj8.svelte-1siraj8{display:flex}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer class=\\"footer p-10 bg-neutral text-base-100\\">\\r\\n   <aside>\\r\\n      <img src=\\"/logos/avio-light.png\\" width=\\"128px\\" alt=\\"avio-tutor-logo\\" />\\r\\n   </aside>\\r\\n   <nav>\\r\\n      <h6 class=\\"footer-title\\">About Us</h6>\\r\\n      <a href=\\"/legal/terms-of-service\\" class=\\"link link-hover\\">Terms of Service</a>\\r\\n      <a href=\\"/legal/privacy-policy\\" class=\\"link link-hover\\">Privacy Policy</a>\\r\\n      <a href=\\"/careers/become-a-tutor\\" class=\\"link link-hover\\">Become a Tutor</a>\\r\\n   </nav>\\r\\n   <nav>\\r\\n      <h6 class=\\"footer-title\\">Contact</h6>\\r\\n      <a\\r\\n         class=\\"link link-hover\\"\\r\\n         id=\\"icons\\"\\r\\n         data-auto-recognition=\\"true\\"\\r\\n         href=\\"mailto:aviotutor@gmail.com\\">\\r\\n         <img src=\\"/icons/mail.png\\" alt=\\"email-icon\\" />\\r\\n         aviotutor@gmail.com\\r\\n      </a>\\r\\n      <a class=\\"link link-hover\\" id=\\"icons\\" href=\\"tel:+17789890044\\">\\r\\n         <img src=\\"/icons/telephone.png\\" alt=\\"email-icon\\" />\\r\\n         +1 778 989 0044\\r\\n      </a>\\r\\n   </nav>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n   #icons img {\\r\\n      filter: invert(1) brightness(2);\\r\\n      margin-right: 8px;\\r\\n      width: 20px;\\r\\n   }\\r\\n\\r\\n   #icons {\\r\\n      display: flex;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BG,qBAAM,CAAC,kBAAI,CACR,MAAM,CAAE,OAAO,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAC/B,YAAY,CAAE,GAAG,CACjB,KAAK,CAAE,IACV,CAEA,oCAAO,CACJ,OAAO,CAAE,IACZ"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="footer p-10 bg-neutral text-base-100" data-svelte-h="svelte-11xae5c"><aside><img src="/logos/avio-light.png" width="128px" alt="avio-tutor-logo"></aside> <nav><h6 class="footer-title">About Us</h6> <a href="/legal/terms-of-service" class="link link-hover">Terms of Service</a> <a href="/legal/privacy-policy" class="link link-hover">Privacy Policy</a> <a href="/careers/become-a-tutor" class="link link-hover">Become a Tutor</a></nav> <nav><h6 class="footer-title">Contact</h6> <a class="link link-hover svelte-1siraj8" id="icons" data-auto-recognition="true" href="mailto:aviotutor@gmail.com"><img src="/icons/mail.png" alt="email-icon" class="svelte-1siraj8">
         aviotutor@gmail.com</a> <a class="link link-hover svelte-1siraj8" id="icons" href="tel:+17789890044"><img src="/icons/telephone.png" alt="email-icon" class="svelte-1siraj8">
         +1 778 989 0044</a></nav> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="pt-20 md:pt-0">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  `;
});
export {
  Layout as default
};
