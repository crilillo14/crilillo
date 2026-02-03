import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    githubUrl: z.string().url().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
