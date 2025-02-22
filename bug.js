const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive indefinitely
  // res.writeHead(200, { 'Connection': 'keep-alive' });
  res.writeHead(200);
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});