import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const css = {
  code: ".custom-border.svelte-1t6chgo{border-width:3px;border-radius:8px}",
  map: '{"version":3,"file":"InfoCard.svelte","sources":["InfoCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let props;\\nlet offsetSettings = \\"\\";\\nlet rotationClass = \\"\\";\\nif (props.textOffset === \\"right\\") {\\n  offsetSettings = \\"lg:flex-row-reverse lg:-ml-36\\";\\n  rotationClass = \\"rotate-3 translate-x-3\\";\\n} else if (props.textOffset === \\"left\\") {\\n  offsetSettings = \\"\\";\\n  rotationClass = \\"-rotate-3 -translate-x-3\\";\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"flex justify-start items-center w-8/12 {offsetSettings}\\">\\r\\n   <aside class=\\"lg:w-5/12\\">\\r\\n      <h1 class=\\"text-4xl lg:5xl font-semibold text-primary mb-6\\">{props.heading}</h1>\\r\\n      <p class=\\"mb-6\\">{@html props.description}</p>\\r\\n      {#if props.linkText !== null}\\r\\n         <a\\r\\n            href={props.linkHref ? props.linkHref : \\"/\\"}\\r\\n            class=\\"w-11/12 text-2xl flex justify-between border-b-2 border-black hover:text-secondary hover:border-b-secondary\\">\\r\\n            <p>{props.linkText}</p>\\r\\n            <p>&#10142;</p>\\r\\n         </a>\\r\\n      {/if}\\r\\n   </aside>\\r\\n   <div class=\\"mx-auto {props.widthClass} hidden lg:flex\\">\\r\\n      <div class=\\"p-4 shadow-lg {props.borderColor} custom-border\\">\\r\\n         <img src={props.src} alt={props.alt} class=\\"w-full rounded-lg {rotationClass}\\" />\\r\\n      </div>\\r\\n   </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n   .custom-border {\\r\\n      border-width: 3px;\\r\\n      border-radius: 8px;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiCG,6BAAe,CACZ,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAClB"}'
};
const InfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  let offsetSettings = "";
  let rotationClass = "";
  if (props.textOffset === "right") {
    offsetSettings = "lg:flex-row-reverse lg:-ml-36";
    rotationClass = "rotate-3 translate-x-3";
  } else if (props.textOffset === "left") {
    offsetSettings = "";
    rotationClass = "-rotate-3 -translate-x-3";
  }
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  $$result.css.add(css);
  return `<div class="${"flex justify-start items-center w-8/12 " + escape(offsetSettings, true) + " svelte-1t6chgo"}"><aside class="lg:w-5/12"><h1 class="text-4xl lg:5xl font-semibold text-primary mb-6">${escape(props.heading)}</h1> <p class="mb-6"><!-- HTML_TAG_START -->${props.description}<!-- HTML_TAG_END --></p> ${props.linkText !== null ? `<a${add_attribute("href", props.linkHref ? props.linkHref : "/", 0)} class="w-11/12 text-2xl flex justify-between border-b-2 border-black hover:text-secondary hover:border-b-secondary"><p>${escape(props.linkText)}</p> <p data-svelte-h="svelte-6yf9gw">➞</p></a>` : ``}</aside> <div class="${"mx-auto " + escape(props.widthClass, true) + " hidden lg:flex svelte-1t6chgo"}"><div class="${"p-4 shadow-lg " + escape(props.borderColor, true) + " custom-border svelte-1t6chgo"}"><img${add_attribute("src", props.src, 0)}${add_attribute("alt", props.alt, 0)} class="${"w-full rounded-lg " + escape(rotationClass, true) + " svelte-1t6chgo"}"></div></div> </div>`;
});
export {
  InfoCard as I
};
