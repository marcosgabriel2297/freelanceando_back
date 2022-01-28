const assert = require('assert');

const PostModel = require('../../src/models/Post');

describe('Api get Test', () => {

	it('Create Post Model', async () => {

		const data = {
			title: 'fakeTitle',
			descripcion: 'fakeDescripcion',
			salary: 'fakeSalary',
			currency: 'fakeCurrency',
			duration: 'fakeDuration',
			imagen: 'fakeImagen',
			searchedTechnologies: ['fakeSearchedTechnologies']
		};

		const postModel = new PostModel(data);

		/* eslint-disable */
		compareData(postModel, data);
	});

	it('Should return "post" when execute the collection function', () => {
		const collection = PostModel.collection;

		assert.deepStrictEqual(collection, 'posts');
	});
});

const compareData = (model, data) => {

	assert.deepStrictEqual(model.title, data.title);
	assert.deepStrictEqual(model.descripcion, data.descripcion);
	assert.deepStrictEqual(model.salary, data.salary);
	assert.deepStrictEqual(model.currency, data.currency);
	assert.deepStrictEqual(model.duration, data.duration);
	assert.deepStrictEqual(model.imagen, data.imagen);
	assert.deepStrictEqual(model.searchedTechnologies, data.searchedTechnologies);
};
