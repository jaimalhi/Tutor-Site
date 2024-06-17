

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.VthXT8F-.js","_app/immutable/chunks/scheduler.C3YKdWzi.js","_app/immutable/chunks/index.Wv9rFvm6.js","_app/immutable/chunks/InfoCard.5Hstl2B-.js"];
export const stylesheets = ["_app/immutable/assets/2.ELldh0zK.css","_app/immutable/assets/InfoCard.DpEy0kbP.css"];
export const fonts = [];
