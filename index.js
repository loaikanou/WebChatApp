const express = require('express');
const socket = require('socket.io');

// App Setup
var app = express();
var server = app.listen(4000, function(){
  console.log('Web ChatApp listening on port 4000');
});

// Static files
app.use(express.static('public'));

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

    // socket clients
    // var clients = io.sockets.clients();

});
