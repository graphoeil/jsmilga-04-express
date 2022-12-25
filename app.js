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
	// Show products without price and description
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
	/*
	[
		{
			"id": 1,
			"name": "albany sofa",
			"image": "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg"
		},
		{
			"id": 2,
			"name": "entertainment center",
			"image": "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg"
		},
		{
			"id": 3,
			"name": "albany sectional",
			"image": "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg"
		},
		{
			"id": 4,
			"name": "leather sofa",
			"image": "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg"
		}
	]
	*/
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});