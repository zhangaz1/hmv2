'use strict';

var config = require('./../config.js');
var reg = config.expressionRegExps.unitCredits;
var splitor = config.expressionRegExps.galaxyNumberSplitor;

var UnitCredits = require('./../models/unitCredits.js');

/*
 *	价值表达式解析器
 */
module.exports = function (expression) {
	var model = new UnitCredits(expression);

	var result = {
		match: false,
		result: model
	};

	if (reg.test(expression)) {
		var arr = expression.split(splitor);
		result.match = true;

		model.count = arr.slice(0, arr.length - 4)
			.join(config.defaultSplitor);

		model.metal = arr[arr.length - 4];
		model.total = parseInt(arr[arr.length - 2]);
	}

	return result;
};
