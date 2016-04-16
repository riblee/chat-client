/**
 * Created by riblee on 4/11/16.
 */
'use strict';
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var currentConnections = {};

io.on('connection', (socket) => {
  currentConnections[socket.id] = {};

  console.log('A user connected');
  socket.on('message', (msg) => {
    if (currentConnections.hasOwnProperty(socket.id) && currentConnections[socket.id].hasOwnProperty(msg.room)) {
      msg.nickname = currentConnections[socket.id][msg.room].nickname;
    }

    console.log(JSON.stringify(currentConnections[socket.id]));
    console.log(JSON.stringify(msg));
    io.to(msg.room).emit(msg.room, msg);
  });

  socket.on('connectToRoom', (obj) => {
    console.log('connect: ' + JSON.stringify(obj));
    currentConnections[socket.id] = {};
    currentConnections[socket.id][obj.room] = obj;
    socket.join(obj.room);
    io.to(obj.room).emit('message', {
      server: true,
      nickname: obj.nickname,
      message: 'Hi! I connected to this room.'
    });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});