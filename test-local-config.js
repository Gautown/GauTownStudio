// 测试本地配置的简单脚本
console.log('Testing local configuration...');

// 检查是否在本地环境
const isLocal = window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1' ||
               window.location.hostname === '0.0.0.0';

console.log('Is local environment:', isLocal);

// 检查配置文件URL
const configUrl = isLocal ? '/admin/config.local.yml' : '/admin/config.yml';
console.log('Config URL:', configUrl);

// 检查Netlify Identity是否存在
console.log('Netlify Identity available:', typeof window.netlifyIdentity !== 'undefined');

// 检查Decap CMS是否存在
console.log('Decap CMS available:', typeof window.CMS !== 'undefined');