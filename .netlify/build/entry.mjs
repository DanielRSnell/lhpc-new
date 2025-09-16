import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_ATgUMfNr.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/changelog.astro.mjs');
const _page4 = () => import('./pages/demo.astro.mjs');
const _page5 = () => import('./pages/forgot-password.astro.mjs');
const _page6 = () => import('./pages/industry/neocloud.astro.mjs');
const _page7 = () => import('./pages/landing.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/otp.astro.mjs');
const _page10 = () => import('./pages/pricing.astro.mjs');
const _page11 = () => import('./pages/product.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/signin.astro.mjs');
const _page14 = () => import('./pages/signup.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const _page16 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/changelog.astro", _page3],
    ["src/pages/demo.astro", _page4],
    ["src/pages/forgot-password.astro", _page5],
    ["src/pages/industry/neocloud.astro", _page6],
    ["src/pages/landing.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/otp.astro", _page9],
    ["src/pages/pricing.astro", _page10],
    ["src/pages/product.astro", _page11],
    ["src/pages/rss.xml.js", _page12],
    ["src/pages/signin.astro", _page13],
    ["src/pages/signup.astro", _page14],
    ["src/pages/index.astro", _page15],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b510a40e-4788-4209-85b7-95fec8eb4510"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
