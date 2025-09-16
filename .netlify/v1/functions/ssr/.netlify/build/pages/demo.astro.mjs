import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, Cpu, Cloud, Users, Shield, Check, Clock, Zap, Globe, Lock } from 'lucide-react';
import 'react';
import 'clsx';
import { c as cn, B as Button, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { I as Input } from '../chunks/input_CvJkumpX.mjs';
import * as SelectPrimitive from '@radix-ui/react-select';
export { renderers } from '../renderers.mjs';

function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}

const DemoRequest = () => {
  return /* @__PURE__ */ jsx("section", { className: "section-padding relative", children: /* @__PURE__ */ jsxs("div", { className: "relative container", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center gap-5 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-full border p-1 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-muted rounded-full px-3 py-1", children: "Get Started" }),
        /* @__PURE__ */ jsx("span", { className: "px-3", children: "Schedule Your Demo" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl", children: [
        "See LaunchHPC in action with a",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "personalized demo" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl", children: "Experience how LaunchHPC transforms AI/HPC workload orchestration across hybrid cloud environments. Get a tailored demonstration of our platform." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-6 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Cpu, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Enterprise Grade" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Cloud, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Multi-Cloud Ready" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "500+ Teams" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "SOC 2 Certified" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full pb-10 md:space-y-10 md:pb-0", children: /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs("div", { className: "space-y-16 pb-20 lg:pb-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "mt-16 space-y-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "What you'll discover:" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2.5", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-muted-foreground size-4 shrink-0 stroke-[1.5]" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Live demonstration of multi-cloud orchestration capabilities" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2.5", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-muted-foreground size-4 shrink-0 stroke-[1.5]" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Custom deployment strategy for your infrastructure" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2.5", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-muted-foreground size-4 shrink-0 stroke-[1.5]" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "ROI analysis and performance optimization insights" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2.5", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-muted-foreground size-4 shrink-0 stroke-[1.5]" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Enterprise security and compliance features walkthrough" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-accent flex h-8 w-8 items-center justify-center rounded", children: /* @__PURE__ */ jsx("span", { className: "text-accent-foreground text-xs font-bold", children: "AWS" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm font-medium", children: "AWS" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-accent flex h-8 w-8 items-center justify-center rounded", children: /* @__PURE__ */ jsx("span", { className: "text-accent-foreground text-xs font-bold", children: "GCP" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm font-medium", children: "Google Cloud" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-accent flex h-8 w-8 items-center justify-center rounded", children: /* @__PURE__ */ jsx("span", { className: "text-accent-foreground text-xs font-bold", children: "K8s" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm font-medium", children: "Kubernetes" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-1 gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/50 space-y-2 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Demo Duration" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "45-60 minutes personalized session with our solution architects" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/50 space-y-2 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Zap, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Live Environment" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Real-time demonstration using actual HPC workloads and data" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/50 space-y-2 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Globe, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Global Availability" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Available across all time zones with regional expertise" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/50 space-y-2 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Lock, { className: "text-muted-foreground size-4 stroke-[1.5]" }),
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Secure Session" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Enterprise-grade security with NDA protection available" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center lg:mt-2.5", children: /* @__PURE__ */ jsx("div", { className: "relative flex w-full max-w-[42rem] min-w-[20rem] flex-col items-center overflow-visible", children: /* @__PURE__ */ jsx("form", { className: "z-10 w-full space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "border-border bg-accent/20 w-full space-y-8 rounded-xl border px-8 py-10 shadow-sm backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "border-border border-b pb-2 text-lg font-semibold", children: "Contact Information" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "fullName", children: "Full name" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "fullName",
                  name: "fullName",
                  placeholder: "John Doe"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "jobTitle", children: "Job title" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "jobTitle",
                  name: "jobTitle",
                  placeholder: "CTO, DevOps Engineer, etc."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Work email" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  placeholder: "john.doe@company.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Phone number" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "phone",
                  name: "phone",
                  placeholder: "+1 (555) 123-4567"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "border-border border-b pb-2 text-lg font-semibold", children: "Company Information" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "company", children: "Company" }) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "company",
                  name: "company",
                  placeholder: "Your Organization"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "companySize", children: "Company size" }) }),
              /* @__PURE__ */ jsxs(Select, { children: [
                /* @__PURE__ */ jsx(SelectTrigger, { id: "companySize", name: "companySize", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select company size" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "1-10", children: "1-10 employees" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "11-50", children: "11-50 employees" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "51-200", children: "51-200 employees" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "201-1000", children: "201-1000 employees" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "1000+", children: "1000+ employees" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "border-border border-b pb-2 text-lg font-semibold", children: "Technical Requirements" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "useCase", children: "Primary use case" }) }),
              /* @__PURE__ */ jsxs(Select, { children: [
                /* @__PURE__ */ jsx(SelectTrigger, { id: "useCase", name: "useCase", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select primary use case" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "ml-training", children: "ML Model Training" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "simulation", children: "HPC Simulations" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "data-processing", children: "Data Processing" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "research", children: "Research Computing" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "rendering", children: "Rendering & Graphics" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsx("label", { htmlFor: "infrastructure", children: "Current infrastructure" }) }),
              /* @__PURE__ */ jsxs(Select, { children: [
                /* @__PURE__ */ jsx(
                  SelectTrigger,
                  {
                    id: "infrastructure",
                    name: "infrastructure",
                    children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select current setup" })
                  }
                ),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "on-premises", children: "On-premises only" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "cloud-only", children: "Cloud only" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "hybrid", children: "Hybrid cloud" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "multi-cloud", children: "Multi-cloud" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "planning", children: "Planning infrastructure" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "border-border border-b pb-2 text-lg font-semibold", children: "Additional Information" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2.5 text-sm font-medium", children: /* @__PURE__ */ jsxs("label", { htmlFor: "message", children: [
              "Tell us about your specific needs",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "(Optional)" })
            ] }) }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                rows: 4,
                className: "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full resize-none rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                placeholder: "Describe your current challenges, expected workload scale, or any specific requirements..."
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col justify-end space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", children: "Request Demo" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-center text-xs", children: [
            "We'll contact you within 1 business day to schedule your personalized demo. Read our",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/privacy",
                className: "hover:text-foreground underline transition-colors",
                children: "privacy policy"
              }
            ),
            "."
          ] })
        ] })
      ] }) }) }) })
    ] })
  ] }) });
};

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Request a Demo - LaunchHPC", "description": "Request a personalized demo of LaunchHPC's AI/HPC orchestration platform. See how we can streamline your compute infrastructure across hybrid cloud environments." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DemoSection", DemoRequest, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/demo-request", "client:component-export": "default" })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/demo.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
