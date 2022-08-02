const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Hello from server');
  res.end('Doesnt work');
});

server.listen(5000, () => {
  console.log('I am server 5000');
});
