const fs = require('fs');

let stringList = fs.readFileSync(process.argv[2]).toString().split('\n');

let countLines = stringList.reduce((lines, x) => {

  return lines += 1;
} , 0);

console.log(countLines - 1);