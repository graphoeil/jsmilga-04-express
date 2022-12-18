// Imports
const http = require('http');
const { readFileSync } = require('fs');

// Get all files
// Methods here (readFileSync) will only run on launch
// and not each time the page is refreshed !
const homePage = readFileSync('./index.html');

// Creating the server
const server = http.createServer((req, res) => {
	// URL
	const url = req.url;
	// Home page
	if (url === '/'){
		// With 'text/plain' we display the code ;-)
		res.writeHead(200, { 'content-type':'text/html' });
		res.write(homePage);
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