// Imports
const http = require('http');

// Response status codes
// https://developer.mozilla.org/en/docs/Web/HTTP/Status
/* Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599) */

// Common MIME types
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

// Creating the server
const server = http.createServer((req, res) => {
	// Header for response status 200 => OK
	res.writeHead(200, { 'content-type':'text/html' });
	// End of communication
	res.end('<h1>Home page</h1>');
	/* OR
	res.write('<h1>Home page</h1>');
	res.end(); */
});

// Listening the server on port 5000
server.listen(5000);