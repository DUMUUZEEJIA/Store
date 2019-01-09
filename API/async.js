const fs = require('fs');
const readFile = function name(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, res) {
      if (err) reject(err)
      reject(res)
      
    })
    
    
  })
}
readFile('test.txt').then(function (res) {
  console.log(res)
})