const Model = require('../../means/Model');

class Post extends Model {

	constructor({
		title, descripcion, salary, currency, duration, imagen, searchedTechnologies
	}) {
		super();
		this.title = title;
		this.descripcion = descripcion;
		this.salary = salary;
		this.currency = currency;
		this.duration = duration;
		this.imagen = imagen;
		this.searchedTechnologies = searchedTechnologies;
	}

	static get collection() {
		return 'posts';
	}
}

module.exports = Post;
