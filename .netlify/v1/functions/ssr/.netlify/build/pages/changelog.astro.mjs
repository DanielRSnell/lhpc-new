import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../chunks/_astro_content_CbPRZjXr.mjs';
import { Bell } from 'lucide-react';
import { $ as $$DefaultLayout, B as Button, c as cn } from '../chunks/DefaultLayout_E2baAWzu.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Changelog = createComponent(async ($$result, $$props, $$slots) => {
  const changelogEntries = await getCollection("changelog");
  const sortedEntries = changelogEntries.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
  const renderedEntries = await Promise.all(
    sortedEntries.map(async (entry) => {
      const { Content } = await renderEntry(entry);
      return { ...entry, Content };
    })
  );
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Changelog - LaunchHPC", "description": "New updates and product improvements", "class": "astro-bd6alw26" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-padding container max-w-5xl space-y-24 astro-bd6alw26"> <!-- Header --> <div class="flex flex-wrap items-center justify-between gap-10 astro-bd6alw26"> <div class="space-y-3 astro-bd6alw26"> <h1 class="text-4xxl leading-tight font-medium tracking-tight astro-bd6alw26">
Changelog
</h1> <p class="text-muted-foreground text-lg leading-snug astro-bd6alw26">
New updates and product improvements
</p> </div> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "size": "sm", "className": "bg-muted/40 h-12 gap-2 !px-4 text-base font-normal astro-bd6alw26", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": async ($$result3) => renderTemplate`
Subscribe for updates
${renderComponent($$result3, "Bell", Bell, { "className": "h-4 w-4 astro-bd6alw26" })} ` })} </div> <div class="[--sidebar-width:150px] astro-bd6alw26"> <!-- Changelog entries with timeline --> <div class="relative astro-bd6alw26"> ${renderedEntries.map((entry, index) => renderTemplate`<div class="flex gap-5 md:gap-12 astro-bd6alw26">  <div class="relative mt-0.5 shrink-0 md:mt-1.5 md:w-[var(--sidebar-width)] astro-bd6alw26"> <time class="text-muted-foreground hidden md:inline-block astro-bd6alw26"> ${entry.data.date} </time> <div class="bg-background border-input absolute top-0 right-0 z-10 grid size-5 translate-x-1/2 place-items-center rounded-full border astro-bd6alw26"> <div class="bg-secondary size-2 rounded-full astro-bd6alw26"></div> </div> <div class="absolute top-0 right-0 h-full w-0.25 bg-[repeating-linear-gradient(to_bottom,var(--input)_0px,var(--input)_8px,transparent_12px,transparent_20px)] astro-bd6alw26"></div> </div>  <div${addAttribute((cn(
    "mb-16 flex-1",
    index === renderedEntries.length - 1 && "mb-0"
  ) ?? "") + " astro-bd6alw26", "class")}> <time class="text-muted-foreground mb-10 inline-block md:hidden astro-bd6alw26"> ${entry.data.date} </time> <h2 class="text-2xl leading-tight font-medium astro-bd6alw26"> ${entry.data.title} </h2>  <div class="changelog-content mt-4 space-y-4 astro-bd6alw26"> ${renderComponent($$result2, "entry.Content", entry.Content, { "class": "astro-bd6alw26" })} </div> </div> </div>`)} </div> <div class="flex justify-end astro-bd6alw26"> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "className": "mt-25 h-12 w-full md:w-[calc(100%-var(--sidebar-width))] astro-bd6alw26", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": async ($$result3) => renderTemplate`
Load more
` })} </div> </div> </section>  ` })}`;
}, "/Users/broke/Herd/astro/LHPC/site/src/pages/changelog.astro", void 0);

const $$file = "/Users/broke/Herd/astro/LHPC/site/src/pages/changelog.astro";
const $$url = "/changelog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Changelog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
