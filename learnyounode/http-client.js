const http = require('http');
const path = process.argv[2];

http.get(path, (response) => {
  response.setEncoding('utf8');
  response.on('data', (d) => {
    console.log(d);
  });
})