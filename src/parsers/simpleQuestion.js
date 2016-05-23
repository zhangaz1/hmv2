'use strict';

var config = require('./../config.js');
var reg = config.expressionRegExps.simpleQuestion;
var splitor = config.expressionRegExps.galaxyNumberSplitor;

var SimpleQuestion = require('./../models/simpleQuestion.js');

/*
 *	简单问题解析器
 */
module.exports = function (expression) {
	var model = new SimpleQuestion(expression);

	var result = {
		match: false,
		result: model
	};

	if (reg.test(expression)) {
		var arr = expression.split(splitor);
		result.match = true;

		model.count = arr.slice(3, arr.length - 1)
			.join(config.defaultSplitor);
	}

	return result;
};
