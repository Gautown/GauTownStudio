# Netlify Identity和GitHub登录配置指南

本文档说明如何配置Netlify Identity服务以支持使用Netlify ID和GitHub ID登录Decap CMS。

## 概述

Decap CMS可以通过Netlify Identity服务支持多种登录方式，包括：
1. Netlify ID（通过邮箱注册）
2. GitHub ID（通过GitHub账户登录）

## 配置步骤

### 1. 启用Netlify Identity服务

1. 登录到Netlify控制台
2. 选择您的站点
3. 点击左侧菜单中的"Identity"
4. 点击"Enable Identity"按钮

### 2. 配置外部登录提供商

#### 启用GitHub登录

1. 在Identity页面中，点击"Settings and usage"
2. 在"External providers"部分，找到"GitHub"
3. 点击"Enable"按钮
4. 按照提示完成GitHub OAuth应用的配置

#### 启用Netlify注册（可选）

1. 在"Settings and usage"页面中
2. 在"Registration"部分，选择以下选项之一：
   - "Open"：任何人都可以注册
   - "Invite only"：只有被邀请的用户可以注册

### 3. 配置Git Gateway

1. 在Identity页面中，向下滚动到"Services"部分
2. 点击"Git Gateway"
3. 点击"Enable Git Gateway"按钮

### 4. 邀请用户（如果使用"Invite only"模式）

1. 在Identity页面中，点击"Invite users"按钮
2. 输入用户的邮箱地址
3. 点击"Send invite"按钮

## 技术配置说明

### config.yml配置

当前配置已正确设置：
```yaml
backend:
  name: git-gateway
  branch: main
  repo: Gautown/GauTownStudio
  auth_type: github
```

### admin.html配置

当前配置已正确加载Netlify Identity Widget：
```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

### Netlify.toml配置

当前配置已正确设置Content Security Policy以支持身份验证：
```toml
Content-Security-Policy = "frame-ancestors 'self' https://*.netlify.com https://*.netlify.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com https://*.netlify.app; object-src 'none'; connect-src 'self' https://*.netlify.com https://*.netlify.app https://api.github.com; font-src 'self' https://*.netlify.com https://*.netlify.app; img-src 'self' data: https://*.netlify.com https://*.netlify.app https://*.githubusercontent.com;"
```

## 登录流程

### 使用Netlify ID登录

1. 访问您的站点管理页面：https://yoursite.netlify.app/admin/
2. 点击"Login with Netlify Identity"按钮
3. 输入您的邮箱和密码
4. 完成登录

### 使用GitHub ID登录

1. 访问您的站点管理页面：https://yoursite.netlify.app/admin/
2. 点击"Login with GitHub"按钮
3. 授权应用访问您的GitHub账户
4. 完成登录

## 故障排除

### 常见问题

1. **登录按钮不显示**：
   - 检查Netlify Identity服务是否已启用
   - 检查浏览器控制台是否有错误信息
   - 确认Content Security Policy配置正确

2. **GitHub登录失败**：
   - 检查GitHub OAuth应用配置
   - 确认GitHub仓库名称正确
   - 检查Git Gateway是否已启用

3. **权限问题**：
   - 确认用户已被邀请（如果使用"Invite only"模式）
   - 检查用户角色和权限设置

### 调试步骤

1. 打开浏览器开发者工具（F12）
2. 访问管理页面
3. 检查Console选项卡中的错误信息
4. 检查Network选项卡中是否有失败的请求

## 安全建议

1. 使用"Invite only"注册模式以提高安全性
2. 定期检查和更新用户列表
3. 监控登录活动
4. 使用强密码策略

## 进一步帮助

如果遇到问题，请参考以下资源：
- [Netlify Identity文档](https://docs.netlify.com/visitor-access/identity/)
- [Decap CMS认证文档](https://decapcms.org/docs/authentication-backends/)
- [GitHub OAuth文档](https://docs.github.com/en/developers/apps/building-oauth-apps)