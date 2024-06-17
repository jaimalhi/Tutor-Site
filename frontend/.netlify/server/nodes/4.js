

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BXkXz-86.js","_app/immutable/chunks/scheduler.C3YKdWzi.js","_app/immutable/chunks/index.Wv9rFvm6.js"];
export const stylesheets = [];
export const fonts = [];
