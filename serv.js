
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World" + '</br>');
  response.write("sample node js" + '</br>');


var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
   response.write('connection succesful' + '</br>');

   eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);
 
eventEmitter.on('data_received', function(){
   response.write('data received succesfully' + '</br>');
});

eventEmitter.emit('connection');
response.write("Program Ended" + '</br>');





var d = new Date();

response.write('The date today is: '+ d);

  response.end();
}).listen(8888);