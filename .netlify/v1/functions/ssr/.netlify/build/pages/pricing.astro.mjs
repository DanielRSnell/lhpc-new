import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { FileCheck, Shield, Check, ArrowRight } from 'lucide-react';
import { B as Badge } from '../chunks/badge_oigLpaa9.mjs';
import { B as Button, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { S as Separator } from '../chunks/separator_DmaRZI4O.mjs';
export { renderers } from '../renderers.mjs';

const Cta19 = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-32", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col rounded-xl border lg:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "grow px-8 py-8 lg:px-16", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Government Solution" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 max-w-xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Ready to Deploy Secure HPC for Your Agency?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 md:text-lg", children: "LaunchHPC meets the most stringent government security requirements while delivering unmatched HPC performance. From classified research to defense simulations, we provide the secure foundation your mission-critical workloads demand." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsx(Button, { children: "Request Security Brief" }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Schedule Clearance Demo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex grow basis-5/12 flex-col justify-between border-t lg:border-t-0 lg:border-l", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/docs",
          className: "hover:bg-muted/50 flex h-full items-center px-9 py-6 transition-colors lg:justify-center",
          children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              FileCheck,
              {
                className: "size-8 shrink-0 md:size-10",
                strokeWidth: 1.5
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold md:text-xl", children: "Compliance Documentation" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-lg md:text-lg", children: "Review our FISMA compliance, FedRAMP authorization, and security certifications." })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/demo",
          className: "hover:bg-muted/50 flex h-full items-center px-9 py-6 transition-colors lg:justify-center",
          children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              Shield,
              {
                className: "size-8 shrink-0 md:size-10",
                strokeWidth: 1.5
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold md:text-xl", children: "Security Demonstration" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-lg md:text-lg", children: "Experience our secure platform with a classified environment demonstration tailored for government needs." })
            ] })
          ] })
        }
      )
    ] })
  ] }) }) });
};

const Pricing36 = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-32", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-4xl gap-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col rounded-4xl bg-gradient-to-r from-blue-500 to-purple-500 p-px", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-background h-full rounded-[31px] p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold", children: "Standard Plan" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-6xl font-bold", children: [
            "Custom",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-base font-semibold", children: "pricing" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "AI/HPC orchestration for growing teams and workloads" })
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Multi-cloud orchestration" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Deploy and manage workloads across AWS, Azure, and GCP" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Real-time monitoring" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Monitor compute resources and workload performance in real-time" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "AI-powered optimization" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Intelligent workload placement and resource optimization" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "24/7 technical support" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Expert HPC and AI infrastructure support with guaranteed response times" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/demo",
          className: "text-background group flex items-center justify-center gap-1.5 py-3 text-center font-medium",
          children: [
            "Contact Sales",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 transition-transform group-hover:translate-x-1" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-primary flex h-full flex-col rounded-4xl p-px", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-background h-full rounded-[31px] p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold", children: "Enterprise Plan" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-6xl font-bold", children: [
            "Contact",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-base font-semibold", children: "for pricing" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Enterprise-grade AI/HPC orchestration at scale" })
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Unlimited GPU clusters" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Scale compute resources without limits across any infrastructure" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Zero-trust security architecture" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Enterprise-grade security with compliance reporting (FedRAMP, SOC 2)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Custom integrations & API access" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Integrate with existing tools and build custom solutions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-1 size-4 shrink-0 text-green-500" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Dedicated success manager" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Receive personalized guidance from dedicated specialists" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/demo",
          className: "text-background group flex items-center justify-center gap-1.5 py-3 text-center font-medium",
          children: [
            "Contact Us",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 transition-transform group-hover:translate-x-1" })
          ]
        }
      )
    ] }) })
  ] }) }) });
};

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Pricing - LaunchHPC AI/HPC Orchestration Platform", "description": "Enterprise-grade AI/HPC orchestration pricing tailored to your infrastructure needs. Scale your compute workloads with flexible, transparent pricing." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-padding bg-background"> <div class="container space-y-6 text-center"> <div class="mx-auto max-w-3xl"> <h1 class="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
Enterprise-grade <span class="text-gradient">AI/HPC orchestration</span> </h1> <p class="text-muted-foreground text-lg md:text-xl">
Custom pricing tailored to your infrastructure needs. Scale your AI
          and high-performance computing workloads with enterprise-grade
          security and support.
</p> </div> </div> </section> ${renderComponent($$result2, "Pricing36", Pricing36, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/pricing36", "client:component-export": "Pricing36" })} ${renderComponent($$result2, "Cta19", Cta19, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/cta19", "client:component-export": "Cta19" })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/pricing.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
