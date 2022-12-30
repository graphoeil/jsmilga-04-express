// Imports
const express = require('express');

// Router
const router = express.Router();

// Login
router.post('/', (req, res) => {
	const { name } = req.body;
	if (name){
		return res.status(200).send(`Welcome ${ name }`);
	}
	res.status(401).send('Please provide credentials...');
});

// Export
module.exports = router;