import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight uses a single 'docs' collection with subdirectories for organization
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};