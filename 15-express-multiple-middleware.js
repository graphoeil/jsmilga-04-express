// Imports
const express = require('express');

// Express server instance
const app = express();

// Morgan middleware
const morgan = require('morgan');

// Middleware methods
const logger = require('./logger');
const authorize = require('./authorize');

// Use multiple middlewares
// Order matter !!!
// Or directly in the app.get for specific path
app.use([logger, authorize]);

// Express middleware => express.static()
// No need to import with require
app.use(express.static('./public'));

// Morgan, a logger like
app.use(morgan('tiny'));

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
app.get('/api/items', [logger, authorize], (req, res) => {
	// We get the req.user object defined in authorize.js
	console.log(req.user); // { name: 'cahouet', id: 3 }
	res.send('Items');
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});