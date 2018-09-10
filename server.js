var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  
  //response.end('Hello World\n');
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 
    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

  var parsedUrl = url.parse(request.url);
  
  

  if (parsedUrl.pathname == '/listings')
  {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    const body = JSON.stringify(listingData);
    response.write(body);
  }

  else 
  {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Bad gateway error');
  };
  response.end();

};

server = http.createServer(requestHandler)
{
    
};


fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */

   if (err) throw err;
   listingData = JSON.parse(data);

   server.listen(port, function() 
   {
    console.log('Server listening on: http://127.0.0.1:' + port);
   });

});

