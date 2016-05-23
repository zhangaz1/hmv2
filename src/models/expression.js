'use strict';

var config = require('./../config.js');
var expressionTypes = config.expressionTypes;

module.exports = Expression;

/*
 * 表达式（每一行输入都是一个表达式）
 */
function Expression(expression) {
	this.type = expressionTypes.expression;

	this.expression = expression;
}

Expression.dontKonwAnswer = config.dontKonwAnswer;

/*
 *	从列表中选取指定类型表达式
 */
Expression.getExpressionsByType = function (expressions, type) {
	return expressions.filter(function (expression) {
		return expression.type === type;
	});
};

/*
 *	从列表中选取所有问题
 */
Expression.getQuestions = function (expressions) {
	return expressions.filter(function (expression) {
		return expression.type === expressionTypes.simpleQuestion ||
			expression.type === expressionTypes.complexQuestion ||
			expression.type === expressionTypes.incomprehensibleQuestion;
	});
};

/*
 *	选取符号定义表达式
 *			以字典形式返回
 */
Expression.getSymbolDefines = function (expressions) {
	var result = {};
	var symbolDefines = Expression.getExpressionsByType(expressions, expressionTypes.symbolDefine);
	for (var i = 0; i < symbolDefines.length; i++) {
		var sd = symbolDefines[i];
		result[sd.galaxySymbol] = sd;
	}
	return result;
};

/*
 *	选取价值定义表达式
 *			以字典形式返回
 */
Expression.getUnitCrditses = function (expressions) {
	var result = {};
	var unitCreditses = Expression.getExpressionsByType(expressions, expressionTypes.unitCredits);
	for (var i = 0; i < unitCreditses.length; i++) {
		var uc = unitCreditses[i];
		result[uc.metal] = uc;
	}
	return result;
};
