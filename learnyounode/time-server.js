const net = require('net');
const port = process.argv[2];
const moment = require('moment');

const getCurrentDateString = () => {
  return moment().format('YYYY-MM-DD HH:mm')
}

const server = net.createServer(function (socket) {
  socket.end(getCurrentDateString() + "\n");
});

server.listen(port);