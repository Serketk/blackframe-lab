import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    date: z.date(),
    readingTime: z.string(),
    topic: z.string(),
    related: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { insights };
