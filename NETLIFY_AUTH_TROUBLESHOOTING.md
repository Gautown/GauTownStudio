# Netlify Decap CMS身份验证故障排除指南

本文档提供了关于Netlify Decap CMS身份验证问题的详细故障排除步骤。

## 问题描述

远端登录页面没有出现Netlify Identity和GitHub登录按钮。

## 可能的原因和解决方案

### 1. Content Security Policy限制

**问题**: 浏览器的安全策略可能阻止了Netlify Identity Widget的加载。

**解决方案**: 我们已在netlify.toml中更新了Content Security Policy，增加了必要的权限：

```toml
Content-Security-Policy = "frame-ancestors 'self' https://*.netlify.com https://*.netlify.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com https://*.netlify.app; object-src 'none'; connect-src 'self' https://*.netlify.com https://*.netlify.app https://api.github.com; font-src 'self' https://*.netlify.com https://*.netlify.app; img-src 'self' data: https://*.netlify.com https://*.netlify.app https://*.githubusercontent.com;"
```

### 2. Netlify Identity服务未启用

**问题**: Netlify Identity服务可能未在Netlify控制台中启用。

**解决方案**:
1. 登录到Netlify控制台
2. 选择您的站点
3. 点击"Identity"选项
4. 点击"Enable Identity"按钮

### 3. GitHub外部提供商未配置

**问题**: GitHub可能未作为外部登录提供商配置。

**解决方案**:
1. 在Netlify控制台的Identity页面中
2. 点击"Settings and usage"
3. 在"External providers"部分，点击"GitHub"
4. 点击"Enable"按钮

### 4. Git Gateway未启用

**问题**: Git Gateway服务可能未启用。

**解决方案**:
1. 在Netlify控制台的Identity页面中
2. 向下滚动到"Services"部分
3. 点击"Git Gateway"
4. 点击"Enable Git Gateway"按钮

### 5. Registration设置问题

**问题**: Registration设置可能限制了用户登录。

**解决方案**:
1. 在Netlify控制台的Identity页面中
2. 点击"Settings and usage"
3. 在"Registration"部分，选择"Invite only"或"Open"

## 调试步骤

### 1. 浏览器开发者工具检查

1. 打开浏览器开发者工具(F12)
2. 访问您的Admin页面(https://yoursite.netlify.app/admin/)
3. 检查Console选项卡中是否有错误信息
4. 检查Network选项卡中是否有失败的请求

### 2. 运行调试脚本

运行我们提供的调试脚本检查服务状态：

```bash
node debug_netlify_auth.js
```

### 3. 手动检查服务

1. 检查Netlify Identity服务是否可访问：
   `https://yoursite.netlify.app/.netlify/identity`

2. 检查Netlify Identity Widget是否可加载：
   `https://identity.netlify.com/v1/netlify-identity-widget.js`

## 验证清单

在Netlify控制台中验证以下设置：

- [ ] Identity服务已启用
- [ ] GitHub外部提供商已启用
- [ ] Git Gateway服务已启用
- [ ] Registration设置为"Invite only"或"Open"
- [ ] GitHub仓库名称正确设置为`Gautown/GauTownStudio`
- [ ] 环境变量已正确配置

## 常见错误信息

### "Missing external media library 'static'"

**解决方案**: 确保在admin.html中正确注册了媒体库：

```javascript
CMS.registerMediaLibrary({
  name: 'static',
  init: () => Promise.resolve()
});
```

### "Error loading the CMS configuration"

**解决方案**: 检查config.yml文件格式是否正确，特别是repo字段：

```yaml
backend:
  name: git-gateway
  branch: main
  repo: Gautown/GauTownStudio
```

## 进一步帮助

如果以上步骤都无法解决问题，请：

1. 检查Netlify部署日志是否有错误
2. 联系Netlify支持团队
3. 在Decap CMS社区寻求帮助