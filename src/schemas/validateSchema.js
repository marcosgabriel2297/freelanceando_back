module.exports = async (req, res, next, schema) => {
	try {
		await schema.validateAsync(req.body);
		next();
	} catch(e) {
		return res.status(400).json(e.message);
	}
};
