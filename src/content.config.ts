import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(30).max(160),
    category: z.enum(['nightmare', 'sleep', 'women', 'dream', 'morning']),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('YUMEMI編集部'),
    reviewer: z.string().optional(),
    hero: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    related: z.array(z.string()).max(6).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([])
  })
});

export const collections = { articles };
