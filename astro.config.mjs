import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  integrations: [mdx(), sitemap(), db()]
});