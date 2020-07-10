const {EventType, getNow, RoomPrefix} = require('../util');

function bind(socket) {
  receiveMessage(socket);
  setNickname(socket);
  welcome(socket);
  switchChannel(socket);
}


function receiveMessage(socket) {
  socket.on(EventType.newMessage, data => {
    console.log('--receive-- my room', socket.rooms)
    let room = getRoomId(socket.rooms);
    console.log('--->>>',room)
    if (room) {
      console.log('send to room')
      socket.to(room).emit(EventType.newMessage, {...data, deliver: getNow()});
    } else {
      socket.broadcast.emit(EventType.newMessage, {...data, deliver: getNow()});
    }
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

function switchChannel(socket) {
  socket.on(EventType.switchChannel, data => {
    console.log('切换频道', data)
    socket.join(data.room);
  })
}

function getRoomId(rooms) {
  let key = Object.keys(rooms);
  let find = key.filter(x => x.startsWith(RoomPrefix));
  return find.length ? find[0] : null;
}

module.exports = {
  bind
}
