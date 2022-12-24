// Imports
const express = require('express');

// Express (server) instance
const app = express();
// or const app = require('express')(); // IIFE like

// App methods
//

// LISTEN
app.listen(5000, () => {
	console.log('Server is listening on port 5000!');
});

// GET
app.get('/', (req, res) => {
	// This callback function will be invoked every time
	// user is performing a get request on our root /
	res.status(200).send('Home Page'); // equivalent res.write() or end() in native node
});
app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});
// 404
app.all('*', (req, res) => {
	res.status(404).send('<h1>404 ! Not found</h1>');
});

// Others...
// POST
// DELETE
// USE