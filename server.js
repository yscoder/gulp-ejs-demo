var http = require('http'),
    router = require('./routes/route'),
    ejs = require('ejs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  router(req.url, res, ejs);
}).listen(9527, '127.0.0.1');

<<<<<<< HEAD
console.log('Server running at http://127.0.0.1:9527/');
=======
console.log('Server running at http://127.0.0.1:9527/');
>>>>>>> 34a30d85c30953a5f3362fa5584f69d605266a34
