module.exports = (io) => {

  io.on('connection', (socket) => {

    console.log('User connected');

    socket.on('driver-location', (data) => {

      io.emit('driver-update', data);

    });

    socket.on('ride-request', (data) => {

      io.emit('new-ride', data);

    });

    socket.on('disconnect', () => {

      console.log('User disconnected');

    });

  });

};
