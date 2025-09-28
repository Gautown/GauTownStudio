// 用于调试Netlify Identity Widget加载问题的脚本

// 检查Netlify Identity Widget是否正确加载
function checkNetlifyIdentityWidget() {
  console.log('检查Netlify Identity Widget加载状态...');
  
  // 检查window.netlifyIdentity对象是否存在
  if (typeof window !== 'undefined' && window.netlifyIdentity) {
    console.log('✓ Netlify Identity对象已加载');
    console.log('Netlify Identity对象:', window.netlifyIdentity);
    
    // 检查关键方法是否存在
    const requiredMethods = ['init', 'on', 'open', 'close', 'currentUser'];
    const missingMethods = [];
    
    requiredMethods.forEach(method => {
      if (typeof window.netlifyIdentity[method] === 'function') {
        console.log(`✓ 方法 ${method} 可用`);
      } else {
        console.log(`✗ 方法 ${method} 缺失`);
        missingMethods.push(method);
      }
    });
    
    if (missingMethods.length === 0) {
      console.log('✓ 所有必需的Netlify Identity方法都可用');
    } else {
      console.log('✗ 缺失以下方法:', missingMethods);
    }
  } else {
    console.log('✗ Netlify Identity对象未加载');
    console.log('当前window对象:', window);
  }
  
  // 检查是否在本地开发模式下
  const isLocal = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1' ||
                 window.location.hostname === '0.0.0.0' ||
                 new URLSearchParams(window.location.search).get('local') === 'true';
  
  console.log('本地开发模式:', isLocal);
  
  // 检查脚本是否应该加载
  if (!isLocal) {
    console.log('✓ 应该加载Netlify Identity Widget');
    
    // 检查脚本标签是否存在
    const scripts = document.querySelectorAll('script');
    let identityScriptFound = false;
    
    scripts.forEach(script => {
      if (script.src && script.src.includes('netlify-identity-widget')) {
        console.log('✓ 找到Netlify Identity Widget脚本标签:', script.src);
        identityScriptFound = true;
      }
    });
    
    if (!identityScriptFound) {
      console.log('✗ 未找到Netlify Identity Widget脚本标签');
    }
  } else {
    console.log('ℹ 本地开发模式下不加载Netlify Identity Widget');
  }
}

// 检查Decap CMS初始化状态
function checkDecapCMS() {
  console.log('检查Decap CMS初始化状态...');
  
  if (typeof window !== 'undefined' && window.CMS) {
    console.log('✓ Decap CMS对象已加载');
    console.log('Decap CMS版本:', window.CMS.version);
  } else {
    console.log('✗ Decap CMS对象未加载');
  }
  
  // 检查媒体库注册
  if (window.CMS && window.CMS.getMediaLibrary) {
    try {
      const mediaLibrary = window.CMS.getMediaLibrary('static');
      if (mediaLibrary) {
        console.log('✓ 静态媒体库已注册');
      } else {
        console.log('✗ 静态媒体库未注册');
      }
    } catch (error) {
      console.log('✗ 检查媒体库时出错:', error.message);
    }
  }
}

// 运行检查
console.log('=== Netlify Identity Widget调试信息 ===');
checkNetlifyIdentityWidget();
console.log('');
checkDecapCMS();
console.log('=== 调试完成 ===');

// 如果在生产环境中且Netlify Identity未加载，尝试手动加载
function tryManualLoad() {
  const isLocal = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1' ||
                 window.location.hostname === '0.0.0.0' ||
                 new URLSearchParams(window.location.search).get('local') === 'true';
  
  if (!isLocal && !window.netlifyIdentity) {
    console.log('尝试手动加载Netlify Identity Widget...');
    
    const script = document.createElement('script');
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    script.onload = () => {
      console.log('✓ Netlify Identity Widget手动加载成功');
      if (window.netlifyIdentity) {
        window.netlifyIdentity.init();
      }
    };
    script.onerror = () => {
      console.log('✗ Netlify Identity Widget手动加载失败');
    };
    
    document.head.appendChild(script);
  }
}

// 延迟执行手动加载检查
setTimeout(tryManualLoad, 2000);