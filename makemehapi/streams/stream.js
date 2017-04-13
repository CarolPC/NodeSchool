const Hapi = require('hapi');
const Fs = require('fs');
const Path = require('path');
const Rot13 = require('rot13-transform');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: responseStream
});

function responseStream(request, reply) {
    const file = Fs.createReadStream(Path.join(__dirname, 'input.txt'));
    reply(file.pipe(Rot13()));
}

server.start((err) => {
    if (err) throw err;
});
