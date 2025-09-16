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

// Temporarily disabled docs collection
// const docs = defineCollection({
//   loader: docsLoader(),
//   schema: docsSchema(),
// });

export const collections = {
  changelog,
  // docs,
};
