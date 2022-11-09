const { dirname } = require('path');
const path = require('path')  //built-in module

// console.log(path.sep);  //path separator, it is platform dependent

const filePath = path.join('content','subfolder','test.txt')

// console.log(filePath);

const baseName = path.basename(filePath)
// console.log(baseName);

//absolute file path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);