const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockResponse, mockRequest } = require('../aux');

const { route } = require('../../src/routes/posts/get');
const PostModel = require('../../src/models/Post');

const fakePosts = [
	{
		_id: '61e5aa41ffd5a3bad8d83edd',
		title: 'una publicacion',
		descripcion: 'una buena descripcion',
		salary: 500,
		currency: 'usd',
		duration: 5,
		imagen: 'asdasdasd',
		searchedTechnologies: [
			'nodejs',
			'mysql',
			'mongo'
		]
	},
	{
		_id: '61e880a081910a75bcfb4a32',
		title: null,
		descripcion: null,
		salary: null,
		currency: null,
		duration: null,
		imagen: null,
		searchedTechnologies: null
	}
];

describe('Api get Test', () => {

	afterEach(() => sandbox.restore());

	context('When you get the posts', () => {

		it('Should 200 and an array with the posts', async () => {

			sandbox.stub(PostModel, 'get').resolves(fakePosts);

			const req = mockRequest();
			const res = mockResponse();

			await route(req, res);

			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, fakePosts);
			sandbox.assert.calledOnceWithExactly(PostModel.get);
		});

		it('Should return 200 if an emty array is found', async () => {

			sandbox.stub(PostModel, 'get').resolves([]);

			const req = mockRequest();
			const res = mockResponse();

			await route(req, res);

			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, []);

			sandbox.assert.calledOnceWithExactly(PostModel.get);
		});
	});

	context('When an error occurs', () => {

		it('should return 404 if there is an error getting the posts', async () => {

			sandbox.stub(PostModel, 'get').rejects(new Error('Some error in the database'));

			const req = mockRequest();
			const res = mockResponse();

			await route(req, res);

			assert.deepStrictEqual(res.status, 404);
			assert.deepStrictEqual(res.json, 'Posts not found');

			sandbox.assert.calledOnceWithExactly(PostModel.get);
		});
	});
});
