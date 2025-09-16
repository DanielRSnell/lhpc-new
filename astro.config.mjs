// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: 'https://plasma-astro-template.vercel.app',
  integrations: [
    starlight({
      title: 'LaunchHPC Docs',
      description: 'AI/HPC Orchestration Platform Documentation',
      logo: {
        light: './public/logos/light-icon.png',
        dark: './public/logos/dark-icon.png',
        alt: 'LaunchHPC Docs',
        replacesTitle: true,
      },
      favicon: '/favicon/favicon.svg', 
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'docs' },
            { label: 'Installation', slug: 'installation' },
            { label: 'Core Concepts', slug: 'core-concepts' },
          ],
        },
        {
          label: 'Features',
          items: [
            { label: 'AI Prompts', slug: 'ai-prompts' },
            { label: 'File Systems', slug: 'file-systems' },
            { label: 'CRM & CSV', slug: 'crm-csv' },
          ],
        },
      ],
      customCss: ['./src/styles/global.css'],
      expressiveCode: {
        themes: ['github-light', 'github-dark'],
      },
    }),
    mdx(),
    sitemap(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
