import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { A as AuthLayout } from '../chunks/auth-layout_BAMnmc7p.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { ChevronLeft, Copy } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa6';
import { toast } from 'sonner';
import { c as cn, B as Button, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { OTPInput, OTPInputContext } from 'input-otp';
import { S as Separator } from '../chunks/separator_DmaRZI4O.mjs';
export { renderers } from '../renderers.mjs';

function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}

function OtpSection() {
  const [value, setValue] = useState("");
  const handlePasteCode = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const digits = text.replace(/\D/g, "").slice(0, 6);
      setValue(digits);
    } catch (err) {
      toast.error("Failed to read clipboard");
      console.error("Failed to read clipboard:", err);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/signin",
        className: "text-muted-foreground bg-muted group flex size-6 items-center justify-center rounded-sm",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-4 transition-transform group-hover:-translate-x-0.25" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-card-foreground text-xl font-semibold", children: "Enter code" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Please enter the 6 digit code we sent to samuellasisi1st@gmail.com." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "muted",
          className: "text-muted-foreground flex h-10 w-full items-center justify-center gap-3 text-base",
          children: [
            /* @__PURE__ */ jsx(FaGoogle, { className: "size-4.5" }),
            "Continue with Google"
          ]
        }
      ),
      /* @__PURE__ */ jsx(Separator, { className: "bg-input" }),
      /* @__PURE__ */ jsx(
        InputOTP,
        {
          maxLength: 6,
          value,
          onChange: (value2) => setValue(value2),
          containerClassName: "w-full max-w-xs mb-4",
          children: /* @__PURE__ */ jsx(InputOTPGroup, { className: "w-full justify-between gap-2", children: [...Array(6)].map((_, idx) => /* @__PURE__ */ jsx(
            InputOTPSlot,
            {
              index: idx,
              className: "!bg-background/20 border-input size-10 shrink-0 rounded-md border font-medium"
            },
            idx
          )) })
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: handlePasteCode,
          variant: "secondary",
          className: "bg-secondary/20 hover:bg-secondary/30 text-chart-1",
          size: "sm",
          children: [
            /* @__PURE__ */ jsx(Copy, { className: "size-4" }),
            "Paste code"
          ]
        }
      )
    ] })
  ] });
}

const $$Otp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Verify Account - LaunchHPC", "description": "Enter your verification code" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthLayout", AuthLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "OtpSection", OtpSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/otp-section", "client:component-export": "default" })} ` })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/otp.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/otp.astro";
const $$url = "/otp";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Otp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
