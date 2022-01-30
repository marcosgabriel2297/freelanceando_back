const Mongo = require('../database/Mongo');

const mongo = new Mongo();

module.exports = class Model {

	static get collection() {
		return 'default';
	}

	get collection() {
		return 'default';
	}

	async insert() {

		const db = await mongo.connect();

		try {
			return db.collection(this.collection).insertOne(this);
		} catch(error) {
			return error.message;
		}
	}

	static async get() {

		const db = await mongo.connect();

		try {

			const getData = await db.collection(this.collection).find({}).toArray();

			const instantiatedModel = getData.map(obj => this.instantiate(obj));
			return instantiatedModel;
		} catch(error) {
			return error.message;
		}
	}
};
