import index from './index.css';
import comm from './comm.css';
import less from './index.less';
// import $ from "jquery";
// import $ from "expose-loader?$!jquery";


// require('./index.css');
// let str = require('./a.js')
console.log(index.toString())
// var flag = false;
// setInterval(function () {
//     if (flag) {
//       index.use();
//       comm.unuse();
//     } else {
//       index.unuse();
//       comm.use();
//     }
//     flag = !flag;
// }, 5000);
let arr = () => {
  console.log('箭头')
}
arr();

// @log
class ABC {
  a = 1;
}
var A = new ABC()
console.log(A.a)
console.log($)
console.log(window.$)
