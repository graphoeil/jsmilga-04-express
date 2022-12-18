// Imports
const http = require('http');
const { readFileSync } = require('fs');

// Get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

// Creating the server
const server = http.createServer((req, res) => {
	// URL
	const url = req.url;
	// Home page => index.html
	if (url === '/'){
		res.writeHead(200, { 'content-type':'text/html' });
		res.write(homePage);
		res.end();
		return;
	}
	// Home page => styles.css
	if (url === '/styles.css'){
		res.writeHead(200, { 'content-type':'text/css' });
		res.write(homeStyles);
		res.end();
		return;
	}
	// Home page => logo.svg
	if (url === '/logo.svg'){
		res.writeHead(200, { 'content-type':'image/svg+xml' });
		res.write(homeImage);
		res.end();
		return;
	}
	// Home page => browser-app.js
	if (url === '/browser-app.js'){
		res.writeHead(200, { 'content-type':'text/javascript' });
		res.write(homeLogic);
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