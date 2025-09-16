import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { A as AuthLayout } from '../chunks/auth-layout_BAMnmc7p.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { c as cn, B as Button, $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../chunks/card_Dgj0kdKs.mjs';
import { I as Input } from '../chunks/input_CvJkumpX.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';
export { renderers } from '../renderers.mjs';

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

const ForgotPasswordSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    setIsLoading(false);
    setIsSubmitted(true);
    console.log("Password reset requested for:", email);
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsx("section", { className: "section-padding flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "container max-w-md", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-lg", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-1 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-green-600 dark:text-green-400" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold", children: "Check your email" }),
        /* @__PURE__ */ jsxs(CardDescription, { children: [
          "We've sent a password reset link to ",
          /* @__PURE__ */ jsx("strong", { children: email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Click the link in the email to reset your password. If you don't see the email, check your spam folder." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Didn't receive the email?" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setIsSubmitted(false),
              children: "Try again"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "flex justify-center", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "gap-2", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("a", { href: "/(auth)/signin", children: "Back to sign in" })
      ] }) })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx("section", { className: "section-padding flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "container max-w-md", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-lg", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-1 text-center", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold", children: "Forgot your password?" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email address and we'll send you a link to reset your password" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            placeholder: "m@example.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: isLoading, children: isLoading ? "Sending..." : "Send reset link" })
    ] }) }),
    /* @__PURE__ */ jsx(CardFooter, { className: "flex justify-center", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "gap-2", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("a", { href: "/(auth)/signin", children: "Back to sign in" })
    ] }) })
  ] }) }) });
};

const $$ForgotPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Forgot Password - LaunchHPC", "description": "Reset your LaunchHPC account password" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthLayout", AuthLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ForgotPasswordSection", ForgotPasswordSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/forgot-password-section", "client:component-export": "ForgotPasswordSection" })} ` })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/forgot-password.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
