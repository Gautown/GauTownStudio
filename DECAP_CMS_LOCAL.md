# Decap CMS 本地开发模式使用指南

## 概述

本项目支持Decap CMS的本地开发模式，允许开发者在本地环境中直接编辑内容文件，而无需连接到远程Git Gateway。

## 配置文件说明

### 1. 生产环境配置
- **文件**: `/public/admin/config.yml`
- **后端**: Git Gateway (通过Netlify Identity认证)
- **用途**: 生产环境和在线编辑

### 2. 本地开发配置
- **文件**: `/public/admin/config.local.yml`
- **后端**: Local (直接操作本地文件)
- **用途**: 本地开发和内容编辑

## 使用方法

### 启动本地开发模式

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 访问Decap CMS管理界面：
   - 打开浏览器访问: http://localhost:4321/admin/
   - 系统会自动检测本地环境并使用本地配置

3. 或者手动指定本地模式：
   - 访问: http://localhost:4321/admin/?local=true

### 生产环境模式

1. 部署到Netlify后，访问管理界面将自动使用生产配置
2. 需要配置Netlify Identity和Git Gateway

## 本地开发优势

1. **无需网络连接**: 可以完全离线编辑内容
2. **即时保存**: 内容直接保存到本地文件系统
3. **快速预览**: 无需等待Git提交和部署
4. **安全开发**: 不影响生产环境内容

## 注意事项

1. 本地开发模式仅在`localhost`、`127.0.0.1`或`0.0.0.0`环境下自动启用
2. 生产环境会自动使用Git Gateway后端
3. 本地编辑的内容需要手动提交到Git仓库
4. 本地模式下不支持用户认证（所有操作都视为已认证）

## 配置自定义

如需自定义本地开发配置，请编辑`/public/admin/config.local.yml`文件。