var express = require('express');
var http = require('http');
var app = express();
var servidor = http.createServer(app);
var puerto = process.env.PORT || 8080;
servidor.listen(puerto);

var io = require('socket.io').listen(servidor);
recibirymandar("mensaje", "msg");


function recibirymandar(nomderecibir, nomdemandar) {
	io.on('connection', function(socket) {

	socket.on(nomderecibir, function(data){
		console.log(data);
		io.sockets.emit(nomdemandar, data)
	});


	console.log("un nuevo cliente se ha conectado");
});

}


app.get('/', (req, res) => {
res.sendFile(__dirname + "/index.html");
});

console.log("Servidor Escuchando En El Puerto: " + puerto + " para poder acceder entre al localhost:" + puerto);
