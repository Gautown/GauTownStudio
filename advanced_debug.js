// 高级调试脚本，用于诊断Decap CMS权限和媒体库问题

// 检查媒体库配置
function checkMediaLibrary() {
  console.log('=== 媒体库诊断 ===');
  
  // 检查CMS对象是否存在
  if (typeof window.CMS === 'undefined') {
    console.log('✗ CMS对象未定义');
    return;
  }
  
  console.log('✓ CMS对象已加载');
  
  // 检查媒体库注册
  try {
    const staticMediaLibrary = window.CMS.getMediaLibrary('static');
    console.log('静态媒体库对象:', staticMediaLibrary);
    
    if (staticMediaLibrary) {
      // 检查必需的方法
      const requiredMethods = ['init', 'show', 'hide'];
      const missingMethods = [];
      
      requiredMethods.forEach(method => {
        if (typeof staticMediaLibrary[method] === 'function') {
          console.log(`✓ 方法 ${method} 可用`);
        } else {
          console.log(`✗ 方法 ${method} 缺失`);
          missingMethods.push(method);
        }
      });
      
      if (missingMethods.length === 0) {
        console.log('✓ 静态媒体库配置正确');
        
        // 测试show方法的返回值
        try {
          const showResult = staticMediaLibrary.show({});
          console.log('Show方法返回值:', showResult);
          
          // 检查返回值是否包含必要的方法
          if (showResult && typeof showResult.then === 'function') {
            showResult.then(result => {
              console.log('Show Promise解析结果:', result);
              if (result) {
                const resultMethods = ['show', 'hide'];
                resultMethods.forEach(method => {
                  if (typeof result[method] === 'function') {
                    console.log(`✓ 返回对象包含方法 ${method}`);
                  } else {
                    console.log(`✗ 返回对象缺少方法 ${method}`);
                  }
                });
              }
            }).catch(error => {
              console.log('Show方法执行错误:', error);
            });
          }
        } catch (error) {
          console.log('测试show方法时出错:', error.message);
        }
      } else {
        console.log('✗ 静态媒体库缺少方法:', missingMethods);
      }
    } else {
      console.log('✗ 静态媒体库未注册');
    }
  } catch (error) {
    console.log('✗ 检查媒体库时出错:', error.message);
  }
}

// 检查用户权限
function checkUserPermissions() {
  console.log('=== 用户权限诊断 ===');
  
  const isLocal = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1' ||
                 window.location.hostname === '0.0.0.0' ||
                 new URLSearchParams(window.location.search).get('local') === 'true';
  
  console.log('本地模式:', isLocal);
  
  if (isLocal) {
    console.log('ℹ 本地开发模式 - 使用模拟用户');
    return;
  }
  
  // 检查Netlify Identity
  if (typeof window.netlifyIdentity === 'undefined') {
    console.log('✗ Netlify Identity未加载');
    return;
  }
  
  console.log('✓ Netlify Identity已加载');
  
  // 检查当前用户
  try {
    const user = window.netlifyIdentity.currentUser();
    if (user) {
      console.log('✓ 用户已登录:', {
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name,
        confirmed: user.confirmed_at
      });
      
      // 检查用户角色（如果有的话）
      if (user.app_metadata?.roles) {
        console.log('用户角色:', user.app_metadata.roles);
      }
      
      // 检查用户权限
      if (user.app_metadata?.authorization) {
        console.log('用户授权信息:', user.app_metadata.authorization);
      }
    } else {
      console.log('ℹ 用户未登录');
    }
  } catch (error) {
    console.log('✗ 检查用户时出错:', error.message);
  }
}

// 检查配置文件
function checkConfigFile() {
  console.log('=== 配置文件诊断 ===');
  
  fetch('/admin/config.yml')
    .then(response => {
      console.log('配置文件响应状态:', response.status);
      return response.text();
    })
    .then(configContent => {
      console.log('配置文件内容长度:', configContent.length);
      
      // 检查关键配置项
      if (configContent.includes('git-gateway')) {
        console.log('✓ 使用git-gateway后端');
      } else {
        console.log('✗ 未使用git-gateway后端');
      }
      
      if (configContent.includes('Gautown/GauTownStudio')) {
        console.log('✓ 仓库配置正确');
      } else {
        console.log('✗ 仓库配置可能不正确');
      }
      
      if (configContent.includes('media_library')) {
        console.log('✓ 包含媒体库配置');
      } else {
        console.log('✗ 缺少媒体库配置');
      }
      
      // 检查媒体库配置格式
      if (configContent.includes('media_library:') && configContent.includes('name: static')) {
        console.log('✓ 媒体库配置格式正确');
      } else if (configContent.includes('media_library:')) {
        console.log('⚠ 媒体库配置可能存在格式问题');
      }
    })
    .catch(error => {
      console.log('✗ 获取配置文件时出错:', error.message);
    });
}

// 检查网络连接
function checkNetwork() {
  console.log('=== 网络连接诊断 ===');
  
  const urlsToCheck = [
    `https://${window.location.hostname}/.netlify/identity`,
    'https://identity.netlify.com/v1/netlify-identity-widget.js',
    'https://unpkg.com/decap-cms@^3.1.2/dist/decap-cms.js'
  ];
  
  urlsToCheck.forEach(url => {
    fetch(url, { method: 'HEAD' })
      .then(response => {
        console.log(`✓ ${url} - 状态: ${response.status}`);
      })
      .catch(error => {
        console.log(`✗ ${url} - 错误: ${error.message}`);
      });
  });
}

// 运行所有检查
function runAllChecks() {
  console.log('=== Decap CMS高级诊断工具 ===');
  console.log('时间:', new Date().toISOString());
  console.log('主机名:', window.location.hostname);
  
  setTimeout(() => {
    checkMediaLibrary();
    console.log('');
    checkUserPermissions();
    console.log('');
    checkConfigFile();
    console.log('');
    checkNetwork();
    console.log('');
    console.log('=== 诊断完成 ===');
  }, 1000);
}

// 立即运行检查
runAllChecks();

// 导出函数以便手动调用
window.runDecapCMSDiagnostics = runAllChecks;