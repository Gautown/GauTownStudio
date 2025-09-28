// 用于调试Decap CMS权限问题的脚本

// 检查当前用户权限状态
function checkUserPermissions() {
  console.log('=== Decap CMS权限检查 ===');
  
  // 检查是否在本地开发模式下
  const isLocal = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1' ||
                 window.location.hostname === '0.0.0.0' ||
                 new URLSearchParams(window.location.search).get('local') === 'true';
  
  console.log('本地开发模式:', isLocal);
  
  // 检查Netlify Identity状态
  if (!isLocal) {
    console.log('检查Netlify Identity状态...');
    
    if (window.netlifyIdentity) {
      console.log('✓ Netlify Identity已加载');
      
      const user = window.netlifyIdentity.currentUser();
      if (user) {
        console.log('✓ 当前用户已登录:', {
          email: user.email,
          name: user.user_metadata?.full_name || user.user_metadata?.name,
          id: user.id
        });
      } else {
        console.log('ℹ 当前用户未登录');
      }
    } else {
      console.log('✗ Netlify Identity未加载');
    }
  } else {
    console.log('本地开发模式 - 使用模拟用户');
    // 检查是否设置了本地用户
    if (window.CMS) {
      // 这里我们无法直接访问CMS的用户状态，但可以检查CMS是否已初始化
      console.log('CMS对象可用:', typeof window.CMS !== 'undefined');
    }
  }
  
  // 检查GitHub仓库访问权限
  console.log('检查配置文件中的仓库信息...');
  fetch('/admin/config.yml')
    .then(response => response.text())
    .then(configContent => {
      console.log('配置文件内容:');
      console.log(configContent);
      
      // 检查是否包含repo字段
      if (configContent.includes('repo:')) {
        const repoMatch = configContent.match(/repo:\s*([^\n]+)/);
        if (repoMatch && repoMatch[1]) {
          console.log('✓ 找到仓库配置:', repoMatch[1].trim());
        }
      } else {
        console.log('✗ 未找到仓库配置');
      }
    })
    .catch(error => {
      console.log('获取配置文件时出错:', error);
    });
  
  // 检查Netlify Identity服务是否可访问
  const identityUrl = `https://${window.location.hostname}/.netlify/identity`;
  console.log('检查Netlify Identity服务:', identityUrl);
  
  fetch(identityUrl)
    .then(response => {
      console.log('Netlify Identity服务响应状态:', response.status);
      if (response.status === 200) {
        console.log('✓ Netlify Identity服务可访问');
      } else {
        console.log('✗ Netlify Identity服务不可访问，状态码:', response.status);
      }
    })
    .catch(error => {
      console.log('✗ 检查Netlify Identity服务时出错:', error.message);
    });
}

// 检查可能的解决方案
function checkSolutions() {
  console.log('=== 可能的解决方案 ===');
  
  console.log('1. 确保Netlify Identity服务已启用:');
  console.log('   - 登录Netlify控制台');
  console.log('   - 进入您的站点设置');
  console.log('   - 点击"Identity"选项');
  console.log('   - 确保Identity服务已启用');
  
  console.log('\n2. 确保Git Gateway已启用:');
  console.log('   - 在Netlify控制台的Identity页面中');
  console.log('   - 向下滚动到"Services"部分');
  console.log('   - 确保"Git Gateway"已启用');
  
  console.log('\n3. 确保您已被邀请:');
  console.log('   - 在Netlify控制台的Identity页面中');
  console.log('   - 点击"Invite users"按钮');
  console.log('   - 确保您的邮箱已在受邀用户列表中');
  
  console.log('\n4. 检查仓库配置:');
  console.log('   - 确保config.yml中的repo字段正确设置为: Gautown/GauTownStudio');
  
  console.log('\n5. 检查环境变量:');
  console.log('   - 确保Netlify中设置了必要的环境变量');
}

// 运行检查
setTimeout(() => {
  checkUserPermissions();
  console.log('');
  checkSolutions();
}, 1000);