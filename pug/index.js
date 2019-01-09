const pug = require('pug');
// console.log(pug)

// const compiledFunction = pug.compileFile('template.pug');

// // 渲染一组数据
// console.log(compiledFunction({
//   name: '李莉'
// }));

console.log(pug.renderFile('template.pug', {
  name: 'Timothy'
}));