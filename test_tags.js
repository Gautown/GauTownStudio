// 测试标签解析功能
console.log('=== 标签解析功能测试 ===');

// 模拟标签解析函数
function parseTags(tagsString) {
  if (!tagsString) return [];
  return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
}

// 测试数据
const testCases = [
  "Astro, Decap CMS, TailwindCSS, 前端开发, 静态站点, 博客, 教程",
  "技术, 教程, 前端",
  "React, Vue, Angular",
  "设计, UI, UX",
  "", // 空字符串
  "  单个标签  ", // 带空格的单个标签
  "标签1, 标签2 ,  标签3  ,标签4", // 不同空格情况
];

console.log('测试标签解析功能：');
testCases.forEach((testCase, index) => {
  const result = parseTags(testCase);
  console.log(`测试 ${index + 1}: "${testCase}"`);
  console.log(`结果: [${result.map(tag => `"${tag}"`).join(', ')}]`);
  console.log('---');
});

// 测试从frontmatter中读取标签
console.log('\n=== 模拟从frontmatter读取标签 ===');
const frontmatterExample = {
  title: "示例项目",
  tags: "Astro, Decap CMS, TailwindCSS, 前端开发"
};

console.log('Frontmatter数据:');
console.log(frontmatterExample);

const parsedTags = parseTags(frontmatterExample.tags);
console.log('解析后的标签数组:');
console.log(parsedTags);

console.log('\n=== 标签渲染测试 ===');
if (parsedTags && parsedTags.length > 0) {
  console.log('标签HTML渲染:');
  console.log('<div class="tags">');
  console.log('  <h3>标签：</h3>');
  console.log('  <ul>');
  parsedTags.forEach(tag => {
    console.log(`    <li class="tag">${tag}</li>`);
  });
  console.log('  </ul>');
  console.log('</div>');
} else {
  console.log('没有标签可显示');
}