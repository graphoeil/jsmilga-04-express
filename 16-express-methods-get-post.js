// Imports
const express = require('express');

// Express server instance
const app = express();

// Data
let { people } = require('./data');

// Static assets
app.use(express.static('./methods-public'));

// Parse form data
// This is a built-in middleware function in Express. 
// It parses incoming requests with urlencoded payloads.
app.use(express.urlencoded({ extended:false }));

// Parse JSON for JS Form example
app.use(express.json());

// HTTP Methods
//
// GET
app.get('/api/people', (req, res) => {
	res.status(200).json({
		success:true,
		data:people
	});
});
// POST
// Form example with methods-publics/index.html
// <form action="/login" method="POST">
app.post('/login', (req, res) => {
	// We must use middleware express.urlencoded() to get form data
	const { name } = req.body;
	if (name){
		return res.status(200).send(`Welcome ${ name }`);
	}
	res.status(401).send('Please provide credentials...');
});
// Javascript example with methods-publics/javascript.html
app.post('/api/people', (req, res) => {
	const { name } = req.body;
	if (!name){
		/* In front end in catch(error) :
		formAlert.textContent = error.response.data.msg */
		return res.status(400).json({
			success:false,
			msg:'Please provide name value'
		});
	}
	/* person:name because if the front end :
	const { data } = await axios.post('/api/people', { name: nameValue })
	const h5 = document.createElement('h5')
	h5.textContent = data.person <= !!!! we return data json ;-)
	result.appendChild(h5) */	
	res.status(201).json({
		success:true,
		person:name
	});
});

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});