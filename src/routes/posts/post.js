const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

app.post('/post', async (req, res) => {

	const { body } = req;

	const post = new PostModel(body);

	let postSaved;
	try {
		postSaved = await post.insert();
	} catch(error) {
		return res.status(400).json(error.message);
	}

	res.json({ insertedId: postSaved.insertedId });
});

module.exports = app;
