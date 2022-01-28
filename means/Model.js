const Mongo = require('../database/Mongo');

const mongo = new Mongo();
module.exports = class Model {

	static get collection() {
		return 'default';
	}

	async insert() {

		const db = await mongo.connect();
		const currentCollection = this.collection();

		try {
			return db.collection(currentCollection).insertOne(this);
		} catch(error) {
			return error.message;
		}
	}

	static async get() {

		console.log('Me ejecute!');
		const db = await mongo.connect();
		const currentCollection = this.collection;

		try {
			return db.collection(currentCollection)
				.find({})
				.toArray();
		} catch(error) {
			return error.message;
		}
	}
};
