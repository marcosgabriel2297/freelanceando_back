const assert = require('assert');

const PostModel = require('../../src/models/Post');

describe('Api get Test', () => {

	const data = {
		title: 'fakeTitle',
		description: 'fakeDescripcion',
		salary: 'fakeSalary',
		currency: 'fakeCurrency',
		duration: {
			time: 'months',
			quantity: 5
		},
		imagen: 'fakeImagen',
		searchedTechnologies: ['fakeSearchedTechnologies'],
		contact: {
			email: 'marcosgabriel2297@gmail.com',
			phone: '11339534399'
		}
	};

	it('Create Post Model', async () => {

		const postModel = new PostModel(data);

		/* eslint-disable */
		compareData(postModel, data);
	});

	it('Should return "post" when execute the collection function', () => {
		const collection = PostModel.collection;
		assert.deepStrictEqual(collection, 'posts');
	});

	it('Should return "post" when execute the collection instantiated function', () => {
		const postModel = new PostModel(data);

		const collection = postModel.collection;

		assert.deepStrictEqual(collection, 'posts');
	});

	it('Should return an instantiated object when execute the "instantiate" function', () => {
		const post = PostModel.instantiate(data);

		compareData(post, data)
	})
});

const compareData = (model, data) => {

	assert.deepStrictEqual(model.title, data.title);
	assert.deepStrictEqual(model.description, data.description);
	assert.deepStrictEqual(model.salary, data.salary);
	assert.deepStrictEqual(model.currency, data.currency);
	assert.deepStrictEqual(model.duration, data.duration);
	assert.deepStrictEqual(model.imagen, data.imagen);
	assert.deepStrictEqual(model.searchedTechnologies, data.searchedTechnologies);
	assert.deepStrictEqual(model.contact, data.contact);

};
