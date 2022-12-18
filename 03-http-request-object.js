// Imports
const http = require('http');

// Creating the server
const server = http.createServer((req, res) => {
	// Request methods
	// console.log(req.method); // GET
	// console.log(req.url); // Show the actual url, for home page => /
	const url = req.url;
	// Home page
	if (url === '/'){
		res.writeHead(200, { 'content-type':'text/html' });
		res.write('<h1>Home page</h1>');
		res.end();
		return;
	}
	// About page
	if (url === '/about'){
		res.writeHead(200, { 'content-type':'text/html' });
		res.write('<h1>About page</h1>');
		res.end();
		return;
	}
	// Default => 404
	res.writeHead(404, { 'content-type':'text/html' });
	res.write('<h1>404 ! Not found</h1>');
	res.end();
});

// Listening the server on port 5000
server.listen(5000);