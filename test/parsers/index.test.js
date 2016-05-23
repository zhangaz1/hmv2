'use strict';

var should = require('should');
var parse = require('./../../src/parsers/index.js');
var testData = require('./testData');

describe('parsers.index', function () {
	it('expression', function () {
		var expect = [];
		for (var key in testData) {
			expect = expect.concat(testData[key]);
		}
		var expressions = expect.map(function (exp) {
			return exp.expression;
		});

		var actual = parse(expressions);

		should(actual)
			.eql(expect);
	});
});
