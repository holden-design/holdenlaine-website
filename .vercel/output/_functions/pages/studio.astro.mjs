import { f as createComponent, r as renderTemplate, k as defineScriptVars, l as renderComponent, n as renderHead } from '../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$SEO } from '../chunks/SEO_CDnf78ti.mjs';
import { $ as $$HamburgerMenu, a as $$Cursor } from '../chunks/HamburgerMenu_ycGF1s4J.mjs';
import { $ as $$Logo } from '../chunks/Logo_DiKPKTim.mjs';
import { t as translations } from '../chunks/translations_BrmIb2Kj.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Studio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", '</head> <body> <canvas id="letterfall-canvas"></canvas> ', " ", " ", ` <div class="container"> <div class="sidebar"> <nav> <a href="/" data-i18n="nav.home">HOME</a> <a href="/studio" data-i18n="nav.studio">STUDIO</a> <a href="/photos" data-i18n="nav.portraits">PHOTOS</a> <a href="/projects" data-i18n="nav.projects">PROJECTS</a> <a href="/prices" data-i18n="nav.prices">PRICES</a> <a href="/shop" data-i18n="nav.tshirts">SHOP</a> <a href="/gift-cards">GIFT CARDS</a> <a href="/contact" data-i18n="nav.contact">CONTACT</a> </nav> </div> <div class="main-content"> <div class="studio-header"> <h1 data-i18n="studio.heading">Studio</h1> <p data-i18n="studio.subtitle">Professional Photography Space</p> </div> <div class="studio-content"> <div class="studio-section"> <h2 data-i18n="studio.about">About the Studio</h2> <p data-i18n="studio.aboutText">Welcome to my professional photography studio, a creative space designed for portrait sessions, product photography, and collaborative creative projects. The studio features professional lighting equipment, diverse backdrops, and a comfortable environment for all types of photography.</p> </div> <div class="studio-section"> <h2 data-i18n="studio.amenities">Studio Amenities</h2> <ul> <li data-i18n="studio.amenity1">Professional lighting setup with adjustable intensity</li> <li data-i18n="studio.amenity2">Variety of backdrops and set pieces</li> <li data-i18n="studio.amenity3">Climate-controlled comfortable space</li> <li data-i18n="studio.amenity4">Hair and makeup preparation area</li> <li data-i18n="studio.amenity5">Digital and instant photo delivery</li> </ul> </div> <div class="studio-section"> <h2 data-i18n="studio.sessions">Studio Sessions</h2> <p data-i18n="studio.sessionsText">Whether you're looking for a professional headshot, family portrait, or creative fashion shoot, the studio is fully equipped to bring your vision to life. All sessions include professional editing and high-resolution digital files.</p> </div> <div class="studio-section"> <h2 data-i18n="studio.booking">Booking a Session</h2> <p data-i18n="studio.bookingText">To book a studio session or inquire about availability, please visit the <a href="/contact" style="text-decoration: underline; color: #222;">contact page</a> or reach out directly via email or phone.</p> </div> </div> </div> </div> <script src="/scripts/letterfall.js"><\/script> <script>(function(){`, "\n      const currentLang = localStorage.getItem('language') || 'en';\n      \n      function applyTranslations(lang) {\n        document.querySelectorAll('[data-i18n]').forEach(element => {\n          const key = element.getAttribute('data-i18n');\n          const keys = key.split('.');\n          let value = translations[lang];\n          \n          for (const k of keys) {\n            value = value?.[k];\n          }\n          \n          if (value) {\n            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {\n              element.placeholder = value;\n            } else if (element.tagName === 'OPTION') {\n              element.textContent = value;\n            } else if (element.tagName === 'TITLE') {\n              document.title = value;\n            } else {\n              element.textContent = value;\n            }\n          }\n        });\n        \n        document.documentElement.lang = lang;\n      }\n      \n      applyTranslations(currentLang);\n      \n      // Listen for language change events from header\n      window.addEventListener('languageChange', (e) => {\n        applyTranslations(e.detail.language);\n      });\n    })();<\/script> </body> </html>"])), renderComponent($$result, "SEO", $$SEO, { "title": "Studio", "titleEt": "Stuudio", "description": "Welcome to Holden Laine's photography studio. Experience professional photography services in a creative space.", "descriptionEt": "Tere tulemast Holden Laine'i fotograafiastuudiosse. Koges professionaalset fotograafiateeninust loomingulises keskkonnas.", "type": "website" }), renderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Cursor", $$Cursor, {}), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, {}), defineScriptVars({ translations }));
}, "/Users/holdenlaine/holdenlaine-website/src/pages/studio.astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/studio.astro";
const $$url = "/studio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Studio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
