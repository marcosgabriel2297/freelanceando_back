const express = require('express');

const app = express();
const PostModel = require('../../models/Post');

/*eslint-disable */
app.post('/test', async (req, res) => {
    const postModel = new PostModel('Juan carlos');

    console.log('asdasdas', postModel.insert());
	res.json('todo ok');
});

module.exports = app;
