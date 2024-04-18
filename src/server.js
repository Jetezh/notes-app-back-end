const Hapi = require('@hapi/hapi');
const Routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(Routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();