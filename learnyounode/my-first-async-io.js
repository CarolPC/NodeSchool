const fs = require('fs');
const path = process.argv[2];

let stringList = fs.readFile(path, 'utf8', (err, data) => {

  const lines = data.split('\n');

  return console.log(lines.length-1);
});
