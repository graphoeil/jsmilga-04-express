// Imports
const express = require('express');

// Express server instance
const app = express();

// Static assets
app.use(express.static('./methods-public'));

// Parse form data for Traditional form
app.use(express.urlencoded({ extended:false }));

// Parse JSON for JS Form example
app.use(express.json());

// Use router from people.js
const peopleRouter = require('./routes/people');
app.use('/api/people', peopleRouter);

// Use router from auth.js
const authRouter = require('./routes/auth');
app.use('/login', authRouter);

// Server listen
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});