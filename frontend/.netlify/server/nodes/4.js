import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DyvldsJC.js","_app/immutable/chunks/scheduler.gsXtY9CJ.js","_app/immutable/chunks/index.Cje8EYMh.js","_app/immutable/chunks/Toast.FKmA3FAS.js","_app/immutable/chunks/entry.ByF6esZq.js","_app/immutable/chunks/stores.CYw3BvId.js"];
export const stylesheets = ["_app/immutable/assets/3.B2bQelXW.css","_app/immutable/assets/Toast.7Y-zU0SA.css"];
export const fonts = [];
