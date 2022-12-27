// Middleware function
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	// Next => Invoke res.send() or other...
	next();
};

// Default export
module.exports = logger;