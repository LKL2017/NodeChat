const {EventType, getNow} = require('../util');

function bind(socket) {
  receiveMessage(socket);
  setNickname(socket);
}

function receiveMessage(socket) {
  socket.on(EventType.newMessage, data => {
    console.log('--receive--')
    socket.broadcast.emit(EventType.newMessage, {...data, deliver: getNow()});
  })
}

function setNickname(socket) {
  socket.on(EventType.newUser, data => {
    console.log(`set nick name -----`, data)
    socket.emit(EventType.newUser, data);
  });
}

module.exports = {
  bind
}
