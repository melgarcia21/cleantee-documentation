import { z, defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }), 
  'getting-started': docsCollection,
  'overview': docsCollection,
  'requirements': docsCollection,
  'architecture': docsCollection,
  'database': docsCollection,
  'user-guides': docsCollection,
  'features': docsCollection,
  'technical': docsCollection,
  'api': docsCollection,
  'developer': docsCollection,
  'deployment': docsCollection,
  'maintenance': docsCollection,
  'appendices': docsCollection,
};