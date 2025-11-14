import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const changelog = defineCollection({
  // Load Markdown and MDX files in the `src/content/changelog/` directory.
  loader: glob({ base: './src/content/changelog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.string(), // Keep as string since it's formatted like "APR 25 2025"
    id: z.string(),
  }),
});

const pressRelease = defineCollection({
  // Load Markdown and MDX files in the `src/content/press-release/` directory.
  loader: glob({ base: './src/content/press-release', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.string(), // Keep as string since it's formatted like "OCT 29 2025"
    id: z.string(),
    source: z.string(), // Original press release URL
    slug: z.string().optional(), // Optional custom slug (defaults to filename)
    featured_image: z.string().optional(), // Optional featured image path
  }),
});

const events = defineCollection({
  // Load Markdown and MDX files in the `src/content/events/` directory.
  loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.string(), // Event date range like "NOV 18-21 2025"
    id: z.string(),
    location: z.string(), // Event location like "St. Louis, MO"
    event_url: z.string(), // Link to the custom landing page
    featured_image: z.string().optional(), // Featured image for archive listing
    excerpt: z.string().optional(), // Brief description for the archive listing
  }),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = {
  changelog,
  pressRelease,
  events,
  docs,
};
