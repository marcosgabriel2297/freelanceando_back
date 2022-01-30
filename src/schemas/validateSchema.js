module.exports = async (req, res, schema) => {
	try {
		await schema.validateAsync(req.body);
	} catch(e) {
		return res.status(400).json(e.message);
	}
};
