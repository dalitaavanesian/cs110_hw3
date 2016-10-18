var http = require('http');

http.createServer(function(req, res) {

  if(req.url === '/about') {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('About my page\n');
  } else if(req.url === '/aua') {
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.end('<img style = "width: 500px; height: 500px;" src=https://upload.wikimedia.org/wikipedia/commons/f/f3/American_University_of_Armenia_-_Avedisian_Building_-_HDR.JPG > ')

  } else if(req.url === '/armenia') {
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.end('<img style = "width: 500px; height: 500px;" src=https://upload.wikimedia.org/wikipedia/commons/4/48/Yerevan_2012_February.JPG > ')

  } else if(req.url === '/search') {
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.end('<a href = "https://www.google.com"> Click on this to search whatever you like! </a> ') 

  } else if(req.url === '/hello') {
      res.writeHead(200, {'Content-Type' : 'text/plain'})
      res.end('Hello and Welcome!')
  } else {
    res.writeHead(404, {'Content-Type' : 'text/plain'})
    res.end("The page cannot be found\n");
  }
}).listen(9999, function() {
  console.log('Server is running.');
});
