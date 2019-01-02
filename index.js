'use strict';

function chunk(arr, size) {
	if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) {
		throw new TypeError('Input must be an array');
	}

	if (arguments.length > 2) {
		throw new Error('incorrect arguments length');
	}

	size = size || 1;

	const chunk = [];
	for (let i = 0, l = arr.length, group; i < l; i++) {
		if (i % size === 0) {
			group = [];
			chunk.push(group);
		}
		group.push(arr[i]);
	}

	return chunk;
}

function chunkFixedChunkNumber(arr, chunkNumber) {
	const result = [];
	if (arr.length < 1) {
		return [];
	}

	if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) {
		throw new TypeError('Input must be an array');
	}

	if (arguments.length > 2) {
		throw new Error('incorrect arguments length');
	}

	if (!chunkNumber) {
		chunkNumber = 1;
	}

	if (chunkNumber > arr.length) {
		return [[...arr]];
	}

	let z = 0;
	for (let i = 0; i < arr.length; i++) {
		if (z === chunkNumber) {
			z = 0;
		}
		if (typeof result[z] === 'undefined' || !Array.isArray(result[z])) {
			result[z] = [];
		}
		result[z].push(arr[i]);
		z++;
	}
	return result;
}

module.exports = {
	chunk,
	chunkFixedChunkNumber
};
