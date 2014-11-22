var fs = require('fs');

module.exports = {
  processRequest: function (requestedURL, response) {
    //examine request type
    
    
    //composite response
    
    var fileLocation = determinFileRequested(requestedURL);
    var contentType = selectContentType(requestedURL);
    if (fs.existsSync(fileLocation)) //lets get that file
    {
      serveContent(fileLocation, response, 200, contentType);
    }
    else //my 404 message
    {
      serveContent('static/404.html', response, 404, contentType);
    }
  }
};
  
  function determinFileRequested(requestedURL) {
    if ((requestedURL.indexOf('.html') + requestedURL.indexOf('.jpg') + requestedURL.indexOf('.css')) ==-3) {
      return 'static' + requestedURL + '.html';
    } 
    return 'static' + requestedURL;
  }
  
  function selectContentType(requestedURL){
    if (requestedURL.indexOf('.html')) return 'text/html';
    if (requestedURL.indexOf('.css')) return 'text/css';
    if (requestedURL.indexOf('.jpg')) return 'image/jpeg';
  }
  
  function serveContent(fileLocation, response, statusCode, contentType) {
    fs.readFile(fileLocation, function (err, data) {
    if (err) throw err;
      response.writeHead(statusCode, {'Content-Type': contentType});
      response.end(data);
      console.log('SERVED: ' + fileLocation);
    });
  }
