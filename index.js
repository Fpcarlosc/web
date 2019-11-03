const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;


var server = http.createServer(function (request, response) {
         fs.readFile('pizza.html', function(err, data) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end(data);
        });
});


server.listen(port);

