// eslint-disable-next-line import/order
const app = require('./expressConfig');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('../models/users');

io.on('connect', socket => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({
      id: socket.id,
      name,
      room,
    });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', {
      user: 'Loja',
      text: `Tire suas dúvidas com ${user.room}.`,
    });

    socket.broadcast.to(user.room).emit('message', {
      user: 'Loja',
      text: `${user.name} precisa de orientação`,
    });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  //* Responds to message
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', {
      user: user.name,
      text: message,
    });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'Loja',
        text: `${user.name} saiu do chat.`,
      });

      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

module.exports = server;
