import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from "@astrojs/db";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://squinteye1.github.io",
  base: "astrodb",
 
  output: "server",
  integrations: [mdx(), sitemap(), db()],
  adapter: node({
    mode: "standalone",
  }),
});