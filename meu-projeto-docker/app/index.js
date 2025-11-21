const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('SE É LOUCO O PROJETO TA FUNCIONANDO.\n');
});

server.listen(3000);
