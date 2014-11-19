var http = require('http');
http.createServer(function (req, res) {
  var responseMessage = 'HFF Ltd Web Server.\n' + 'request for: ' + req.url;
  if (req.url=="/index") {responseMessage = "Wohoo, we hit Index.";}
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(responseMessage);
}).listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');