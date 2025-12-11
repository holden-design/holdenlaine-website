import { f as createComponent, r as renderTemplate, m as maybeRenderHead, o as renderScript } from './astro/server_CXTV551O.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Cursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="custom-cursor"></div> <script>
  // Custom cursor movement
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseover', (e) => {
      if (e.target instanceof Element && (e.target.tagName === 'A' || e.target.closest('a') || e.target.closest('button'))) {
        cursor.classList.add('hover');
      }
    });
    
    document.addEventListener('mouseout', (e) => {
      if (e.target instanceof Element && (e.target.tagName === 'A' || e.target.closest('a') || e.target.closest('button'))) {
        cursor.classList.remove('hover');
      }
    });
  }
<\/script>`])), maybeRenderHead());
}, "/Users/holdenlaine/holdenlaine-website/src/components/Cursor.astro", void 0);

const $$HamburgerMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mobile-header"> <div class="header-content"> <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle navigation menu"> <span></span> <span></span> <span></span> </button> <a href="/" class="header-logo" title="Go to home"> <img src="/logo.svg" alt="Holden Laine Logo" class="logo-image"> </a> <div class="header-lang-toggle"> <button class="lang-btn active" data-lang="en">ENG</button> <button class="lang-btn" data-lang="et">EST</button> </div> </div> </header> <nav class="mobile-menu" id="mobile-menu"> <a href="/">HOME</a> <a href="/studio">STUDIO</a> <a href="/photos">PHOTOS</a> <a href="/projects">PROJECTS</a> <a href="/prices">PRICES</a> <a href="/shop">SHOP</a> <a href="/gift-cards">GIFT CARDS</a> <a href="/contact">CONTACT</a> </nav>  ${renderScript($$result, "/Users/holdenlaine/holdenlaine-website/src/components/HamburgerMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/holdenlaine/holdenlaine-website/src/components/HamburgerMenu.astro", void 0);

export { $$HamburgerMenu as $, $$Cursor as a };
