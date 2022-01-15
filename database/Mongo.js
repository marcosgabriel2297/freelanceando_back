'use strict';

const { MongoClient } = require('mongodb');

class Mongo {
    constructor() {
        this.url = process.env.URL_DB
        this.dbName = 'breweryProject'
    }

    async connect() {
        try {
            const client = await MongoClient.connect(this.url);
            const db = await client.db(this.dbName)
            console.log('connect to the database');
            return db
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Mongo