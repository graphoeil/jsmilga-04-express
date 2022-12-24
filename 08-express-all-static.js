// Imports
const express = require('express');
const path = require('path');

// Express server instance
const app = express();

// Setup static and middleware
app.use(express.static('./public'));

// HTTP
//
// Root => /
// ALL STATIC !!!!
// We move index.html in public folder and it's work ;-)

// 404
app.all('*', (req, res) => {
	res.status(404).send('<h1>404 ! Resource not found...</h1>');
});

// Listen on port 5000
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});