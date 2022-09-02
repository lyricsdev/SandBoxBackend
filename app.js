var WebSocketServer = require('ws').Server;
var http = require('http');
var server = http.createServer();
var wss = new WebSocketServer({server: server})
var commandHandler = require('./cHandler/index.js');
const {setup} = require('./modules/database.setup.js');
setup();
wss.on('connection', function(ws) {
  console.log("connected")
  ws.on('message', function(data, flags) {
    commandHandler(ws,data.toString());

    });
    ws.on('close', function() {
        ws.send('good bye!');
    });
    ws.on('error', function(e) {
        ws.send('err:', e);

    });
});
server.listen(6969, () => {
  console.log('listening on port 8126');
});