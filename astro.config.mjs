// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  site: 'https://amalgamy.ai',
  output: 'static',

  integrations: [
    starlight({
      title: 'Amalgamy Docs',
      description: 'AI/HPC Orchestration Platform Documentation',
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'docs' },
        },
      ],
    }),
    mdx(),
    sitemap(),
    react(),
  ],

  vite: {
    ssr: {
			noExternal: ['zod'],
		},
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});