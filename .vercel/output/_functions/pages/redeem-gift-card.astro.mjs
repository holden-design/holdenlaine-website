import { f as createComponent, r as renderTemplate, k as defineScriptVars, l as renderComponent, n as renderHead } from '../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$SEO } from '../chunks/SEO_CDnf78ti.mjs';
import { $ as $$HamburgerMenu, a as $$Cursor } from '../chunks/HamburgerMenu_ycGF1s4J.mjs';
import { $ as $$Logo } from '../chunks/Logo_DiKPKTim.mjs';
import { t as translations } from '../chunks/translations_BrmIb2Kj.mjs';
/* empty css                                            */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RedeemGiftCard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-cpw3mg4t> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", "</head> <body data-astro-cid-cpw3mg4t> ", " ", " ", ' <div class="container" data-astro-cid-cpw3mg4t> <a href="/" class="back-link" data-astro-cid-cpw3mg4t>\u2190 Back</a> <h1 data-astro-cid-cpw3mg4t>Redeem Gift Card</h1> <form id="redeemForm" data-astro-cid-cpw3mg4t> <div class="form-group" data-astro-cid-cpw3mg4t> <label for="giftcardCode" data-astro-cid-cpw3mg4t>Gift Card Code</label> <input type="text" id="giftcardCode" name="giftcardCode" placeholder="e.g., 01-1111" required data-astro-cid-cpw3mg4t> </div> <div class="form-group" data-astro-cid-cpw3mg4t> <label for="redeemEmail" data-astro-cid-cpw3mg4t>Email Address</label> <input type="email" id="redeemEmail" name="redeemEmail" placeholder="your@email.com" required data-astro-cid-cpw3mg4t> </div> <button type="submit" class="redeem-btn" data-astro-cid-cpw3mg4t>Redeem Gift Card</button> </form> <div id="redeemMessage" class="message" data-astro-cid-cpw3mg4t></div> </div> <script>(function(){', "\n      const form = document.getElementById('redeemForm');\n      const messageEl = document.getElementById('redeemMessage');\n      const codeInput = document.getElementById('giftcardCode');\n      const emailInput = document.getElementById('redeemEmail');\n\n      form.addEventListener('submit', async (e) => {\n        e.preventDefault();\n        \n        const code = codeInput.value.trim();\n        const email = emailInput.value.trim();\n\n        messageEl.className = 'message';\n        messageEl.textContent = 'Processing...';\n\n        try {\n          const response = await fetch('/api/redeem-gift-card.json', {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ code, email })\n          });\n\n          const data = await response.json();\n\n          if (response.ok) {\n            messageEl.className = 'message success';\n            messageEl.textContent = data.message;\n            form.reset();\n          } else {\n            messageEl.className = 'message error';\n            messageEl.textContent = data.error || 'Something went wrong. Please try again.';\n          }\n        } catch (error) {\n          console.error('Error:', error);\n          messageEl.className = 'message error';\n          messageEl.textContent = 'An error occurred. Please try again.';\n        }\n      });\n    })();<\/script> </body> </html>"])), renderComponent($$result, "SEO", $$SEO, { "title": "Redeem Gift Card", "titleEt": "Kasuta kinkekaart", "description": "Redeem your Holden Laine Photography gift card here.", "descriptionEt": "Kasuta siin oma Holden Laine fotograafia kinkekaardi.", "type": "website", "data-astro-cid-cpw3mg4t": true }), renderHead(), renderComponent($$result, "Cursor", $$Cursor, { "data-astro-cid-cpw3mg4t": true }), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, { "data-astro-cid-cpw3mg4t": true }), renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-cpw3mg4t": true }), defineScriptVars({ translations }));
}, "/Users/holdenlaine/holdenlaine-website/src/pages/redeem-gift-card.astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/redeem-gift-card.astro";
const $$url = "/redeem-gift-card";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RedeemGiftCard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
