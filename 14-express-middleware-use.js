// Imports
const express = require('express');

// Express server instance
const app = express();

// Logger
const logger = require('./logger');

// Use middleware
// Must be at the top of the code, order matter !!!
// Instead of logger everywhere => app.get('/', logger, (req, res) => {});
// With a path "/api" logger method will only run in this path and subpath
app.use('/api', logger);

// HTTP
// Home
app.get('/', (req, res) => {
	res.send('Home');
});
// About
app.get('/about', (req, res) => {
	res.send('About');
});
// Products
app.get('/api/products', (req, res) => {
	res.send('Products');
});
// Items
app.get('/api/items', (req, res) => {
	res.send('Items');
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});