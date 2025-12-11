import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, l as renderComponent, n as renderHead } from '../../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$HamburgerMenu, a as $$SEO } from '../../chunks/HamburgerMenu_C-VQX03Z.mjs';
import { $ as $$Cursor } from '../../chunks/Cursor_Ccdw4jWW.mjs';
import { $ as $$Logo } from '../../chunks/Logo_DiKPKTim.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.holdenlaine.com");
function getStaticPaths() {
  return [
    { params: { category: "fashion" } },
    { params: { category: "portrait" } },
    { params: { category: "editorial" } },
    { params: { category: "street" } }
  ];
}
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const PHOTO_CATEGORIES = {
    "fashion": {
      title: "Fashion",
      description: "Fashion photography and styled shoots",
      images: [
        "portraits/sonya15.jpg",
        "portraits/sonya16.jpg",
        "portraits/sonya17.jpg",
        "portraits/sonya18.jpg",
        "portraits/sonyaa.jpg",
        "portraits/sonyaa1.jpg"
      ]
    },
    "portrait": {
      title: "Portrait Series",
      description: "A series of portraits exploring light and emotion",
      images: ["portraits/_F5A0743.jpg", "portraits/_F5A0975.jpg", "portraits/_F5A3447.jpg", "portraits/_F5A3477-2.jpg", "portraits/_F5A3510.jpg", "portraits/_F5A3518.jpg", "portraits/_F5A9374.jpg", "portraits/_F5A9493.jpg", "portraits/1x1spotify.jpg", "portraits/1X1X2 copy.jpg", "portraits/adventure.jpg", "portraits/adventure1.jpg", "portraits/col1.jpg", "portraits/damn.jpg", "portraits/DSC00681.jpg", "portraits/edit-1.jpg", "portraits/edit-10.jpg", "portraits/edit-11.jpg", "portraits/edit-2.jpg", "portraits/edit-3.jpg", "portraits/edit-4.jpg", "portraits/edit-5.jpg", "portraits/edit-6.jpg", "portraits/edit-7.jpg", "portraits/edit-8.jpg", "portraits/edit-9.jpg", "portraits/edit.jpg", "portraits/eve1.jpg", "portraits/fucku.jpg", "portraits/fucku2.jpg", "portraits/himatcha.jpg", "portraits/holden2.jpg", "portraits/holden3.jpg", "portraits/images:background.jpg", "portraits/july1.jpg", "portraits/july2.jpg", "portraits/karin1.jpg", "portraits/klara1.jpg", "portraits/klara3.jpg", "portraits/klara4.jpg", "portraits/klara5.jpg", "portraits/klara6.jpg", "portraits/mad1.jpg", "portraits/mad2.jpg", "portraits/marielle1.jpg", "portraits/matcha1.jpg", "portraits/matcha2.jpg", "portraits/matcha3.jpg", "portraits/matcha4.jpg", "portraits/matcha5.jpg", "portraits/more1.jpg", "portraits/more2.jpg", "portraits/P1100300.jpg", "portraits/P1100345.jpg", "portraits/P1100418.jpg", "portraits/P1100561.jpg", "portraits/P1100570.jpg", "portraits/P1100594.jpg", "portraits/P1100864.jpg", "portraits/sonya1.jpg", "portraits/sonya10.jpg", "portraits/sonya11.jpg", "portraits/sonya12.jpg", "portraits/sonya13.jpg", "portraits/sonya14.jpg", "portraits/sonya2.jpg", "portraits/sonya3.jpg", "portraits/sonya5.jpg", "portraits/sonya6.jpg", "portraits/sonya7.jpg", "portraits/sonya8.jpg", "portraits/sonya9.jpg"]
    },
    "editorial": {
      title: "Editorial",
      description: "Editorial photography and styled shoots",
      images: ["portraits/Screenshot 2025-11-25 at 21.20.01.png", "portraits/Screenshot 2025-11-25 at 21.20.15.png", "portraits/Screenshot 2025-11-25 at 21.20.22.png"]
    },
    "street": {
      title: "Street Photography",
      description: "Capturing candid moments from everyday life",
      images: ["portraits/_F5A9263.jpg", "portraits/_F5A9268.jpg", "portraits/_F5A9274.jpg", "portraits/_F5A9279.jpg", "portraits/_F5A9283-2.jpg", "portraits/_F5A9285.jpg", "portraits/_F5A9298.jpg", "portraits/_F5A9310.jpg", "portraits/_F5A9486.jpg", "portraits/_F5A9492.jpg", "portraits/_F5A9496-2.jpg", "portraits/_F5A9497.jpg", "portraits/_F5A9500.jpg", "portraits/_F5A9503.jpg"]
    }
  };
  const { category } = Astro2.params;
  const categoryData = PHOTO_CATEGORIES[category];
  const categoryTitle = categoryData?.title || "Photos";
  const categoryDescription = categoryData?.description || "Photography gallery";
  const images = categoryData?.images || [];
  const ogImage = images[0] ? `/images/${images[0]}` : "/images/og-image.jpg";
  const categoryTranslations = {
    "fashion": {
      titleEt: "Mood",
      descriptionEt: "Moofotograafia ja stiliseeritud fotosessioond"
    },
    "portrait": {
      titleEt: "Portreede Seeria",
      descriptionEt: "Portreede seeria, mis uurib valgust ja emotsioone"
    },
    "editorial": {
      titleEt: "Toimetuslik",
      descriptionEt: "Toimetuslik fotograafia ja stiliseeritud pildistamised"
    },
    "street": {
      titleEt: "T\xE4navafotograafia",
      descriptionEt: "Spontaansed hetked igap\xE4evaelust"
    }
  };
  const translations = categoryTranslations[category] || { titleEt: categoryTitle, descriptionEt: categoryDescription };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", '</head> <body> <canvas id="letterfall-canvas"></canvas> ', " ", " ", ' <div class="container"> <div class="sidebar"> <nav> <a href="/" data-i18n="nav.home">AVALEHT</a> <a href="/studio" data-i18n="nav.studio">STUUDIO</a> <a href="/photos" data-i18n="nav.portraits">FOTOD</a> <a href="/projects" data-i18n="nav.projects">PROJEKTID</a> <a href="/prices" data-i18n="nav.prices">HINNAKIRI</a> <a href="/shop" data-i18n="nav.tshirts">E-POOD</a> <a href="/gift-cards">GIFT CARDS</a> <a href="/contact" data-i18n="nav.contact">KONTAKT</a> </nav> </div> <main class="main-content"> <div class="page-header"> <h1>', "</h1> </div> ", ` </main> </div> <script src="/scripts/letterfall.js"><\/script> <script>
      // Translation object for navigation
      const translations = {
        'en': {
          'nav.home': 'HOME',
          'nav.portraits': 'PHOTOS',
          'nav.studio': 'STUDIO',
          'nav.projects': 'PROJECTS',
          'nav.prices': 'PRICES',
          'nav.tshirts': 'SHOP',
          'nav.contact': 'CONTACT'
        },
        'et': {
          'nav.home': 'AVALEHT',
          'nav.portraits': 'FOTOD',
          'nav.studio': 'STUUDIO',
          'nav.projects': 'PROJEKTID',
          'nav.prices': 'HINNAKIRI',
          'nav.tshirts': 'E-POOD',
          'nav.contact': 'KONTAKT'
        }
      };

      function updateTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
          }
        });
      }

      // Restore language preference on page load
      const savedLang = localStorage.getItem('language') || 'en';
      document.documentElement.lang = savedLang;
      updateTranslations(savedLang);
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === savedLang);
      });

      // Language toggle functionality
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.getAttribute('data-lang');
          if (lang) {
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            updateTranslations(lang);
            document.querySelectorAll('.lang-btn').forEach(b => {
              b.classList.toggle('active', b.getAttribute('data-lang') === lang);
            });
          }
        });
      });
    <\/script> </body> </html>`])), renderComponent($$result, "SEO", $$SEO, { "title": categoryTitle, "titleEt": translations.titleEt, "description": categoryDescription, "descriptionEt": translations.descriptionEt, "image": ogImage, "type": "website" }), renderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Cursor", $$Cursor, {}), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, {}), categoryTitle, images.length > 0 && renderTemplate`<div class="image-grid"> ${images.map((img) => renderTemplate`<img${addAttribute(`/images/${img}`, "src")}${addAttribute(categoryTitle, "alt")} loading="lazy">`)} </div>`);
}, "/Users/holdenlaine/holdenlaine-website/src/pages/photos/[category].astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/photos/[category].astro";
const $$url = "/photos/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
