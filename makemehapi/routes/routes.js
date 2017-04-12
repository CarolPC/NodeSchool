const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({ path: '/{name}', method: 'GET', handler: hello});

function hello(request, reply) {
    reply(`Hello ${encodeURIComponent(request.params.name)}`);
};

server.start((err) => {
    if (err) throw err;
});
