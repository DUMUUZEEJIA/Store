import index from './index.css';
import comm from './comm.css';
// require('./index.css');
let str = require('./a.js')
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