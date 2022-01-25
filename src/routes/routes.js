const post = require('./posts/post');
const { app: getPost } = require('./posts/get');

module.exports = [
	getPost,
	post
];
