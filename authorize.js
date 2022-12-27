// Middleware function
const authorize = (req, res, next) => {
	const { user } = req.query;
	// http://localhost:5000/?user=cahouet
	// Then we display the current page here home page
	// or http://localhost:5000/about?user=cahouet ...
	if (user === 'cahouet'){
		req.user = { name:'cahouet', id:3 }
		next();
	} else {
		res.status(401).send('Unauthorized!');
	}
};

// Default export
module.exports = authorize;