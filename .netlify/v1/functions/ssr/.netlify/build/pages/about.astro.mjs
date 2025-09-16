import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ArrowRight } from 'lucide-react';
import { c as cn, B as Button, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { C as Carousel, a as CarouselContent, b as CarouselItem } from '../chunks/carousel_Dp0h94_E.mjs';
import { F as Features } from '../chunks/features_C4DpqYjt.mjs';
export { renderers } from '../renderers.mjs';

function AboutHero() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-fit items-center rounded-full border p-1 text-xs", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-muted rounded-full px-3 py-1", children: "About LaunchHPC" }),
      /* @__PURE__ */ jsx("span", { className: "px-3", children: "Enterprise AI/HPC Platform" })
    ] }),
    /* @__PURE__ */ jsxs("h1", { className: "my-5 text-5xl leading-none tracking-tight lg:text-7xl", children: [
      "Built for scale. Backed by innovation.",
      /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
      "Powered by AI."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-snug md:text-lg lg:text-xl", children: [
      "LaunchHPC is the enterprise AI/HPC orchestration platform that unifies compute across every environment. We believe high-performance computing should be accessible, secure, and intelligent. That means seamless multi-cloud orchestration, zero-trust security, and AI-powered optimization. Whether you're running massive training workloads or complex simulations, LaunchHPC puts you in control of your entire infrastructure.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "We believe enterprise software should be powerful, transparent, and adaptable to your needs. That's why LaunchHPC is built for security, compliance, and performance at any scale—from edge to exascale."
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/images/about/hero.webp",
        alt: "LaunchHPC Platform",
        width: 1920,
        height: 1280,
        className: "mt-16 aspect-video object-cover object-top"
      }
    )
  ] });
}

const logos = [
  {
    name: "Aave",
    src: "/images/logos/aave.svg",
    width: 130,
    height: 37.5
  },
  {
    name: "AE Studio",
    src: "/images/logos/ae-studio.svg",
    width: 156,
    height: 37
  },
  {
    name: "Atoms",
    src: "/images/logos/atoms.svg",
    width: 148,
    height: 28
  },
  {
    name: "Alchemy",
    src: "/images/logos/alchemy.svg",
    width: 200,
    height: 37
  },
  {
    name: "Atoms",
    src: "/images/logos/atoms.svg",
    width: 148,
    height: 28
  }
];
function AboutLogos() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container !pt-0 text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground tracking-normal", children: "Trusted by Fortune 500 enterprises and leading research institutions" }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-13", children: logos.map((logo, index) => /* @__PURE__ */ jsx(
      "img",
      {
        src: logo.src,
        alt: logo.name,
        width: logo.width,
        height: logo.height,
        className: "opacity-70 invert dark:invert-0"
      },
      index
    )) })
  ] });
}

const newsItems = [
  {
    id: 1,
    logo: {
      src: "/images/logos/forbes.svg",
      alt: "Forbes",
      width: 162,
      height: 42,
      className: "invert dark:invert-0"
    },
    title: "LaunchHPC is transforming enterprise AI infrastructure with intelligent orchestration that scales from edge to exascale. Zero-trust security meets unparalleled performance.",
    readMoreLink: "#"
  },
  {
    id: 2,
    logo: {
      src: "/images/logos/tc.svg",
      alt: "TechCrunch",
      width: 84,
      height: 42
    },
    title: "LaunchHPC delivers true multi-cloud freedom for AI workloads. Enterprise teams can now orchestrate massive compute resources across AWS, Azure, and GCP seamlessly.",
    readMoreLink: "#"
  },
  {
    id: 3,
    logo: {
      src: "/images/logos/the-guardian.svg",
      alt: "The Guardian",
      width: 127.8,
      height: 48,
      className: "invert dark:invert-0"
    },
    title: "Enterprise-grade, AI-powered, and remarkably intuitive. LaunchHPC makes high-performance computing accessible to organizations of any size. This is the future of compute orchestration.",
    readMoreLink: "#"
  }
];
function AboutNews() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: "LaunchHPC in the news" }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-3", children: newsItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: item.logo.src,
          alt: item.logo.alt,
          width: item.logo.width,
          height: item.logo.height,
          className: cn`object-contain ${item.logo.className}`
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-accent-foreground text-lg leading-snug", children: item.title }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          asChild: true,
          className: "group gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95",
          children: /* @__PURE__ */ jsxs("a", { href: item.readMoreLink, children: [
            "Read more",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
          ] })
        }
      )
    ] }, item.id)) })
  ] }) });
}

const teamMembers = [
  {
    name: "Angela Hood",
    role: "Founder & CEO",
    image: "/images/team-members/angela.jpeg"
  },
  {
    name: "Justin Hood",
    role: "Chief Operating Officer",
    image: "/images/team-members/justin.jpeg"
  },
  {
    name: "Christian Kennedy",
    role: "Chief Technology Officer",
    image: "/images/team-members/chris.jpeg"
  },
  {
    name: "Alex Shmelev",
    role: "Chief Innovations Officer",
    image: "/images/team-members/alex.jpeg"
  }
];
function AboutTeam() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding container max-w-screen-xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: "Meet the LaunchHPC leadership team" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 max-w-2xl text-lg leading-snug", children: "LaunchHPC is led by experienced executives with deep expertise in enterprise technology, high-performance computing, and AI infrastructure at scale." }),
    /* @__PURE__ */ jsx(
      Carousel,
      {
        className: "mt-10",
        opts: {
          align: "start",
          loop: false
        },
        children: /* @__PURE__ */ jsx(CarouselContent, { className: "cursor-grab snap-x snap-mandatory", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxs(
          CarouselItem,
          {
            className: "min-w-[289px] basis-1/4 snap-start",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: member.image,
                  alt: member.name,
                  width: 289,
                  height: 358
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-accent-foreground mt-4 text-2xl font-bold", children: member.name }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: member.role })
            ]
          },
          index
        )) })
      }
    )
  ] });
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "About LaunchHPC - AI/HPC Orchestration Platform", "description": "Learn about LaunchHPC's mission to unify AI and HPC orchestration across every environment. Meet our team and discover how we're revolutionizing enterprise compute." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHero", AboutHero, {})} ${renderComponent($$result2, "AboutLogos", AboutLogos, {})} ${renderComponent($$result2, "AboutTeam", AboutTeam, {})} ${renderComponent($$result2, "AboutNews", AboutNews, {})} ${renderComponent($$result2, "Features", Features, { "className": "section-padding", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/features", "client:component-export": "default" })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/about.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
