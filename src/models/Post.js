const Model = require('../../means/Model');

class Post extends Model {

	constructor({
		title, description, salary, currency, duration, imagen, searchedTechnologies, contact
	}) {
		super();
		this.title = title;
		this.description = description;
		this.salary = salary;
		this.currency = currency;
		this.duration = duration;
		this.imagen = imagen;
		this.searchedTechnologies = searchedTechnologies;
		this.contact = contact;
	}

	static get collection() {
		return 'posts';
	}

	get collection() {
		return 'posts';
	}

	static instantiate(obj) {
		return new Post(obj);
	}
}

module.exports = Post;
