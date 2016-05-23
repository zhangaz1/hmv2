'use strict';

var should = require('should');
var _ = require('lodash');

require('./../helper/initContext.js');

var context = require('./../../src/context.js');
var input = require('./../../src/input/fromFile.js');
var parse = require('./../../src/parsers/index.js');

describe('models', function () {

	var answers = {
		'how much is pish tegj glob glob ?': 'pish tegj glob glob is 42',
		'how many Credits is glob prok Silver ?': 'glob prok Silver is 68 Credits',
		'how many Credits is glob prok Gold ?': 'glob prok Gold is 57800 Credits',
		'how many Credits is glob prok Iron ?': 'glob prok Iron is 782 Credits',
		'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?': 'I have no idea what you are talking about'
	};

	it('should can answer complexQuestion', function () {

		for (var i = 0; i < context.questions.length; i++) {
			var question = context.questions[i];
			var answer = question.getAnswer(context.symbolDefines, context.unitCreditses);

			should(answer)
				.equal(answers[question.expression]);
		}
	});
});
