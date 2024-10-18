const { createServer } = require('http');


hostname = 'localhost';
port = 8080;

// Create server
myServer = createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // Routing logic
  if (url === '/' && method === 'GET') {
    // res.writeHead(200, 'This is a success message', {
    //   'Content-type': 'text/plain',
    // })
    res.end('Hello, World!');
  } else if  (url === '/foo'  && method === 'GET') {
    res.writeHead(200, 'This is another success message', {
      'Content-type': 'application/json',
    })
    const fooResponse = {foo: 'bar'}
    res.end(JSON.stringify(fooResponse));
  } else {
    // Default for unknown paths
    res.writeHead(404, 'Not Found.', {
      'Content-Type': 'text/plain',
    })
    res.end('Page Not Found\n');
  }
})

// Start server, listen for requests to given port and hostname
myServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})