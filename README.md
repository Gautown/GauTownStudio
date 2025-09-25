# GauTown Studio - Decap CMS 内容管理系统

这是一个使用 Decap CMS 和 Astro 构建的现代化内容管理系统。

## 快速开始

1. 安装依赖:
   ```bash
   npm install
   ```

2. 启动开发服务器:
   ```bash
   npm run dev
   ```

4. 访问网站: http://localhost:4321
5. 访问管理后台: http://localhost:4322/admin.html

## 项目结构

- `src/content/` - 内容文件 (Markdown)
- `src/pages/` - Astro 页面文件
- `public/admin/` - Decap CMS 配置
- `src/styles/` - 自定义样式文件
- `netlify.toml` - Netlify 部署配置

## 环境变量配置

使用 Decap CMS 需要配置身份验证，详细信息请参考 [Decap CMS 官方文档](https://decapcms.org/docs/authentication-backends/)。

## 内容管理

本系统包含以下内容集合:

1. **作品集** - 展示您的项目作品
2. **工具集** - 推荐的工具和软件
3. **仓库** - 代码仓库和资源
4. **笔记** - 个人笔记和文章
5. **关于** - 关于页面内容

## 搜索功能

网站现在包含全局搜索功能，可以通过以下方式使用：

1. 在网站头部的搜索框中输入关键词
2. 或者直接访问 `/search?q=关键词` 进行搜索
3. 搜索结果页面将显示所有匹配的内容，包括作品、工具、仓库、笔记等

## 自定义样式

项目包含以下自定义样式文件：

- `src/styles/tinacms-sidebar.css` - 固定TinaCMS侧边栏的样式

## 部署

本项目配置为在 Netlify 上部署。请确保在 Netlify 项目设置中配置以下环境变量:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`

构建项目请使用 `npm run build` 命令。

## 故障排除

如需更多帮助，请访问 [Decap CMS 官方文档](https://decapcms.org/docs/)。