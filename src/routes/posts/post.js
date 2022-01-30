const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

const schemaPost = require('../../schemas/posts/api');

const handler = async (req, res) => {

	const { body } = req;

	const post = new PostModel(body);

	let postSaved;
	try {
		postSaved = await post.insert();
	} catch(error) {
		return res.status(400).json(error.message);
	}

	res.json({ insertedId: postSaved.insertedId });
};

app.post('/post', schemaPost, handler);

module.exports = { app, handler };
