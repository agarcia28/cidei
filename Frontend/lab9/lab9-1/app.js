var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);
    port = process.env.PORT || 8585

server.listen(port);

app.use(express.static(__dirname));

// Ruta(s) que se manejan
app.get('/', function(req, res){
    res.sendfiled(__dirname + '/index.html');
});

// Variable 'usernames' para los usuarios conectados
var usernames = {};

io.sockets.on('connection', function(socket){
    // Cuando el cliente, browser, emite el evento 'sendchat', este debe escuchar y ejecutar
    socket.on('sendchat', function(data){
        // Le enviamos 'emit' al cliente que ejecute 'updatechat' con dos parametros 'socket.username' y 'data'
        io.sockets.emit('updatechat', socket.username, data);
    });
    // Cuando el cliente emite un evento 'adduser', este escucha y ejecuta
    socket.on('adduser', function(username){
        // Almacanamiento del nombre de usuario en la sesión de toma de info del cliente
        socket.username = username;
        // Adicionamos el usuario 'socket.username' al objeto 'usernames'
        usernames[username] = username;
        // Enviamos al cliente el objeto con la lista de usuarios en el objeto 'username'
        socket.broadcast.emit('updatechat', 'SERVER', username, ' Esta conectado');
        // Enviamos petición al mismo ciente de la petición con la conexión del mismo
        socket.emit('updatechat', 'SEVER', "Usted esta conectado");
        // Actualizamos la lista de usuarios en el chat, en el cliente
        io.sockets.emit('updateusers', usernames);
    });

    // Cuando el usuario se desconecta
    socket.on('disconnect', function(){
        delete usernames[socket.username];
        // Actualizamos la de usuario en el cliente
        io.sockets.emit('updateusers', usernames);
        // Envio global de la actualización de la lista de clientes conectados
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' Esta desconectado');
    });
});
