const URL = 'http://localhost';
const PORT = 3000;
const RoomPrefix = 'Chat_Room_';

const EventType = {
  newUser: 'new user',
  newMessage: 'new message',
  welcome: 'welcome',
  switchChannel: 'switchChannel'
};

const MessageType = {
  self: 1 << 1,
  other: 1 << 2,
  welcome: 1 << 3,
  notice: 1 << 4
};

function getNow() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  m = m.length === 1 ? '0' + m : m;
  return `${h}:${m}`;
}

module.exports = {
  EventType,
  MessageType,
  // socket,
  URL,
  PORT,
  getNow,
  RoomPrefix
};
