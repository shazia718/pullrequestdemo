// var htp = require('http')
// var server = htp.createServer(function(req, resp){
// 	resp.writeHead(200, {"Content-Type": "text/html"});
// 	resp.write('<h1>Hello World</h1>');
// 	resp.end();
// })
// server.listen(3000)
var http = require("http");
var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, function(response) {
  console.log("Server responded with status code",
              response.statusCode);
});
request.end();