// 用于调试Netlify身份验证配置的脚本

const https = require('https');

// 检查Netlify Identity服务是否可访问
function checkNetlifyIdentityService(siteUrl) {
  const identityUrl = `https://${siteUrl}/.netlify/identity`;
  
  console.log(`检查Netlify Identity服务: ${identityUrl}`);
  
  https.get(identityUrl, (res) => {
    console.log(`Netlify Identity服务状态码: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✓ Netlify Identity服务可访问');
    } else {
      console.log('✗ Netlify Identity服务无法访问，请检查Netlify配置');
    }
  }).on('error', (err) => {
    console.log('✗ 无法访问Netlify Identity服务: ' + err.message);
  });
}

// 检查Netlify Identity Widget是否可加载
function checkNetlifyIdentityWidget() {
  const widgetUrl = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
  
  console.log(`检查Netlify Identity Widget: ${widgetUrl}`);
  
  https.get(widgetUrl, (res) => {
    console.log(`Netlify Identity Widget状态码: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✓ Netlify Identity Widget可加载');
    } else {
      console.log('✗ Netlify Identity Widget无法加载');
    }
  }).on('error', (err) => {
    console.log('✗ 无法加载Netlify Identity Widget: ' + err.message);
  });
}

// 检查站点和Admin页面
function checkSiteAndAdmin(siteUrl) {
  console.log(`检查站点: https://${siteUrl}`);
  
  https.get(`https://${siteUrl}`, (res) => {
    console.log(`站点状态码: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✓ 站点可正常访问');
      
      // 检查Admin页面
      https.get(`https://${siteUrl}/admin/`, (adminRes) => {
        console.log(`Admin页面状态码: ${adminRes.statusCode}`);
        
        if (adminRes.statusCode === 200) {
          console.log('✓ Admin页面可正常访问');
          console.log('\n请在浏览器中打开以下URL并检查:');
          console.log(`https://${siteUrl}/admin/`);
          console.log('- 是否显示Netlify Identity登录按钮');
          console.log('- 是否显示GitHub登录选项');
          console.log('- 浏览器控制台是否有错误信息');
        } else {
          console.log('✗ Admin页面无法访问，请检查部署配置');
        }
      }).on('error', (err) => {
        console.log('✗ 无法访问Admin页面: ' + err.message);
      });
      
    } else {
      console.log('✗ 站点无法访问，请检查Netlify部署状态');
    }
  }).on('error', (err) => {
    console.log('✗ 无法访问站点: ' + err.message);
  });
}

// 主函数
function main() {
  const siteUrl = 'gautown.netlify.app';
  
  console.log('Netlify Decap CMS身份验证调试工具');
  console.log('=====================================');
  
  checkSiteAndAdmin(siteUrl);
  checkNetlifyIdentityService(siteUrl);
  checkNetlifyIdentityWidget();
  
  console.log('\nNetlify配置检查清单:');
  console.log('1. 登录到Netlify控制台');
  console.log('2. 进入您的站点设置');
  console.log('3. 点击左侧的"Identity"选项');
  console.log('4. 确保Identity服务已启用');
  console.log('5. 在"External providers"部分启用GitHub');
  console.log('6. 在"Services"部分启用Git Gateway');
  console.log('7. 确保Registration首选项设置为"Invite only"或"Open"');
  console.log('8. 确保GitHub仓库名称正确设置为: Gautown/GauTownStudio');
}

// 运行主函数
main();