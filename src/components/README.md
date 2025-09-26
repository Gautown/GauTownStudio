# 组件使用说明

## Sidebar 右侧边栏组件

右侧边栏组件包含三个部分：随机推荐、最新文章和热门标签。

### 使用方法

```astro
---
import Sidebar from '../components/Sidebar.astro';

// 随机推荐数据
const randomRecommendations = [
  { title: "推荐作品1", url: "/portfolio/recommend1", type: "作品" },
  { title: "推荐工具1", url: "/tools/recommend1", type: "工具" },
  { title: "推荐笔记1", url: "/notes/recommend1", type: "笔记" },
];

// 最新文章数据
const latestArticles = [
  { title: "最新作品1", url: "/portfolio/latest1", date: "2023-06-01" },
  { title: "最新工具1", url: "/tools/latest1", date: "2023-05-28" },
  { title: "最新笔记1", url: "/notes/latest1", date: "2023-05-25" },
];

// 热门标签数据
const popularTags = [
  { name: "前端", count: 15, url: "/tags/frontend" },
  { name: "设计", count: 12, url: "/tags/design" },
  { name: "React", count: 10, url: "/tags/react" },
  { name: "Node.js", count: 8, url: "/tags/nodejs" },
];
---

<Sidebar 
  randomRecommendations={randomRecommendations}
  latestArticles={latestArticles}
  popularTags={popularTags}
/>
```

### 属性说明

| 属性名 | 类型 | 必填 | 说明 |
|-------|------|------|------|
| randomRecommendations | Array | 否 | 随机推荐内容列表 |
| latestArticles | Array | 否 | 最新文章列表 |
| popularTags | Array | 否 | 热门标签列表 |

## ContentLayout 正文页布局组件

正文页布局组件包含头部导航、面包屑导航，正文内容占页面的3/4宽度，右侧边栏占页面的1/4宽度。

### 使用方法

```astro
---
import ContentLayout from '../layouts/ContentLayout.astro';

// 面包屑导航数据
const breadcrumbLinks = [
  { href: '/', label: '首页' },
  { href: '/portfolio', label: '作品集' },
  { href: '#', label: '正文' }
];

// 侧边栏数据（同Sidebar组件）
const randomRecommendations = [...];
const latestArticles = [...];
const popularTags = [...];
---

<ContentLayout 
  title="页面标题"
  description="页面描述"
  breadcrumbLinks={breadcrumbLinks}
  randomRecommendations={randomRecommendations}
  latestArticles={latestArticles}
  popularTags={popularTags}
>
  <!-- 正文内容 -->
  <article>
    <h1>文章标题</h1>
    <div>文章内容</div>
  </article>
</ContentLayout>
```

### 属性说明

| 属性名 | 类型 | 必填 | 说明 |
|-------|------|------|------|
| title | String | 否 | 页面标题 |
| description | String | 否 | 页面描述 |
| breadcrumbLinks | Array | 否 | 面包屑导航链接列表 |
| randomRecommendations | Array | 否 | 随机推荐内容列表 |
| latestArticles | Array | 否 | 最新文章列表 |
| popularTags | Array | 否 | 热门标签列表 |

## 响应式设计

两个组件都支持响应式设计：
- 在桌面端，正文内容占3/4宽度，右侧边栏占1/4宽度
- 在移动端，正文内容和右侧边栏都占100%宽度，垂直排列