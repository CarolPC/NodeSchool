const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
    path: '/',
    encoding: 'base64json',
    ttl: 10,
    domain: 'localhost',
    isSameSite: false,
    isSecure: false,
    isHttpOnly: false
});

server.route({
    method: 'GET',
    path: '/set-cookie',
    handler: (request, reply) => {
        return reply({
            message : 'success'
        }).state('session', { key : 'makemehapi' });
    },
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});

server.route({
    method: 'GET',
    path: '/check-cookie',
    handler: (request, reply) => {
        let session = request.state.session;
        let result;

        if (session) {
            result = { user : 'hapi' };
        } else {
            result = Boom.unauthorized('Missing authentication');
        }

        reply(result);
    }
});

server.start((err) => {
    if (err) throw err;
});
