

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Bqbi3IH6.js","_app/immutable/chunks/scheduler.C3YKdWzi.js","_app/immutable/chunks/index.COvcv-U1.js","_app/immutable/chunks/entry.BgPcjMQe.js"];
export const stylesheets = [];
export const fonts = [];
