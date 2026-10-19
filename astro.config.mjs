import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pokejon0401.github.io',
  base: '/yumemi',
  output: 'static',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-light' } }
});
