const Mongo = require('../database/Mongo');

const mongo = new Mongo();
module.exports = class Model {

	collection() {
		return 'default';
	}

	connectDb() {
		return mongo.connect();
	}

	async insert() {

		const db = await this.connectDb();
		const currentCollection = this.collection();

		try {
			return db.collection(currentCollection).insertOne(this);
		} catch(error) {
			return error.message;
		}
	}
};
