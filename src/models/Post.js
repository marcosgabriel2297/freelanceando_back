const Model = require('../../means/Model');

class Post extends Model {

	constructor(hola) {
		super();
		this.hola = hola;
	}
}

module.exports = Post;
