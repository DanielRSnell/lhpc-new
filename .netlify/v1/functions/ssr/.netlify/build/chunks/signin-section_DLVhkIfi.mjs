import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeClosed, Eye } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa6';
import { B as Button } from './DefaultLayout_E2baAWzu.mjs';
import { o as object, s as string, F as Form, a as FormField, b as FormItem, c as FormControl, d as FormMessage } from './form_CK1f2QUf.mjs';
import { I as Input } from './input_CvJkumpX.mjs';
import { S as Separator } from './separator_DmaRZI4O.mjs';

const formSchema = object({
  email: string().optional(),
  password: string().optional()
});
function SignInSection() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: void 0,
      password: void 0
    }
  });
  const onSubmit = (values) => {
    console.log(values);
    window.location.href = "/otp";
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-card-foreground text-xl font-semibold", children: "Welcome to LaunchHPC" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Sign up or sign in to your account" })
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
      /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-3", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Email Address",
                  className: "!bg-background/20 h-10 placeholder:opacity-40",
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: showPassword ? "text" : "password",
                    placeholder: "Password",
                    className: "!bg-background/20 h-10 pe-10 placeholder:opacity-40",
                    ...field
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "text-muted-foreground hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2 transition-colors",
                    children: showPassword ? /* @__PURE__ */ jsx(EyeClosed, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            variant: "secondary",
            className: "bg-secondary/20 hover:bg-secondary/30 text-chart-1 mt-1 h-10 w-full text-base",
            children: "Sign in"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 text-xs", children: [
      /* @__PURE__ */ jsx("span", { className: "", children: "Don't have an account? " }),
      /* @__PURE__ */ jsx("a", { href: "/signup", className: "text-chart-1 font-bold hover:underline", children: "Sign up" })
    ] })
  ] });
}

export { SignInSection as S };
