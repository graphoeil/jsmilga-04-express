// Imports
const http = require('http');

// Creating the server
const server = http.createServer((req, res) => {
	// res.end()
	// This method signals to the server that all of the response headers and body have been sent; 
	// that server should consider this message complete. 
	// The method, response.end(), MUST be called on each response.
	res.end('<h1>Home page</h1>');
});

// Listening the server on port 5000
// 80 => http
// 443 => https
server.listen(5000);