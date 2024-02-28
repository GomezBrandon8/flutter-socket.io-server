const express = require('express');
const http = require('http'); // Cambiado a http
const path = require('path');
require('dotenv').config();

// APP DE EXPRESS
const app = express();

// SERVIDOR HTTP
const server = http.createServer(app); // Utilizando el mismo servidor para Express y Socket.IO
module.exports.io = require('socket.io')(server);
require('./sokets/socket');

// PATH PUBLICO
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor Corriendo en puerto!!', process.env.PORT);
});
