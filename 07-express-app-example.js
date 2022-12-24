// Imports
const express = require('express');
const path = require('path');

// Express server instance
const app = express();

// Setup static and middleware
// We indicate the path of styles.css, browser-app.js, logo.svg...
// With express no need to declare mime-type
// It's a common practice to name the folder public
app.use(express.static('./public'));

// HTTP
//
// Root
app.get('/', (req, res) => {
	// Send file (like readFile with node)
	// We must send an absolute path with sendFile
	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});
// 404
app.all('*', (req, res) => {
	res.status(404).send('<h1>404 ! Resource not found...</h1>');
});

// Listen on port 5000
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});