const app = require('./app');
const { createServer } = require('http');

const port = process.env.NODE_LOCAL_PORT || 3000;

const server = createServer(app);

server.listen(port);