const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bindListeners = require('./listener').bind;
const { EventType, PORT } = require('../util');

http.listen(PORT, () => {
  console.log(`server is running...`);
});


//add socket event
io.on('connection', socket => {
  console.log('connection ... ');
  socket.broadcast.emit(EventType.welcome, {

  });
  bindListeners(socket)
});



