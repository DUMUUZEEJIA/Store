var fs = require("fs");

// var data = fs.readFileSync('input.txt'); // 阻塞加载
fs.readFile('input.txt', (res, data) => {
  console.log(res)
  console.log(data.toString())
}); // 非阻塞加载

// console.log(data.toString());
console.log("程序执行结束!");