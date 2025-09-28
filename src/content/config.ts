import { defineCollection, z } from 'astro:content';

// 标签解析函数：将逗号分隔的字符串转换为标签数组
function parseTags(tagsString: string | undefined): string[] {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
}

// 标签反向解析函数：将标签数组转换为逗号分隔的字符串
function stringifyTags(tagsArray: string[] | undefined): string {
  if (!tagsArray || tagsArray.length === 0) return '';
  return tagsArray.join(', ');
}

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.string().optional().transform(parseTags),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    date: z.date().optional(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    date: z.date().optional(),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    date: z.date().optional(),
  }),
});

const warehouse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
    date: z.date().optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.string().optional().transform(parseTags),
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
  'site-config': siteConfig,
};