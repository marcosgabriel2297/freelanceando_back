const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

const route = async (req, res) => {

	let postGetted;
	try {
		postGetted = await PostModel.get();
	} catch(err) {
		return res.status(404).json('Post not found');
	}

	console.table(postGetted[0]);

	return res.status(200).json(postGetted);
};

app.get('/post', route);

module.exports = { app, route };
