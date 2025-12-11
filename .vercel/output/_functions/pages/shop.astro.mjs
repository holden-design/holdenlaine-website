import { f as createComponent, r as renderTemplate, k as defineScriptVars, l as renderComponent, n as renderHead } from '../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$SEO } from '../chunks/SEO_CDnf78ti.mjs';
import { $ as $$HamburgerMenu, a as $$Cursor } from '../chunks/HamburgerMenu_ycGF1s4J.mjs';
import { $ as $$Logo } from '../chunks/Logo_DiKPKTim.mjs';
import { t as translations } from '../chunks/translations_BrmIb2Kj.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Shop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", '</head> <body> <canvas id="letterfall-canvas"></canvas> ', " ", " ", ' <div class="container"> <div class="sidebar"> <nav> <a href="/" data-i18n="nav.home">HOME</a> <a href="/studio" data-i18n="nav.studio">STUDIO</a> <a href="/photos" data-i18n="nav.portraits">PHOTOS</a> <a href="/projects" data-i18n="nav.projects">PROJECTS</a> <a href="/prices" data-i18n="nav.prices">PRICES</a> <a href="/shop" data-i18n="nav.tshirts">SHOP</a> <a href="/gift-cards">GIFT CARDS</a> <a href="/contact" data-i18n="nav.contact">CONTACT</a> </nav> </div> <div class="main-content"> <h1 data-i18n="tshirts.heading">T-Shirts</h1> <div class="tshirt-grid"> <a href="https://raemstudio.com/products/creative-series-s01e01-1" target="_blank" rel="noopener noreferrer" class="tshirt-item"> <div class="tshirt-image"><img src="/1568999197096245512_2048.webp" alt="Creative Series S01E01"></div> <div class="tshirt-info"> <div class="tshirt-name">Creative Series S01E01</div> </div> </a> <a href="https://raemstudio.com/products/creative-series-s01e02" target="_blank" rel="noopener noreferrer" class="tshirt-item"> <div class="tshirt-image"><img src="/creative series S01E02.webp" alt="Creative Series S01E02"></div> <div class="tshirt-info"> <div class="tshirt-name">Creative Series S01E02</div> </div> </a> <a href="https://raemstudio.com/products/leaders-of-the-new-society-graphic-t-shirt" target="_blank" rel="noopener noreferrer" class="tshirt-item"> <div class="tshirt-image"><img src="/leadersofthenewsociety.webp" alt="Leaders of the New Society"></div> <div class="tshirt-info"> <div class="tshirt-name">Leaders of the New Society</div> </div> </a> </div> <h2 style="margin-top: 3rem; margin-bottom: 1rem; font-size: 1.5rem; display: none;" data-i18n="tshirts.postersHeading">Posters</h2> <div class="tshirt-grid" style="display: none;"> <div class="tshirt-item"> <div class="tshirt-image">\u{1F5BC}\uFE0F</div> <div class="tshirt-info"> <div class="tshirt-name" data-i18n="tshirts.poster1Name">Muhu Landscape</div> <div class="tshirt-description" data-i18n="tshirts.poster1Desc">A3 print, premium paper</div> <div class="tshirt-price" data-i18n="tshirts.poster1Price">\u20AC35</div> </div> </div> <div class="tshirt-item"> <div class="tshirt-image">\u{1F5BC}\uFE0F</div> <div class="tshirt-info"> <div class="tshirt-name" data-i18n="tshirts.poster2Name">Portrait Series</div> <div class="tshirt-description" data-i18n="tshirts.poster2Desc">A3 print, premium paper</div> <div class="tshirt-price" data-i18n="tshirts.poster2Price">\u20AC35</div> </div> </div> <div class="tshirt-item"> <div class="tshirt-image">\u{1F5BC}\uFE0F</div> <div class="tshirt-info"> <div class="tshirt-name" data-i18n="tshirts.poster3Name">Light Study</div> <div class="tshirt-description" data-i18n="tshirts.poster3Desc">A3 print, premium paper</div> <div class="tshirt-price" data-i18n="tshirts.poster3Price">\u20AC35</div> </div> </div> </div> </div> </div> <script>(function(){', `
      // Disable right-click context menu on images
      document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });
      
      // Disable drag and drop on images
      document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });
      
      // Prevent save shortcuts (Cmd+S, Ctrl+S)
      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 's') {
          e.preventDefault();
          return false;
        }
      });
      
      // Prevent copy of images
      document.addEventListener('copy', (e) => {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      });
      
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
    })();<\/script> <script src="/scripts/letterfall.js"><\/script> </body> </html>`])), renderComponent($$result, "SEO", $$SEO, { "title": "Shop", "titleEt": "E-pood", "description": "Browse and purchase merchandise, prints, and products from Holden Laine Photography.", "descriptionEt": "Vaadake ja ostke kaup, prindid ja tooted Holden Laine fotograafiast.", "type": "website" }), renderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Cursor", $$Cursor, {}), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, {}), defineScriptVars({ translations }));
}, "/Users/holdenlaine/holdenlaine-website/src/pages/shop.astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Shop,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
