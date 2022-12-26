// Imports
const express = require('express');

// Express server instance
const app = express();

// Middleware is a function
// Middleware is between request and response
//
// Express pass req, res and next to middleware function for us
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	// The NEXT method
	next(); // Call res.send() method
};
// Home
app.get('/', logger, (req, res) => {
	res.send('Home');
});
// About
app.get('/about', logger, (req, res) => {
	res.send('About');
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});