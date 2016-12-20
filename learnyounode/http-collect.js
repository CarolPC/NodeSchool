const bufferList = require('bl');
const http = require('http');
const path = process.argv[2];

http.get(path, (response) => {
  response.setEncoding('utf8');

  response.pipe(bufferList((err, data) => {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
})