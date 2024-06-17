import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["aviotutor-favicon.ico","general/classroom.jpg","general/grad-cap.jpg","general/laptop.jpg","general/social.jpg","general/studying.jpg","hero-image.png","icons/attributions.txt","icons/biology.png","icons/chem.png","icons/coding.png","icons/earth-sci.png","icons/english.png","icons/history.png","icons/mail.png","icons/math.png","icons/physics.png","icons/telephone.png","logos/avio-dark.png","logos/avio-light.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.C04pbIGJ.js","app":"_app/immutable/entry/app.5jxNXXoF.js","imports":["_app/immutable/entry/start.C04pbIGJ.js","_app/immutable/chunks/entry.CndSCyZ2.js","_app/immutable/chunks/scheduler.C3YKdWzi.js","_app/immutable/entry/app.5jxNXXoF.js","_app/immutable/chunks/scheduler.C3YKdWzi.js","_app/immutable/chunks/index.COvcv-U1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/careers/become-a-tutor",
				pattern: /^\/careers\/become-a-tutor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/how-it-works",
				pattern: /^\/how-it-works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/legal/privacy-policy",
				pattern: /^\/legal\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/legal/terms-of-service",
				pattern: /^\/legal\/terms-of-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
