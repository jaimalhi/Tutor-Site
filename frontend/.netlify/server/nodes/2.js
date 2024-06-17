

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.VQfhzQAs.js","_app/immutable/chunks/scheduler.C3YKdWzi.js","_app/immutable/chunks/index.COvcv-U1.js","_app/immutable/chunks/InfoCard._tIMufsv.js"];
export const stylesheets = ["_app/immutable/assets/2.CH-V4vFm.css","_app/immutable/assets/InfoCard.DpEy0kbP.css"];
export const fonts = [];
