# Netlify Decap CMS部署问题修复说明

本文档说明了已修复的Decap CMS部署在Netlify上的问题以及解决方案。

## 发现的问题

1. **缺少repo字段配置**：在config.yml文件中，Git Gateway后端缺少必要的repo字段配置，这会导致登录失败。
2. **环境变量不完整**：.env.local文件中缺少GitHub仓库名称配置。

## 已实施的修复

### 1. 修复config.yml配置文件

在public/admin/config.yml文件中添加了repo字段：
```yaml
backend:
  name: git-gateway
  branch: main
  repo: Gautown/GauTownStudio  # 添加此行
```

### 2. 更新环境变量配置

在.env.local文件中添加了GitHub仓库名称环境变量：
```bash
DECAP_CMS_GITHUB_REPO=Gautown/GauTownStudio
```

### 3. 验证其他配置

确认以下配置正确无误：
- Netlify Identity Widget脚本正确加载
- 媒体库已正确注册
- 本地和生产环境配置文件分离
- Content Security Policy配置正确

## 验证步骤

1. 重新构建项目：
   ```bash
   npm run build
   ```

2. 检查dist/admin目录中的文件是否正确生成

3. 部署到Netlify后，访问/admin页面测试登录功能

## 后续步骤

1. 确保Netlify上的Identity服务已启用
2. 确保Git Gateway服务已启用
3. 确保GitHub OAuth应用配置正确
4. 测试生产环境下的登录功能

## 常见问题排查

如果仍然遇到登录问题，请检查：

1. Netlify Identity服务是否已启用
2. Git Gateway是否已正确配置
3. GitHub仓库名称是否正确（Gautown/GauTownStudio）
4. 浏览器控制台是否有错误信息
5. Netlify部署日志是否有错误