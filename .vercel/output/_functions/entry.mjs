import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DThNkk5Q.mjs';
import { manifest } from './manifest_iGpmSUYx.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/redeem-gift-card.json.astro.mjs');
const _page2 = () => import('./pages/api/stripe-checkout.json.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/gift-card-success.astro.mjs');
const _page5 = () => import('./pages/gift-cards.astro.mjs');
const _page6 = () => import('./pages/photos/_category_.astro.mjs');
const _page7 = () => import('./pages/photos.astro.mjs');
const _page8 = () => import('./pages/portfolio/_slug_.astro.mjs');
const _page9 = () => import('./pages/prices.astro.mjs');
const _page10 = () => import('./pages/projects/_slug_.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/redeem-gift-card.astro.mjs');
const _page13 = () => import('./pages/shop.astro.mjs');
const _page14 = () => import('./pages/studio.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/redeem-gift-card.json.ts", _page1],
    ["src/pages/api/stripe-checkout.json.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/gift-card-success.astro", _page4],
    ["src/pages/gift-cards.astro", _page5],
    ["src/pages/photos/[category].astro", _page6],
    ["src/pages/photos.astro", _page7],
    ["src/pages/portfolio/[slug].astro", _page8],
    ["src/pages/prices.astro", _page9],
    ["src/pages/projects/[slug].astro", _page10],
    ["src/pages/projects.astro", _page11],
    ["src/pages/redeem-gift-card.astro", _page12],
    ["src/pages/shop.astro", _page13],
    ["src/pages/studio.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6d957eb8-317c-49b1-b505-6a75304ea928",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
