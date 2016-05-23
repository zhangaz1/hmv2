'use strict';

var _ = require('lodash');

function outputQuestion(question) {
	console.log(question.getAnswer());
}

function outputQuestions(questions) {
	_.forEach(questions, function (question) {
		outputQuestion(question);
	});
}

/*
 *	输出问题答案
 */
module.exports = function (question) {
	var questions = [];
	questions = questions.concat(question);
	outputQuestions(questions);
};
