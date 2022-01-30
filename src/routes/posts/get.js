const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

const handler = async (req, res) => {

	let postGetted;
	try {
		postGetted = await PostModel.get();
	} catch(err) {
		return res.status(404).json('Posts not found');
	}

	return res.status(200).json(postGetted);
};

app.get('/post', handler);

module.exports = { app, handler };
