// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CleanTee Documentation',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/melgarcia21/cleantee-documentation.git' }
      ],
      sidebar: [
        { label: 'Getting Started', autogenerate: { directory: 'docs/getting-started' } },
        { label: 'System Overview', autogenerate: { directory: 'docs/overview' } }
        // Add other sections as they're created
      ]
    }),
    svelte(),
    mdx(),
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});