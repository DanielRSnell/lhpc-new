import { jsx, jsxs } from 'react/jsx-runtime';
import { C as Card, d as CardContent } from './card_Dgj0kdKs.mjs';
import { C as Carousel, c as CarouselPrevious, d as CarouselNext, a as CarouselContent, b as CarouselItem } from './carousel_Dp0h94_E.mjs';
import { c as cn } from './DefaultLayout_E2baAWzu.mjs';

const ITEMS = [
  {
    title: "Multi-Architecture Support",
    image: {
      src: "/images/home/features/1.webp",
      width: 198,
      height: 133
    },
    desc: "Support for NVIDIA, AMD, and Intel architectures in unified workflows."
  },
  {
    title: "Hybrid Cloud Management",
    image: {
      src: "/images/home/features/2.webp",
      width: 148,
      height: 124
    },
    desc: "Seamlessly orchestrate workloads across on-prem, cloud, and edge."
  },
  {
    title: "Real-Time Monitoring",
    image: {
      src: "/images/home/features/3.webp",
      width: 154,
      height: 99
    },
    desc: "Complete visibility into resource utilization and job performance."
  },
  {
    title: "Intelligent Scheduling",
    image: {
      src: "/images/home/features/4.webp",
      width: 171,
      height: 120
    },
    desc: "AI-powered workload placement for optimal resource efficiency."
  },
  {
    title: "Comprehensive Logging",
    image: {
      src: "/images/home/features/5.webp",
      width: 195,
      height: 74.6
    },
    desc: "Detailed audit trails and compliance reporting for all operations."
  },
  {
    title: "Enterprise Integrations",
    image: {
      src: "/images/home/features/6.webp",
      width: 148,
      height: 124
    },
    desc: "Native integration with existing HPC schedulers and cloud platforms."
  },
  {
    title: "Security & Compliance",
    image: {
      src: "/images/home/features/7.webp",
      width: 186,
      height: 103
    },
    desc: "Zero-trust architecture with hardware-level isolation and encryption."
  },
  {
    title: "Portable Workloads",
    image: {
      src: "/images/home/hero.webp",
      width: 186,
      height: 103
    },
    desc: "Run workloads anywhere with consistent performance guarantees."
  }
];
const Features = ({ className }) => {
  return /* @__PURE__ */ jsx("section", { className: cn("py-10 md:py-20", className), children: /* @__PURE__ */ jsxs(Carousel, { children: [
    /* @__PURE__ */ jsxs("div", { className: "container flex flex-col justify-between gap-10 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xxl leading-tight tracking-tight md:text-5xl", children: "Built for enterprise-scale AI/HPC" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl text-lg leading-snug", children: "Comprehensive orchestration with full observability, security, and compliance. From edge to cloud to supercomputers." })
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

export { Features as F };
