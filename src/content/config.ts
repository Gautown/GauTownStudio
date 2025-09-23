import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    date: z.date().optional(),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    date: z.date().optional(),
  }),
});

const warehouse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    date: z.date().optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
  }),
});

const siteConfig = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    keywords: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    siteName: z.string(),
    navigation: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })),
    friendLinks: z.array(z.object({
      name: z.string(),
      url: z.string(),
      description: z.string(),
    })),
    copyright: z.string(),
  }),
});

export const collections = {
  notes,
  portfolio,
  tools,
  warehouse,
  about,
  site_config: siteConfig,
};