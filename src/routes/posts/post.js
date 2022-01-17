const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

/*eslint-disable */
app.post('/post', async (req, res) => {
/* eslint-enable */

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
