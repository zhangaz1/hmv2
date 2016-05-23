'use strict';

var config = require('./../config.js');
var reg = config.expressionRegExps.symbolDefine;
var splitor = config.expressionRegExps.galaxyNumberSplitor;

var SymbolDefine = require('./../models/symbolDefine.js');

/*
 *	符号定义解析器
 */
module.exports = function (expression) {
	var model = new SymbolDefine(expression);

	var result = {
		match: false,
		result: model
	};

	if (reg.test(expression)) {
		var arr = expression.split(splitor);
		result.match = true;

		model.galaxySymbol = arr[0];
		model.romanSymbol = arr[2];
	}

	return result;
};
