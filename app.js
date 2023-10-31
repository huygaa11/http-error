const http = require('http');

console.log('App started running...');

var requestHandler = (request, response) => {
    response.writeHead(500);
    response.end('Bad request error');
};

http.createServer(requestHandler).listen(8080);