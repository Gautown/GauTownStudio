# Netlify配置操作指南

本指南将帮助您在Netlify上完成必要的配置，以使Decap CMS能够通过GitHub登录正常工作。

## 任务1：检查Netlify上的Identity服务是否已启用

1. 登录到您的Netlify账户
2. 选择您的站点（gautown.netlify.app 或类似名称）
3. 在左侧导航菜单中点击"Identity"
4. 如果看到"Enable Identity"按钮，说明Identity服务尚未启用，请点击该按钮启用
5. 如果已经看到Identity设置界面，说明服务已启用

## 任务2：在Netlify上配置GitHub作为外部登录提供商

1. 在Identity页面中，向下滚动到"External providers"部分
2. 点击"Settings and usage"旁边的"Edit settings"
3. 在"External providers"部分，找到"GitHub"
4. 点击GitHub旁边的"Enable"按钮
5. 如果是第一次配置，可能需要：
   - 点击"Configure provider"链接
   - 按照提示在GitHub上创建OAuth应用
   - 获取Client ID和Secret并填入Netlify

## 任务3：启用Netlify上的Git Gateway服务

1. 在同一Identity页面中，向下滚动到"Services"部分
2. 找到"Git Gateway"选项
3. 点击"Enable Git Gateway"
4. 如果提示需要授权，按照提示完成GitHub授权

## 任务4：验证环境变量配置是否正确

1. 在Netlify站点控制台中，点击左侧导航菜单的"Site settings"
2. 点击"Environment variables"选项
3. 检查是否存在以下变量：
   - `NETLIFY_IDENTITY_URL` = `https://your-site-url.netlify.app/.netlify/identity`
4. 如果不存在，请点击"Add a variable"添加

## 任务5：测试生产环境下的登录功能

1. 确保您已将最新的代码推送到GitHub仓库
2. 等待Netlify自动部署完成或手动触发部署
3. 部署完成后，访问您的站点URL加上/admin路径（例如：https://gautown.netlify.app/admin/）
4. 点击"Login with GitHub"按钮
5. 使用您的GitHub账户登录
6. 登录成功后，您应该能够访问Decap CMS管理界面

## 故障排除

如果在配置过程中遇到问题：

1. 检查浏览器控制台是否有错误信息
2. 确认所有Netlify服务都已正确启用
3. 检查GitHub OAuth应用配置是否正确
4. 确认环境变量设置无误
5. 查看Netlify部署日志是否有错误

## 需要帮助？

如果您在配置过程中遇到困难，请参考NETLIFY_GITHUB_AUTH.md文件或联系Netlify支持团队。