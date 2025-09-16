// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: 'https://launchhpc.com',
  integrations: [
    // TODO: Re-enable Starlight once Zod validation issue is resolved
    // starlight({
    //   title: 'LaunchHPC Docs',
    //   description: 'AI/HPC Orchestration Platform Documentation',
    //   customCss: ['./src/styles/global.css'],
    //   sidebar: [
    //     {
    //       label: 'Getting Started',
    //       autogenerate: { directory: 'docs' },
    //     },
    //   ],
    // }),
    mdx(),
    sitemap(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
