'use strict';


const assert = require('assert');
const {chunk, chunkFixedChunkNumber} = require("./index");

describe('Chunking with fixed Number of Items', () => {
	it('should return correct chunk when size is 2', () =>
		assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]])
	);

	it('should return correct chunk when size is 3', () =>
		assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]])
	);

	it('should return correct chunk without size value (default 1)', () =>
		assert.deepEqual(chunk([1, 'man', 3, 4]), [[1], ['man'], [3], [4]])
	);

	it('ignore zero size value', () =>
		assert.deepEqual(chunk([1, 'man', 3, 4], 0), [[1], ['man'], [3], [4]])
	);

	it('should throw error when input is incorrect', () =>
		assert.throws(() => chunk('incorrect'))
	);

	it('should throw error when arguments length > 2', () =>
		assert.throws(() => chunk([1, 2, 3], 2, 3))
	);

	it('should support typed arrays', () =>
		assert.deepEqual(chunk(new Uint8Array([1, 2, 3, 4]), 2), [[1, 2], [3, 4]])
	);

	it('should handle bigger chunk size', () =>
		assert.deepEqual(chunk([1, 2, 3], 5), [[1, 2, 3]])
	);
});

describe('Chunking with fixed number of Chunks', () => {
	it('should chunk the alphabet correctly with 6 chunks available', () => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
		const expectedResult = [
			['a', 'g', 'm', 's', 'y'],
			['b', 'h', 'n', 't', 'z'],
			['c', 'i', 'o', 'u'],
			['d', 'j', 'p', 'v'],
			['e', 'k', 'q', 'w'],
			['f', 'l', 'r', 'x']
		];
		assert.deepEqual(chunkFixedChunkNumber(alphabet, 6), expectedResult);
	});

	it('should throw an error when the input is incorrect', () =>
		assert.throws(() => chunkFixedChunkNumber('alphabet'))
	);

	it('should ignore zero values', () =>
		assert.deepEqual(chunkFixedChunkNumber([1, 'man', 3, 4], 0), [[1, 'man', 3, 4]])
	);

	it('should throw an error when more than 2 arguments are specified', () =>
		assert.throws(() => chunkFixedChunkNumber([1, 2, 3, 4], 2, 5))
	);

	it('should support typed arrays', () =>
		assert.deepEqual(chunkFixedChunkNumber(new Uint8Array([1, 2, 3, 4]), 4), [[1], [2], [3], [4]])
	);

	it('should handle bigger chunk size', () =>
		assert.deepEqual(chunkFixedChunkNumber([1, 2, 3], 5), [[1, 2, 3]])
	);

	it('should return correct chunk without size value (default 1)', () =>
		assert.deepEqual(chunkFixedChunkNumber([1, 'man', 3, 4]), [[1, 'man', 3, 4]])
	);

});
