'use strict';

var unkonwn = require('./../config.js')
	.expressionTypes.unkonwn;

var parsers = [
  require('./symbolDefine.js'),
  require('./unitCredits.js'),
  require('./simpleQuestion.js'),
  require('./complexQuestion.js'),
  require('./incomprehensibleQuestion.js')
];

/*
 *	解析过程主控
 */
module.exports = function (expressions) {
	var result = expressions.map(parseExpression);
	return result;
};

function parseExpression(expression) {
	for (var i = 0; i < parsers.length; i++) {
		var parse = parsers[i];
		var result = parse(expression);
		if (result.match) {
			return result.result;
		}
	}

	return {
		expression: expression,
		type: unkonwn
	};
}
