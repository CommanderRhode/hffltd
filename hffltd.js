var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  var fileLocation = determinFileRequested(req.url);
  
  if (fs.existsSync(fileLocation)) //lets get that file
    {
      serveContent(fileLocation, res, 200);
    }
  else //my 404 message
    {
      serveContent('static/404.html', res, 404);
    }
  
}).listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');

function determinFileRequested(requestedURL) {
  if ((requestedURL.indexOf('.html') + requestedURL.indexOf('.jpg') + requestedURL.indexOf('.css')) ==-3) {
    return 'static' + requestedURL + '.html';
  } 
  return 'static' + requestedURL;
}

function serveContent(fileLocation, response, statusCode) {
  fs.readFile(fileLocation, function (err, data) {
    if (err) throw err;
    response.writeHead(statusCode, {'Content-Type': 'text/html'});
    response.end(data);
    console.log('SERVED: ' + fileLocation);
  })
}