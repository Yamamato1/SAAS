require('dotenv').config();

const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');

const socketHandler = require('./sockets/socketHandler');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

socketHandler(io);

server.listen(process.env.PORT, () => {
  console.log(`SomTech backend running on port ${process.env.PORT}`);
});
