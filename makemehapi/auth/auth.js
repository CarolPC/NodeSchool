const Hapi = require('hapi');
const Auth = require('hapi-auth-basic');

const user = { name: 'hapi', password: 'auth' };
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

const validate = (request, username, password, callback) => {
    const isValid = username === user.name && password === user.password;

    return callback(null, isValid, { name: user.name });
};

server.register(Auth, (err) => {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: 'simple',
            handler: (request, reply) => {
                reply();
            }
        }
    });

    server.start((err) => {
        if (err) throw err;
    });
});
