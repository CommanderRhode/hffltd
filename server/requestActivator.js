var fs = require('fs');

module.exports = {
  processRequest: function (requestedURL, httpResponse) {
    console.log('REQUESTED: ' + requestedURL);
    var thisresponse = new response(requestedURL);
    fs.readFile(thisresponse.servedFile, function (err, data) {
    if (err) throw err;
      httpResponse.writeHead(thisresponse.statusCode, {'Content-Type': thisresponse.contentType});
      httpResponse.end(data);
      console.log('SERVED: ' + thisresponse.servedFile);
    });
  }
};

function response(requestedURL) {
  if (requestedURL.indexOf('.')==-1) requestedURL += '.html'
  var fileExtension = requestedURL.substring(requestedURL.indexOf('.'));
  this.servedFile = 'static' + requestedURL; 
  if (!fs.existsSync(this.servedFile)) fileExtension = '404'; 
  switch(fileExtension) {
    case '.html':
      this.contentType = 'text/html';
      this.statusCode = 200;
      break;
    case '.jpg':
      this.contentType = 'image/jpeg';
      this.statusCode = 200;
      break;
    case '.css':
      this.contentType = 'text/css';
      this.statusCode = 200;
      break;
    default:
      this.contentType = 'text/html'
      this.statusCode = 404;
      this.servedFile = 'static/404.html'
      break;
  }
}