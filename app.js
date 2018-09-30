const http = require('http');
var dt = require('./myfirstmodule');

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.write(dt.myDateTime()+ '\n');
	res.end('Hello World! My name is Samuel.\n');	
});

server.listen(port, hostname, () => {
	console.log('Server running...');
});