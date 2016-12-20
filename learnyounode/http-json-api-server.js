const http = require('http');
const parse = require('url').parse;
const moment = require('moment');
const url = require('url');
const port = process.argv[2];

const dateToString = (dateString) => {
  const date = new Date(dateString);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
};

const dateToTime = (dateTime) => {
  const date = new Date(dateTime).getTime();
  return { unixtime: date };
};

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const pathname = urlObj.pathname;
  const stringtime = urlObj.query.iso;
  let result = '';

  if (pathname === '/api/unixtime') {
     result = dateToTime(stringtime);
  }
  else if (pathname === '/api/parsetime') {
    result = dateToString(stringtime);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }

});
server.listen(port);