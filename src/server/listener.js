const {EventType, getNow} = require('../util');

function bind(socket) {
  receiveMessage(socket);
}

function receiveMessage(socket) {
  socket.on(EventType.newMessage, data => {
    console.log('--receive--')
    socket.broadcast.emit(EventType.newMessage, {...data, deliver: getNow()});
  })
}

module.exports = {
  bind
}
