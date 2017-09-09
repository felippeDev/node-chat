const app = require(__dirname + '/config/server');
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

    socket.on('sendMessage', (data) => {
        socket.emit('receiveMessage', {
            nickname: data.nickname,
            message: data.message
        });

        socket.broadcast.emit('receiveMessage', {
            nickname: data.nickname,
            message: data.message
        });

        if(parseInt(data.userActive) === 0){
            socket.emit('updateUserList', {
                nickname: data.nickname
            });
        
            socket.broadcast.emit('updateUserList', {
                nickname: data.nickname
            });    
        };
    });
});