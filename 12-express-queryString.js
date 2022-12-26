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
});
// More complex example
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log(req.params); // { productID: '1', reviewID: '3' }
	res.send('<h1>Hello World!</h1>');
});
// Query string
app.get('/api/v1/query', (req, res) => {
	// http://localhost:5000/api/v1/query?search=a&limit=2
	const { search, limit } = req.query;
	let sortedProducts = [...products];
	if (search){
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit){
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1){
		// res.status(200).send('<h1>No products found...</h1>');
		// Better option, return success ok and no data
		return res.status(200).json({ success:true, data:[] });
	}
	res.status(200).json(sortedProducts);
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});