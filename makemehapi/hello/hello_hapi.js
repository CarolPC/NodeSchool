const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2]) || 8080
});

server.route({ path: '/', method: 'GET', handler: hello});

function hello(request, reply) {
    reply('Hello hapi');
};

server.start((err) => {
    if (err) throw err;
});
