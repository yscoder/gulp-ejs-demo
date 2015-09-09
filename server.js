var http = require('http'),
    router = require('./routes/route'),
    ejs = require('ejs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  router(req.url, res, ejs);
}).listen(9527, '127.0.0.1');

console.log('Server running at http://127.0.0.1:9527/');
