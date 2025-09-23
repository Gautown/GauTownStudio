import { defineConfig } from "tinacms";

// 从环境变量获取配置，提供默认值
const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.GITHUB_BRANCH || "main";
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "";
const token = process.env.TINA_TOKEN || "";

export default defineConfig({
  branch,
  clientId,
  token,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "portfolio",
        label: "作品",
        path: "src/content/portfolio",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "描述",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "缩略图",
          },
          {
            type: "datetime",
            name: "date",
            label: "发布日期",
          },
          {
            type: "rich-text",
            name: "body",
            label: "内容",
            isBody: true,
          },
        ],
      },
      {
        name: "tools",
        label: "工具",
        path: "src/content/tools",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "描述",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "缩略图",
          },
          {
            type: "datetime",
            name: "date",
            label: "发布日期",
          },
          {
            type: "rich-text",
            name: "body",
            label: "内容",
            isBody: true,
          },
        ],
      },
      {
        name: "warehouse",
        label: "仓库",
        path: "src/content/warehouse",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "描述",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "缩略图",
          },
          {
            type: "datetime",
            name: "date",
            label: "发布日期",
          },
          {
            type: "rich-text",
            name: "body",
            label: "内容",
            isBody: true,
          },
        ],
      },
      {
        name: "notes",
        label: "笔记",
        path: "src/content/notes",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "内容",
            isBody: true,
          },
        ],
      },
      {
        name: "about",
        label: "关于",
        path: "src/content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "描述",
          },
          {
            type: "datetime",
            name: "date",
            label: "发布日期",
          },
          {
            type: "rich-text",
            name: "body",
            label: "内容",
            isBody: true,
          },
        ],
      },
      // 网站设置作为独立的菜单项
      {
        name: "site_config",
        label: "网站设置",
        path: "src/content/site-config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "网站标题",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "副标题",
          },
          {
            type: "string",
            name: "keywords",
            label: "关键字",
          },
          {
            type: "string",
            name: "description",
            label: "关键字描述",
          },
          {
            type: "string",
            name: "logo",
            label: "头部Logo",
          },
          {
            type: "string",
            name: "siteName",
            label: "网站名称",
          },
          {
            type: "string",
            name: "copyright",
            label: "版权信息",
          },
          {
            type: "object",
            name: "navigation",
            label: "导航菜单",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "导航项" }),
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "菜单名称",
              },
              {
                type: "string",
                name: "url",
                label: "链接地址",
              },
            ],
          },
          {
            type: "object",
            name: "friendLinks",
            label: "友情链接",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "友情链接" }),
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "链接名称",
              },
              {
                type: "string",
                name: "url",
                label: "链接地址",
              },
              {
                type: "string",
                name: "description",
                label: "链接描述",
              },
            ],
          },
        ],
      },
    ],
  },
});