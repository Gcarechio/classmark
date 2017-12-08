// Get dependencies
const app = require('./server/config/express');
const path = require('path');
const http = require('http');
require('./server/config/database')('localhost', 'root', 'pcs3616');

// Get port from environment and store in Express
const port = process.env.PORT || '8103';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));