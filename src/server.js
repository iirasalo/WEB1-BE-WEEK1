const http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Sorry my bad ');
    res.end();
  })
  .listen(8080);
