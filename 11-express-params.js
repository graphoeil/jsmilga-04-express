// Imports
const express = require('express');

// From data.js
const { products } = require('./data');

// Express server instance
const app = express();

// HTTP
// Home page
app.get('/', (req, res) => {
	// HTML response
	res.send(`
		<h1>Home Page<h1>
		<a href="/api/products">Products</a>
	`);
});
// Products
app.get('/api/products', (req, res) => {
	// Show products without price and description
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});
// Specific product
app.get('/api/products/:productID', (req, res) => {
	// Product id via route params
	const { productID } = req.params;
	// Show specific product
	const singleProduct = products.find((product) => {
		return product.id === Number(productID);
	});
	// No product match id
	if (!singleProduct){
		return res.status(404).send(`
			<h1>404 ! Product '${ productID }' doesn't exist !</h1>
		`);
	}
	return res.json(singleProduct);
	/*
	{
		"id": 1,
		"name": "albany sofa",
		"image": "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
		"price": 39.95,
		"desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
	}
	*/
});
// More complex example
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log(req.params); // { productID: '1', reviewID: '3' }
	res.send('<h1>Hello World!</h1>');
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});