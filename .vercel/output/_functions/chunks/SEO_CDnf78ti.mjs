import { e as createAstro, f as createComponent, r as renderTemplate, u as unescapeHTML, h as addAttribute } from './astro/server_CXTV551O.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro("https://www.holdenlaine.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    titleEt,
    description,
    descriptionEt,
    image = "/images/og-image.jpg",
    url = Astro2.url.href,
    type = "website",
    author = "Holden Laine",
    publishedDate,
    modifiedDate
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const siteTitle = "Holden Laine Photography - Portrait & Fashion";
  const siteTitleEt = "Holden Laine Fotograafia - Portree & Mood";
  const fullTitle = title === "Holden Laine" ? siteTitle : `${title} - ${siteTitle}`;
  const fullTitleEt = titleEt === "Holden Laine" ? siteTitleEt : `${titleEt} - ${siteTitleEt}`;
  const currentLang = Astro2.params.lang || "en";
  const isEstonian = currentLang === "et" || Astro2.url.pathname.includes("/et/");
  const displayTitle = isEstonian ? fullTitleEt : fullTitle;
  const displayDescription = isEstonian ? descriptionEt : description;
  const siteName = isEstonian ? "Holden Laine Fotograafia" : "Holden Laine Photography";
  const locale = isEstonian ? "et_EE" : "en_US";
  const baseUrl = Astro2.site?.href || "https://www.holdenlaine.com";
  const logoUrl = `${baseUrl}logo.svg`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Holden Laine Photography",
    "url": baseUrl,
    "description": displayDescription,
    "logo": logoUrl,
    "image": image,
    "telephone": "",
    "priceRange": "\u20AC\u20AC",
    "areaServed": ["EE", "EU"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.instagram.com/holdenlaine",
      "https://www.linkedin.com/in/holdenlaine"
    ]
  };
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : type === "article" ? "NewsArticle" : "Person",
    ...type === "website" && {
      name: displayTitle,
      description: displayDescription,
      url: baseUrl,
      image,
      inLanguage: isEstonian ? "et" : "en",
      creator: {
        "@type": "Person",
        name: "Holden Laine",
        url: baseUrl
      }
    },
    ...type === "article" && {
      headline: displayTitle,
      description: displayDescription,
      image,
      inLanguage: isEstonian ? "et" : "en",
      author: {
        "@type": "Person",
        name: author
      },
      datePublished: publishedDate,
      dateModified: modifiedDate || publishedDate
    },
    ...type === "profile" && {
      "@type": "Person",
      name: "Holden Laine",
      description: displayDescription,
      image,
      url: baseUrl,
      jobTitle: isEstonian ? "Fotograaf" : "Photographer",
      inLanguage: isEstonian ? "et" : "en",
      sameAs: [
        "https://www.instagram.com/holdenlaine",
        "https://www.linkedin.com/in/holdenlaine"
      ]
    }
  };
  const homeOrgSchema = type === "profile" ? organizationSchema : null;
  return renderTemplate(_c || (_c = __template(['<!-- Primary Meta Tags --><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="robots" content="index, follow"><meta name="language"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name"', '><meta property="og:locale"', '><!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Additional SEO Tags --><meta name="theme-color" content="#ffffff"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="white"><!-- Structured Data (JSON-LD) --><script type="application/ld+json">', "<\/script>", '<!-- Preconnect to CDNs --><link rel="preconnect" href="https://vjs.zencdn.net"><link rel="dns-prefetch" href="https://vjs.zencdn.net"><!-- Web App Manifest --><link rel="manifest" href="/manifest.json"><!-- hreflang for Multilingual SEO --><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="et"', '><link rel="alternate" hreflang="x-default"', '><!-- Additional Open Graph for Multilingual --><meta property="og:locale:alternate" content="et_EE"><meta property="og:locale:alternate" content="en_US"><!-- Additional SEO Enhancements --><meta name="revisit-after" content="14 days"><meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta property="og:url"', "><!-- Breadcrumb Schema -->", ""])), addAttribute(displayTitle, "content"), addAttribute(displayDescription, "content"), addAttribute(isEstonian ? "fotograafia, portree, mood, toimetuslik, video, sisutootmine" : "photography, portrait, fashion, editorial, video, content creation", "content"), addAttribute(author, "content"), addAttribute(isEstonian ? "Estonian" : "English", "content"), addAttribute(type === "article" ? "article" : "website", "content"), addAttribute(canonicalURL, "content"), addAttribute(displayTitle, "content"), addAttribute(displayDescription, "content"), addAttribute(image, "content"), addAttribute(siteName, "content"), addAttribute(locale, "content"), addAttribute(canonicalURL, "content"), addAttribute(displayTitle, "content"), addAttribute(displayDescription, "content"), addAttribute(image, "content"), addAttribute(canonicalURL, "href"), unescapeHTML(JSON.stringify(schemaData)), homeOrgSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(homeOrgSchema))), addAttribute(canonicalURL, "href"), addAttribute(new URL(Astro2.url.pathname.replace(/^\//, "/et/"), Astro2.site), "href"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), type === "website" && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": Astro2.site?.href || "https://www.holdenlaine.com"
      }
    ]
  }))));
}, "/Users/holdenlaine/holdenlaine-website/src/components/SEO.astro", void 0);

export { $$SEO as $ };
