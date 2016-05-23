'use strict';

var should = require('should');
var fs = require('fs');

var input = require('./../../src/input/fromFile.js');
var filePath = './test/input/testData.txt';

describe('input', function () {
	it('should can read data from file', function () {
		var inputs = input(filePath);
		var data = fs.readFileSync(filePath, 'utf-8');

		data = data.split(/\r?\n/);
		data = data.map(function (item) {
			return item.replace(/\s+/g, ' ');
		});
		data = data.filter(function (item) {
			return item;
		});

		should(inputs)
			.eql(data);
	});

	describe('trim', function () {
		it('should clear space on left and right', function () {
			var str = ' abc ef ';
			var expact = 'abc ef';

			var actual = input._test.trim(str);

			should(actual)
				.equal(expact);
		});
	});

	describe('replaceMultipleSpaceToOne', function () {
		it('should replace multiple space to one', function () {
			var str = 'gitf  is   X';
			var expact = 'gitf is X';

			var actual = input._test.replaceMultipleSpaceToOne(str);

			should(actual)
				.equal(expact);
		});
	});
});
