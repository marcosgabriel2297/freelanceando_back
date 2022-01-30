const Joi = require('joi');

const validateSchema = require('../validateSchema');

module.exports = body => {

	const schema = Joi.object({
		title: Joi.string().required(),
		description: Joi.string().required(),
		salary: Joi.number().required(),
		currency: Joi.string().valid('usd', 'arg').required(),
		duration: Joi.object({
			time: Joi.string().valid('days', 'months').required(),
			quantity: Joi.number().required()
		}).required(),
		imagen: Joi.string().required(),
		searchedTechnologies: Joi.array().items(Joi.string()).required(),
		contact: Joi.object({
			email: Joi.string().email().required(),
			phone: Joi.string().pattern(/^\d*$/).required()
		}).required()
	});

	return validateSchema(schema, body);
};
