var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
server.use(express.static(__dirname + '/Public'));

server.get('/', function(request, response) {
  response.sendFile('Public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
