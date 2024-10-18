const { request } = require('http');

options = {
  hostname: 'localhost',
  port: 8080,
  method: 'GET',
  path: '/',
}

/*
  Define request
*/
const req = request(options, (res) => {
  console.log(`statuscode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

/*
  - Define callback when request has error
  - Not to be confused with response error
*/
req.on('error', (err) => {
  console.error(err);
});

// Send the request
req.end();