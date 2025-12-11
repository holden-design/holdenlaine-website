import { f as createComponent, r as renderTemplate, k as defineScriptVars, l as renderComponent, n as renderHead } from '../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$HamburgerMenu, a as $$SEO } from '../chunks/HamburgerMenu_C-VQX03Z.mjs';
import { $ as $$Cursor } from '../chunks/Cursor_Ccdw4jWW.mjs';
import { $ as $$Logo } from '../chunks/Logo_DiKPKTim.mjs';
import { t as translations } from '../chunks/translations_BrmIb2Kj.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Prices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="keywords" content="Holden Laine pricing, photography rates, fotograafia hinnad, content creation pricing, social media content rates, UGC rates, photo session prices">', "", '</head> <body> <canvas id="letterfall-canvas"></canvas> ', " ", " ", ' <div class="container"> <div class="sidebar"> <nav> <a href="/" data-i18n="nav.home">HOME</a> <a href="/studio" data-i18n="nav.studio">STUDIO</a> <a href="/photos" data-i18n="nav.portraits">PHOTOS</a> <a href="/projects" data-i18n="nav.projects">PROJECTS</a> <a href="/prices" data-i18n="nav.prices">PRICES</a> <a href="/shop" data-i18n="nav.tshirts">SHOP</a> <a href="/gift-cards">GIFT CARDS</a> <a href="/contact" data-i18n="nav.contact">CONTACT</a> </nav> </div> <div class="main-content"> <h1 data-i18n="prices.heading">Prices</h1> <div class="price-section"> <h2 data-i18n="prices.portraitSessions">Portrait Sessions</h2> <div class="price-item"> <div> <div class="price-name" data-i18n="prices.individualPortrait">Individual Portrait</div> <div class="price-description" data-i18n="prices.individualPortraitDesc">1 hour session, 10+ edited photos</div> </div> <div class="price-amount" data-i18n="prices.individualPortraitPrice">\u20AC150</div> </div> <div class="price-item"> <div> <div class="price-name" data-i18n="prices.couplePortrait">Couple Portrait</div> <div class="price-description" data-i18n="prices.couplePortraitDesc">1.5 hour session, 15+ edited photos</div> </div> <div class="price-amount" data-i18n="prices.couplePortraitPrice">\u20AC200</div> </div> <div class="price-item"> <div> <div class="price-name" data-i18n="prices.familyPortrait">Family Portrait</div> <div class="price-description" data-i18n="prices.familyPortraitDesc">2 hour session, 20+ edited photos</div> </div> <div class="price-amount" data-i18n="prices.familyPortraitPrice">\u20AC250</div> </div> </div> <div class="price-section"> <h2 data-i18n="prices.eventPhotography">Event Photography</h2> <div class="price-item"> <div> <div class="price-name" data-i18n="prices.halfDay">Half Day</div> <div class="price-description" data-i18n="prices.halfDayDesc">Up to 4 hours coverage</div> </div> <div class="price-amount" data-i18n="prices.halfDayPrice">\u20AC400</div> </div> <div class="price-item"> <div> <div class="price-name" data-i18n="prices.fullDay">Full Day</div> <div class="price-description" data-i18n="prices.fullDayDesc">Up to 8 hours coverage</div> </div> <div class="price-amount" data-i18n="prices.fullDayPrice">\u20AC700</div> </div> </div> <div class="price-section"> <h2 data-i18n="prices.commercialProjects">Commercial Projects</h2> <div class="price-item"> <div> <div class="price-name" data-i18n="prices.commercial">Commercial Rate</div> <div class="price-description" data-i18n="prices.commercialDesc">Custom quote based on project scope</div> </div> <div class="price-amount" data-i18n="prices.commercialPrice">Contact for quote</div> </div> </div> <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #ddd;"> <h2 data-i18n="prices.giftCards">Gift Cards</h2> <p data-i18n="prices.giftCardDescription">Purchase a gift card for photography sessions and share the gift of professional photography with someone special.</p> <button class="giftcard-btn" id="buyGiftcardBtn" data-i18n="prices.buyGiftCard">Buy a Gift Card</button> </div> </div> </div> <script>(function(){', `
      const currentLang = localStorage.getItem('language') || 'en';
      
      function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          const keys = key.split('.');
          let value = translations[lang];
          
          for (const k of keys) {
            value = value?.[k];
          }
          
          if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
              element.placeholder = value;
            } else if (element.tagName === 'OPTION') {
              element.textContent = value;
            } else if (element.tagName === 'TITLE') {
              document.title = value;
            } else {
              element.textContent = value;
            }
          }
        });
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        document.documentElement.lang = lang;
      }
      
      applyTranslations(currentLang);
      
      // Language toggle buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang) {
            localStorage.setItem('language', lang);
            applyTranslations(lang);
          }
        });
      });
    })();<\/script> <script src="/scripts/letterfall.js"><\/script> </body> </html>`])), renderComponent($$result, "SEO", $$SEO, { "title": "Pricing - Holden Laine Photography Services", "titleEt": "Hinnakiri - Holden Laine Fotograafia Teenused", "description": "Photography services pricing by Holden Laine for portraits, fashion shoots, editorial projects, social media content creation, UGC, and commercial work.", "descriptionEt": "Holden Laine fotograafia teenuste hinnad portreede, moofotode, toimetuslike projektide, sotsiaalmeedia sisutootmise, UGC ja kommertsprojektide jaoks.", "type": "website" }), renderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Cursor", $$Cursor, {}), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, {}), defineScriptVars({ translations }));
}, "/Users/holdenlaine/holdenlaine-website/src/pages/prices.astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/prices.astro";
const $$url = "/prices";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prices,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
