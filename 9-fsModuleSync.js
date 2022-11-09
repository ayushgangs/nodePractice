const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second);
// console.log(second);

writeFileSync('./content/third.txt',
`this is a new file ${first} ${second}`,
{flag:'a'})  // flag = 'a' is for adding new data to previous existing data
