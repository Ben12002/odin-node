const http = require('http');
const fs = require('fs');

hostname = 'localhost';
port = 8080;

// Create server
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == '/') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (url == '/about') {
    fs.readFile('about.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (url == '/contact-me') {
    fs.readFile('contact-me.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('404.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
});

// Start server
server.listen(port, hostname, () => {
  console.log(`Server is running at: http://${hostname}:${port}/`);
});