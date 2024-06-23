import * as server from '../entries/pages/careers/become-a-tutor/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/careers/become-a-tutor/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/careers/become-a-tutor/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DnUJ6A6L.js","_app/immutable/chunks/scheduler.gsXtY9CJ.js","_app/immutable/chunks/index.Cje8EYMh.js","_app/immutable/chunks/Toast.B0qtbhwH.js","_app/immutable/chunks/entry.9kZDOX55.js","_app/immutable/chunks/stores.A0lBMAIE.js"];
export const stylesheets = ["_app/immutable/assets/3.B2bQelXW.css","_app/immutable/assets/Toast.7Y-zU0SA.css"];
export const fonts = [];
