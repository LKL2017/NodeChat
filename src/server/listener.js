const {EventType, getNow} = require('../util');

function bind(socket) {
  receiveMessage(socket);
  setNickname(socket);
  welcome(socket);
}


function receiveMessage(socket) {
  socket.on(EventType.newMessage, data => {
    console.log('--receive--')
    socket.broadcast.emit(EventType.newMessage, {...data, deliver: getNow()});
  })
}

function setNickname(socket) {
  socket.on(EventType.newUser, data => {
    console.log(`set nick name -----`, data);
    // socket.broadcast.emit(EventType.welcome, data);
    socket.emit(EventType.newUser, data);
  });
}

/////为什么不能在一个on中emit多个呢 server/client
function welcome(socket) {
  socket.on(EventType.welcome, data => {
    console.log(`broadcast welcome event`)
    socket.broadcast.emit(EventType.welcome, data);
  })
}

module.exports = {
  bind
}
