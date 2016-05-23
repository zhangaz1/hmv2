'use strict';

var config = require('./../config.js');
var reg = config.expressionRegExps.incomprehensibleQuestion;
var splitor = config.expressionRegExps.galaxyNumberSplitor;

var IncomprehensibleQuestion = require('./../models/incomprehensibleQuestion.js');

/*
 *	解析无法理解的问题
 */
module.exports = function (expression) {
	var model = new IncomprehensibleQuestion(expression);

	var result = {
		match: false,
		result: model
	};

	if (reg.test(expression)) {
		var arr = expression.split(splitor);
		result.match = true;
	}

	return result;
};
