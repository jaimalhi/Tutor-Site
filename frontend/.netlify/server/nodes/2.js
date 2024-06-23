

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.-hsZGEDM.js","_app/immutable/chunks/scheduler.gsXtY9CJ.js","_app/immutable/chunks/index.Cje8EYMh.js","_app/immutable/chunks/InfoCard.CAxtiWjG.js"];
export const stylesheets = ["_app/immutable/assets/2.CH-V4vFm.css","_app/immutable/assets/InfoCard.DpEy0kbP.css"];
export const fonts = [];
