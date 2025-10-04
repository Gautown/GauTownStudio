import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    remarkPlugins: [
      remarkGfm,
      remarkSmartypants,
    ],
    rehypePlugins: [],
    syntaxHighlight: 'shiki',
    smartypants: true,
  },
});