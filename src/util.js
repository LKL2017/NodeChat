const EventType = {
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
  PORT: 3000,
  getNow
};
