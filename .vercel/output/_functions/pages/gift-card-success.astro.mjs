import { f as createComponent, r as renderTemplate, l as renderComponent, n as renderHead } from '../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$SEO } from '../chunks/SEO_CDnf78ti.mjs';
import { $ as $$HamburgerMenu, a as $$Cursor } from '../chunks/HamburgerMenu_ycGF1s4J.mjs';
import { $ as $$Logo } from '../chunks/Logo_DiKPKTim.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$GiftCardSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", '</head> <body> <canvas id="letterfall-canvas"></canvas> ', " ", " ", ` <div class="container"> <div class="sidebar"> <nav> <a href="/">HOME</a> <a href="/studio">STUDIO</a> <a href="/photos">PHOTOS</a> <a href="/projects">PROJECTS</a> <a href="/prices">PRICES</a> <a href="/shop">SHOP</a> <a href="/contact">CONTACT</a> </nav> </div> <div class="main-content"> <div class="success-icon">\u2713</div> <div class="success-message">Gift Card Purchase Successful!</div> <div class="success-description">
Thank you for your purchase! Your gift card has been purchased successfully. 
          You will receive a confirmation email shortly with your gift card details.
</div> <a href="/contact" class="back-link">Back to Contact</a> </div> </div> <script src="/scripts/letterfall.js"><\/script> <script>
      // Language functionality
      const translations = {
        en: {
          successMessage: "Gift Card Purchase Successful!",
          successDescription: "Thank you for your purchase! Your gift card has been purchased successfully. You will receive a confirmation email shortly with your gift card details.",
          backLink: "Back to Contact"
        },
        et: {
          successMessage: "Kinkekaardi ost edukas!",
          successDescription: "T\xE4name teie ostu eest! Teie kinkekaart on edukalt ostetud. Varsti saate e-postile kinnituse koos kinkekaardi \xFCksikasjade ja andmetega.",
          backLink: "Tagasi kontakti juurde"
        }
      };

      let currentLang = localStorage.getItem('language') || 'en';

      function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update content
        document.querySelector('.success-message').textContent = translations[lang].successMessage;
        document.querySelector('.success-description').textContent = translations[lang].successDescription;
        document.querySelector('.back-link').textContent = translations[lang].backLink;

        document.documentElement.lang = lang;
      }

      // Language toggle
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang) updateLanguage(lang);
        });
      });

      // Initialize
      updateLanguage(currentLang);
    <\/script> </body> </html>`])), renderComponent($$result, "SEO", $$SEO, { "title": "Gift Card Purchase Successful", "titleEt": "Kinkekaardi ost edukas", "description": "Your gift card has been purchased successfully.", "descriptionEt": "Teie kinkekaart on edukalt ostetud.", "type": "website" }), renderHead(), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Cursor", $$Cursor, {}), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, {}));
}, "/Users/holdenlaine/holdenlaine-website/src/pages/gift-card-success.astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/gift-card-success.astro";
const $$url = "/gift-card-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GiftCardSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
