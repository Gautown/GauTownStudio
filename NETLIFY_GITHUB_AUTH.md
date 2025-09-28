# Netlify GitHub 登录配置指南

本文档说明如何在Netlify上配置GitHub登录以使Decap CMS正常工作。

## 1. 在Netlify上启用Identity服务

1. 登录到您的Netlify账户
2. 进入您的站点设置
3. 点击左侧菜单中的"Identity"选项
4. 点击"Enable Identity"按钮

## 2. 配置GitHub登录提供商

1. 在Identity页面中，找到"External Providers"部分
2. 点击"Settings and Providers"下的"Edit settings"
3. 在"External Providers"部分，点击"GitHub"旁边的"Enable"
4. 按照提示完成GitHub OAuth应用的配置

## 3. 配置Git Gateway

1. 在Identity页面中，向下滚动到"Services"部分
2. 找到"Git Gateway"并点击"Enable Git Gateway"
3. 选择您的GitHub仓库并授权访问

## 4. 环境变量配置

确保您的Netlify站点设置了以下环境变量：

```
# Netlify Identity URL (根据您的实际站点URL调整)
NETLIFY_IDENTITY_URL=https://your-site.netlify.app/.netlify/identity

# 如果使用GitHub Token (可选)
GITHUB_TOKEN=your_github_token_here
```

## 5. 本地开发与生产环境的区别

- **本地开发**: 使用`config.local.yml`配置文件，不依赖Netlify服务
- **生产环境**: 使用`config.yml`配置文件，依赖Netlify Identity和Git Gateway

## 6. 故障排除

如果仍然无法登录，请检查：

1. 浏览器控制台是否有错误信息
2. Netlify Identity服务是否已正确启用
3. Git Gateway是否已正确配置
4. 环境变量是否已正确设置