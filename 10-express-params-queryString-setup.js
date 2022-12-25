// Imports
const express = require('express');

// From data.js
const { products } = require('./data');

// Express server instance
const app = express();

// HTTP
app.get('/', (req, res) => {
	// HTML response
	res.send(`
		<h1>Home Page<h1>
		<a href="/api/products">Products</a>
	`);
});
app.get('/api/products', (req, res) => {
	// Show products without description
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});