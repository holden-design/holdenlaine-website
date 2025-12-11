import { f as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_CXTV551O.mjs';
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

export { $$Cursor as $ };
