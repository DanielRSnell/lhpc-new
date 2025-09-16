import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { A as AIAutomation } from '../chunks/ai-automation_DqI4h14g.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from 'lucide-react';
import { B as Button, c as cn, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, c as CardDescription } from '../chunks/card_Dgj0kdKs.mjs';
import { C as Carousel, c as CarouselPrevious, d as CarouselNext, a as CarouselContent, b as CarouselItem } from '../chunks/carousel_Dp0h94_E.mjs';
export { renderers } from '../renderers.mjs';

const FEATURE_CARDS = [
  {
    title: "Security Event Monitoring",
    description: "Real-time detection and alerting for security events across classified workloads with full audit trails.",
    icon: Shield,
    cta: "View compliance docs",
    href: "/docs"
  },
  {
    title: "Multi-Level Access Control",
    description: "Granular permissions and clearance-based access controls for sensitive government operations.",
    icon: Lock,
    cta: "Learn more",
    href: "/docs"
  },
  {
    title: "Classified Infrastructure Feed",
    description: "Air-gapped monitoring of secure HPC clusters with SCIF-compatible visibility and control.",
    icon: Eye,
    cta: "Request briefing",
    href: "/demo"
  },
  {
    title: "Mission-Critical Alerts",
    description: "Priority alerting for mission-critical workloads with escalation protocols for national security operations.",
    icon: AlertTriangle,
    cta: "View capabilities",
    href: "/docs"
  }
];
function GovernmentDashboard() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding relative container !pt-0", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-3xl flex-col items-center text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl", children: "Secure, compliant monitoring for classified AI/HPC environments" }) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/dashboard.png",
        alt: "LaunchHPC Government Security Dashboard",
        width: 1440,
        height: 905,
        className: "mx-auto mt-10 mask-b-from-50% mask-b-to-95% invert md:mt-16 dark:invert-0"
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "text-muted-foreground mt-4 text-center uppercase", children: "FISMA COMPLIANT • IL-5 AUTHORIZED • FEDRAMP READY" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: FEATURE_CARDS.map((card, index) => {
      const IconComponent = card.icon;
      return /* @__PURE__ */ jsxs(
        Card,
        {
          className: "group bg-accent/80 gap-4 border-none shadow-none",
          children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "gap-2.5", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-card/50 flex size-10 items-center justify-center rounded-md border", children: /* @__PURE__ */ jsx(IconComponent, { className: "size-4.5 opacity-70" }) }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: card.title })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-1 flex-col", children: [
              /* @__PURE__ */ jsx(CardDescription, { className: "text-muted-foreground flex-1 text-sm", children: card.description }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  asChild: true,
                  className: "group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95",
                  children: /* @__PURE__ */ jsxs("a", { href: card.href, children: [
                    card.cta,
                    /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
                  ] })
                }
              ) })
            ] })
          ]
        },
        index
      );
    }) })
  ] });
}

const ITEMS = [
  {
    title: "FISMA Compliance",
    image: {
      src: "/images/home/features/7.webp",
      width: 186,
      height: 103
    },
    desc: "Full FISMA compliance with continuous monitoring and automated reporting."
  },
  {
    title: "Air-Gapped Security",
    image: {
      src: "/images/home/features/1.webp",
      width: 198,
      height: 133
    },
    desc: "Secure isolated environments for classified workloads and sensitive operations."
  },
  {
    title: "Multi-Level Security",
    image: {
      src: "/images/home/features/2.webp",
      width: 148,
      height: 124
    },
    desc: "Clearance-based access controls with compartmentalized security zones."
  },
  {
    title: "Audit & Compliance",
    image: {
      src: "/images/home/features/5.webp",
      width: 195,
      height: 74.6
    },
    desc: "Comprehensive audit trails meeting federal security and compliance standards."
  },
  {
    title: "Mission-Critical SLA",
    image: {
      src: "/images/home/features/3.webp",
      width: 154,
      height: 99
    },
    desc: "99.99% uptime guarantee with 24/7 government support and rapid response."
  },
  {
    title: "Federal Integrations",
    image: {
      src: "/images/home/features/6.webp",
      width: 148,
      height: 124
    },
    desc: "Native integration with government systems and existing federal infrastructure."
  },
  {
    title: "Secure Communications",
    image: {
      src: "/images/home/features/4.webp",
      width: 171,
      height: 120
    },
    desc: "End-to-end encrypted communications compatible with SCIF environments."
  },
  {
    title: "Defense-Ready Deploy",
    image: {
      src: "/images/home/hero.webp",
      width: 186,
      height: 103
    },
    desc: "Rapid deployment for defense contractors and mission-critical operations."
  }
];
const GovernmentFeatures = ({ className }) => {
  return /* @__PURE__ */ jsx("section", { className: cn("py-10 md:py-20", className), children: /* @__PURE__ */ jsxs(Carousel, { children: [
    /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-between gap-10 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: "Secure by design for government missions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl text-lg leading-snug", children: "Enterprise-grade security, compliance, and performance. Purpose-built for federal agencies, defense contractors, and classified environments." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden gap-3 md:flex", children: [
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CarouselContent, { className: "mx-auto mt-10 max-w-[3000px] cursor-grab", children: ITEMS.map((card, idx) => /* @__PURE__ */ jsx(CarouselItem, { className: "min-w-70 basis-[16%] pl-6", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ jsx(Card, { className: "dark:via-muted/20 dark:to-muted/50 to-background via-card from-card h-43 bg-gradient-to-br dark:from-transparent", children: /* @__PURE__ */ jsx(CardContent, { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: card.image.src,
          alt: card.title,
          width: card.image.width,
          height: card.image.height,
          className: "object-contain invert dark:invert-0"
        }
      ) }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-accent-foreground mt-3 mb-2 text-lg font-bold", children: card.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: card.desc })
    ] }) }, idx)) }),
    /* @__PURE__ */ jsxs("div", { className: "container mt-10 flex justify-center gap-3 md:hidden", children: [
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" })
    ] })
  ] }) });
};

function GovernmentHero() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding relative", children: /* @__PURE__ */ jsxs("div", { className: "relative container", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-10 lg:flex-row lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex max-w-3xl flex-1 flex-col items-start gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-full border p-1 text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-muted rounded-full px-3 py-1", children: "Government Solution" }),
          /* @__PURE__ */ jsx("span", { className: "px-3", children: "FISMA Compliant • FedRAMP Ready" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl", children: [
          "Secure AI/HPC infrastructure for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "national security" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-snug md:text-lg lg:text-xl", children: "LaunchHPC delivers mission-critical AI and high-performance computing orchestration for federal agencies, defense contractors, and government organizations. Built to meet the most stringent security requirements." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4.5", children: [
          /* @__PURE__ */ jsx(Button, { className: "flex-1 md:min-w-45", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/demo", children: "Request Security Brief" }) }),
          /* @__PURE__ */ jsx(Button, { className: "flex-1 md:min-w-45", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/demo", children: "Schedule Clearance Demo" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center text-sm", children: "Trusted by federal agencies • IL-5 authorized" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/dashboard.png",
        alt: "LaunchHPC Government Security Dashboard",
        className: "ring-foreground/5 mt-10 w-full rounded-xs shadow-2xl ring-6 invert md:mt-20 md:rounded-sm md:px-[1px] md:ring-16 lg:mt-30 dark:invert-0",
        width: 1440,
        height: 905
      }
    ),
    /* @__PURE__ */ jsx(GradientSVG, { className: "absolute top-0 right-0 -z-10 origin-right scale-30 md:scale-50 lg:scale-100" })
  ] }) });
}
function GradientSVG({ ...props }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 1342,
      height: 1199,
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#D9D9D9",
            d: "M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#a)",
            d: "M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "url(#b)",
            strokeWidth: 0.631,
            d: "M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#c)",
            d: "m875.715 420.318 203.405-357.96c50.52-10.487-50.57 96.246 0 186.332 80.45 143.304 298.36 312.903 256.86 419.243-67.58 173.19-306.7 49.523-396.529 0-71.863-39.618-72.434-181.585-63.736-247.615Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#d)",
            d: "m46.623 746.37 908.336-619.388 130.381-66.714-46.89 196.709-156.685 413.622c-27.829 50.066-111.545 120.16-223.775 0-98.592-105.557-466.882-3.975-611.367 75.771L.814 777.607c10.115-9.59 25.82-20.205 45.809-31.237Z"
          }
        ),
        /* @__PURE__ */ jsx("g", { filter: "url(#e)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#f)",
            d: "m883.093 595.649 164.727-565.43 4.66 326.52-169.387 238.91Z"
          }
        ) }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "a",
              x1: 1027.3,
              x2: 1027.73,
              y1: 587.333,
              y2: 1198.11,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#9D83E7" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.516, stopColor: "#D445E7" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "b",
              x1: 1027.3,
              x2: 1027.3,
              y1: 587.333,
              y2: 1197.77,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#10CBF4" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#10CBF4", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "c",
              x1: 871.897,
              x2: 1188.44,
              y1: 575.509,
              y2: 575.628,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#9259ED" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.514, stopColor: "#CF54EE" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FB8684" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "d",
              x1: 676.669,
              x2: 677.051,
              y1: 60.268,
              y2: 757.516,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#B956EE" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#9672FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "f",
              x1: 1020.81,
              x2: 814.267,
              y1: 202.771,
              y2: 477.618,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#FB07FF" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.505, stopColor: "#FF6847" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FF474A" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "e",
              width: 228.968,
              height: 625.009,
              x: 853.303,
              y: 0.429,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsx(
                  "feGaussianBlur",
                  {
                    result: "effect1_foregroundBlur_401_39842",
                    stdDeviation: 14.895
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "LaunchHPC for Government | AI/HPC Orchestration Platform", "description": "Secure, compliant AI/HPC orchestration for federal agencies, defense contractors, and government organizations. Meet FISMA, FedRAMP, and DoD requirements." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GovernmentHero", GovernmentHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/government-hero", "client:component-export": "default" })} ${renderComponent($$result2, "GovernmentFeatures", GovernmentFeatures, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/government-features", "client:component-export": "default" })} ${renderComponent($$result2, "GovernmentDashboard", GovernmentDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/government-dashboard", "client:component-export": "default" })} ${maybeRenderHead()}<div class="relative"> <div class="to-accent/50 bg-chart-1 absolute top-0 left-0 -z-3 hidden size-40 -translate-x-1/4 -translate-y-1/2 rounded-full will-change-transform lg:block"></div> ${renderComponent($$result2, "AIAutomation", AIAutomation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/ai-automation", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/landing.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/landing.astro";
const $$url = "/landing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Landing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
