const swaggerAutogen = require('swagger-autogen')({openapi: '3.1.0'});

const doc = {
    info: {
        version: "1.0.0",
        title: "MVC Example",
        description: "Mostrando como usar mvc"
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./');
});