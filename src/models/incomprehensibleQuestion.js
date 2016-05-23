'use strict';

var config = require('./../config.js');
var type = config.expressionTypes.incomprehensibleQuestion;

var Expression = require('./expression.js');

module.exports = IncomprehensibleQuestion;

/*
 *	无法理解的问题
 */
function IncomprehensibleQuestion(expression) {
	Expression.apply(this, arguments);

	this.type = type;
}

IncomprehensibleQuestion.prototype.getAnswer = function () {
	return Expression.dontKonwAnswer;
};
