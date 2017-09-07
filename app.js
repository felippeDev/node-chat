const app = require('./config/server');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('--------------------------- \n' +
        '--> Server listen on: ' + port);
});

const socketConnection = socketIO.listen(server);

app.set('socketConnection', socketConnection);

socketConnection.on('connection', (socket) => {
    console.log('User has connected');

    socket.on('disconnect', () => {
        console.log('User has disconnected')
    });
});

// socketConnection.on('connection', (socket) => {
//     console.log('User has connected');

//     socket.on('disconnect', () => {
//         console.log('User has disconnected')
//     });
// });