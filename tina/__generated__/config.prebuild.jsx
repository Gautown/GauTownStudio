// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.GITHUB_BRANCH || "main";
var clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "";
var token = process.env.TINA_TOKEN || "";
var config_default = defineConfig({
  // 启用本地模式
  local: true,
  // 禁用云认证
  enabled: true,
  branch,
  clientId,
  token,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "portfolio",
        label: "\u4F5C\u54C1",
        path: "src/content/portfolio",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6807\u9898",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "\u63CF\u8FF0"
          },
          {
            type: "image",
            name: "thumbnail",
            label: "\u7F29\u7565\u56FE"
          },
          {
            type: "datetime",
            name: "date",
            label: "\u53D1\u5E03\u65E5\u671F"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u5185\u5BB9",
            isBody: true
          }
        ]
      },
      {
        name: "tools",
        label: "\u5DE5\u5177",
        path: "src/content/tools",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6807\u9898",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "\u63CF\u8FF0"
          },
          {
            type: "image",
            name: "thumbnail",
            label: "\u7F29\u7565\u56FE"
          },
          {
            type: "datetime",
            name: "date",
            label: "\u53D1\u5E03\u65E5\u671F"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u5185\u5BB9",
            isBody: true
          }
        ]
      },
      {
        name: "warehouse",
        label: "\u4ED3\u5E93",
        path: "src/content/warehouse",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6807\u9898",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "\u63CF\u8FF0"
          },
          {
            type: "image",
            name: "thumbnail",
            label: "\u7F29\u7565\u56FE"
          },
          {
            type: "datetime",
            name: "date",
            label: "\u53D1\u5E03\u65E5\u671F"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u5185\u5BB9",
            isBody: true
          }
        ]
      },
      {
        name: "notes",
        label: "\u7B14\u8BB0",
        path: "src/content/notes",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6807\u9898",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u5185\u5BB9",
            isBody: true
          }
        ]
      },
      {
        name: "about",
        label: "\u5173\u4E8E",
        path: "src/content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6807\u9898",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "\u63CF\u8FF0"
          },
          {
            type: "datetime",
            name: "date",
            label: "\u53D1\u5E03\u65E5\u671F"
          },
          {
            type: "rich-text",
            name: "body",
            label: "\u5185\u5BB9",
            isBody: true
          }
        ]
      },
      // 网站设置作为独立的菜单项
      {
        name: "site_config",
        label: "\u7F51\u7AD9\u8BBE\u7F6E",
        path: "src/content/site-config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u7F51\u7AD9\u6807\u9898",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "subtitle",
            label: "\u526F\u6807\u9898"
          },
          {
            type: "string",
            name: "keywords",
            label: "\u5173\u952E\u5B57"
          },
          {
            type: "string",
            name: "description",
            label: "\u5173\u952E\u5B57\u63CF\u8FF0"
          },
          {
            type: "string",
            name: "logo",
            label: "\u5934\u90E8Logo"
          },
          {
            type: "string",
            name: "siteName",
            label: "\u7F51\u7AD9\u540D\u79F0"
          },
          {
            type: "string",
            name: "copyright",
            label: "\u7248\u6743\u4FE1\u606F"
          },
          {
            type: "object",
            name: "navigation",
            label: "\u5BFC\u822A\u83DC\u5355",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "\u5BFC\u822A\u9879" })
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "\u83DC\u5355\u540D\u79F0"
              },
              {
                type: "string",
                name: "url",
                label: "\u94FE\u63A5\u5730\u5740"
              }
            ]
          },
          {
            type: "object",
            name: "friendLinks",
            label: "\u53CB\u60C5\u94FE\u63A5",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "\u53CB\u60C5\u94FE\u63A5" })
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "\u94FE\u63A5\u540D\u79F0"
              },
              {
                type: "string",
                name: "url",
                label: "\u94FE\u63A5\u5730\u5740"
              },
              {
                type: "string",
                name: "description",
                label: "\u94FE\u63A5\u63CF\u8FF0"
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
