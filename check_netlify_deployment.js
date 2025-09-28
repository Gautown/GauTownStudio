// 这个脚本需要Node.js环境运行
// 用于检查Netlify部署状态

const https = require('https');

// 您的Netlify站点URL
const siteUrl = 'gautown.netlify.app';

console.log('检查Netlify部署状态...');
console.log(`站点URL: https://${siteUrl}`);

// 检查站点是否可访问
https.get(`https://${siteUrl}`, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  
  if (res.statusCode === 200) {
    console.log('✓ 站点可正常访问');
    
    // 检查Admin页面
    https.get(`https://${siteUrl}/admin/`, (adminRes) => {
      console.log(`Admin页面状态码: ${adminRes.statusCode}`);
      
      if (adminRes.statusCode === 200) {
        console.log('✓ Admin页面可正常访问');
        console.log('请尝试在浏览器中访问 https://' + siteUrl + '/admin/ 并使用GitHub登录');
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
  console.log('请确保您的站点已正确部署到Netlify');
});

console.log('\n要检查Netlify上的身份验证配置，请执行以下步骤：');
console.log('1. 登录到Netlify控制台');
console.log('2. 进入您的站点设置');
console.log('3. 点击左侧的"Identity"选项');
console.log('4. 确保Identity服务已启用');
console.log('5. 在"External providers"部分启用GitHub');
console.log('6. 在"Services"部分启用Git Gateway');