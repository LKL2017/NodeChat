const PORT = 3000;


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
  let h = d.getHours();
  let m = d.getMinutes();
  m = m.length === 1 ? '0' + m : m;
  return `${h}:${m}`;
}

module.exports = {
  EventType,
  MessageType,
  // socket,
  PORT,
  getNow
};
