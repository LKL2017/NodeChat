const PORT = 3000;
const socket = require('socket.io-client')(`http://localhost:${PORT}`);

const EventType = {
  newUser: 'new user',
  newMessage: 'new message',
  welcome: 'welcome',
};

const MessageType = {
  self: 1 << 1,
  other: 2 << 1,
  welcome: 3 << 1,
  notice: 4 << 1
};

function getNow() {
  let d = new Date();
  return `${d.getHours()}:${d.getMinutes()}`;
}

module.exports = {
  EventType,
  MessageType,
  socket,
  getNow
};
