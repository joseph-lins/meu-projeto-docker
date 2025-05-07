const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Olá, Joseph! Deploy via Docker Compose funcionando.\n');
});

server.listen(3000);