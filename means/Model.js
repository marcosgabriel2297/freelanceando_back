// const Mongo = require('../database/Mongo');

// const mongo = new Mongo();
module.exports = class Model {

	static get collection() {
		return 'default';
	}

	insert() {

		console.log('DESDE MODEL', this);
	}
};
