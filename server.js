const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my ROOT page');
  }
  if (req.url === '/home') {
    res.end('HOME  page');
  }
  if (req.url === '/about') {
    res.end('ABOUT page');
  }

  res.end(`
  <h1> Ooops </h2>
  <p> We can't seem to finde the page you are looking for </p>
  <a href="/"> Go back to ROOT page </a>`);
});
server.listen(5000);
