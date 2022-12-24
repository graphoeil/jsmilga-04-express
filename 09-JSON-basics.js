// Imports
const express = require('express');

// From data.js
const { products } = require('./data');

// Express server instance
const app = express();

// HTTP
app.get('/', (req, res) => {
	// on http://localhost:5000/
	// we display the products JSON array
	res.json(products);
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});