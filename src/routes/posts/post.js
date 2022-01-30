const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

const schemaPost = require('../../schemas/posts/api');

const handler = async (req, res) => {

	const validation = await schemaPost(req.body);

	if(validation.error)
		return res.status(400).json(validation);

	const post = new PostModel(req.body);

	let postSaved;
	try {
		postSaved = await post.insert();
	} catch(error) {
		return res.status(400).json(error.message);
	}

	res.status(200).json({ insertedId: postSaved.insertedId });
};

app.post('/post', handler);

module.exports = { app, handler };
