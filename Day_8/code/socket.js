const express = require('express');
const http = require('http');
const app = express();
const socket = require('socket.io');

let server = http.createServer(app);
app.set('view engine', 'ejs');

app.use(express.static('./views'))
app.use(express.static('./public'))
app.get('/chat', (req, res) => {
  res.render('chat')
})
let io = socket.listen(server);
io.on('connection', (socket) => {
  socket.emit('chatRoom', 'Welcome');

  socket.broadcast.emit('chatRoom', 'A new UserJoind');

  socket.on('chatMsg', (message) => {
    console.log(message);
    socket.emit('chatRoom', 'Message Received');
  })
  
})

server.listen(3000);