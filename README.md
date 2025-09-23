# GauTown Studio - TinaCMS 内容管理系统

这是一个使用 TinaCMS 和 Astro 构建的现代化内容管理系统。

## 快速开始

1. 安装依赖:
   ```bash
   npm install
   ```

2. 配置环境变量:
   - 复制 `.env.example` 到 `.env.local`
   - 从 [Tina Cloud](https://app.tina.io/projects) 获取并填写您的 TinaCMS 凭据
   ```bash
   cp .env.example .env.local
   # 编辑 .env.local 文件，填入您的凭据
   ```

3. 启动开发服务器:
   ```bash
   npm run tina:dev
   ```

4. 访问网站: http://localhost:4321
5. 访问管理后台: http://localhost:4321/admin/index.html

## 项目结构

- `src/content/` - 内容文件 (Markdown)
- `src/pages/` - Astro 页面文件
- `tina/` - TinaCMS 配置
- `src/styles/` - 自定义样式文件
- `netlify.toml` - Netlify 部署配置

## 环境变量配置

您需要设置以下环境变量:

- `NEXT_PUBLIC_TINA_CLIENT_ID` - 您的 TinaCMS 客户端 ID
- `TINA_TOKEN` - 您的 TinaCMS token

本地开发时，可以在 `.env.local` 文件中设置这些变量。

## 内容管理

本系统包含以下内容集合:

1. **作品集** - 展示您的项目作品
2. **工具集** - 推荐的工具和软件
3. **仓库** - 代码仓库和资源
4. **笔记** - 个人笔记和文章
5. **关于** - 关于页面内容

## 自定义样式

项目包含以下自定义样式文件：

- `src/styles/tinacms-sidebar.css` - 固定TinaCMS侧边栏的样式

## 部署

本项目配置为在 Netlify 上部署。请确保在 Netlify 项目设置中配置以下环境变量:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`

构建项目请使用 `npm run tina:build` 命令。

## 故障排除

如果遇到 "Failed loading TinaCMS assets" 错误:

1. 确保已设置所需的环境变量
2. 检查您的 TinaCMS 凭据是否正确
3. 确保使用 `npm run tina:dev` 而不是 `npm run dev` 进行开发
4. 清除缓存并重试:
   ```bash
   # Windows 用户
   rmdir /s node_modules\.cache

   # Mac/Linux 用户
   rm -rf node_modules/.cache
   ```

生产环境访问管理后台:
- 地址: https://your-domain.com/admin/index.html

如需更多帮助，请访问 [TinaCMS 官方文档](https://tina.io/docs/)。