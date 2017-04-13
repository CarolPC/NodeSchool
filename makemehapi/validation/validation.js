const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/chickens/{breed}',
    method: 'GET',
    handler: myHandler,
    config: {
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

function myHandler(request, reply) {
    reply('Parameters' + request.params.breed);
}

server.start((err) => {
    if (err) throw err;
});
