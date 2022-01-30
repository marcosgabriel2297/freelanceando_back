const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockResponse, mockRequest } = require('../../aux');

const { handler } = require('../../../src/routes/posts/post');
const PostModel = require('../../../src/models/Post');

describe('Post api Test', () => {

	afterEach(() => sandbox.restore());

	const fakeData = {
		title: 'new title',
		description: 'fake description',
		salary: 10,
		currency: 'usd',
		duration: {
			time: 'months',
			quantity: 5
		},
		imagen: 'fake image',
		searchedTechnologies: ['nodejs', 'mongodb'],
		contact: {
			email: 'marcosgabriel2297@gmail.com',
			phone: '11339534399'
		}
	};

	const id = '61f6ef8d846ad117d18572ca';

	context('When create post', () => {

		it('Should return 200 and the id of the created post', async () => {

			sandbox.stub(PostModel.prototype, 'insert').resolves({ insertedId: id });

			const req = mockRequest(fakeData);
			const res = mockResponse();

			await handler(req, res);

			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, { insertedId: id });
			sandbox.assert.calledOnceWithExactly(PostModel.prototype.insert);
		});
	});

	context('When occurs an error', () => {

		it('Should return 400 if exist an error in database', async () => {

			sandbox.stub(PostModel.prototype, 'insert').rejects(new Error('Error inserting'));

			const req = mockRequest(fakeData);
			const res = mockResponse();

			await handler(req, res);

			assert.deepStrictEqual(res.status, 400);
			assert.deepStrictEqual(res.json, 'Error inserting');
			sandbox.assert.calledOnceWithExactly(PostModel.prototype.insert);
		});

		it('Should return 400 if no data is sent', async () => {

			sandbox.stub(PostModel.prototype, 'insert');

			const req = mockRequest({});
			const res = mockResponse();

			await handler(req, res);

			assert.deepStrictEqual(res.status, 400);
			assert.deepStrictEqual(res.json, { error: '"title" is required' });
			sandbox.assert.notCalled(PostModel.prototype.insert);
		});

		/* eslint-disable */
		for(const property in fakeData) {

			const dataFormatted = {
				...fakeData,
				[property]: null
			};

			it(`Should return 400 if the ${property} field is wrong`, async () => {

				sandbox.stub(PostModel.prototype, 'insert');

				const req = mockRequest(dataFormatted);
				const res = mockResponse();

				await handler(req, res);

				assert.deepStrictEqual(res.status, 400);
				sandbox.assert.notCalled(PostModel.prototype.insert);
			});
		}
		/* eslint-enable */
	});
});
