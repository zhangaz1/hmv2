'use strict';

var config = require('./../config.js');
var reg = config.expressionRegExps.complexQuestion;
var splitor = config.expressionRegExps.galaxyNumberSplitor;

var ComplexQuestion = require('./../models/complexQuestion.js');

/*
 *	复杂问题解析器
 */
module.exports = function (expression) {
	var model = new ComplexQuestion(expression);

	var result = {
		match: false,
		result: model
	};

	if (reg.test(expression)) {
		var arr = expression.split(splitor);
		result.match = true;

		model.count = arr.slice(4, arr.length - 2)
			.join(config.defaultSplitor);
		model.metal = arr[arr.length - 2];
	}

	return result;
};
