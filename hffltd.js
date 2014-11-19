var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  var responseMessage = 'HFF Ltd Web Server.\n' + 'request for: ' + req.url;
  if (fs.existsSync('static' + req.url + '.html'))
    //lets get that file
    {responseMessage += ' EXISTS!'; }
  else
    //my 404 message
    {responseMessage += ' is not here'; }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(responseMessage);
}).listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');