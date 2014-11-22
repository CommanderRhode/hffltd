var http = require('http');
var requestor = require('./server/requestActivator.js');

http.createServer(function (req, res) {
  requestor.processRequest(req.url, res);
}).listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');