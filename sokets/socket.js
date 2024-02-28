const {io} = require('../index');

// MENSAJES DE SOCKETS
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    });
    client.on('mensaje', (paylod) => {
        console.log('Mensaje!!', paylod);
        io.emit('mensaje', { admin: 'Nuevo Mensaje' });
    });
});