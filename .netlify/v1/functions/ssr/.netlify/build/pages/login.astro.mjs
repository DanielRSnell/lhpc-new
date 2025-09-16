import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { S as SignInSection } from '../chunks/signin-section_DLVhkIfi.mjs';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_E2baAWzu.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Sign In - LaunchHPC", "description": "Sign in to your LaunchHPC account" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignInSection", SignInSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/signin-section", "client:component-export": "default" })} ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/login.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
