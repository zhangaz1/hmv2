'use strict';

var type = require('./../config.js')
	.expressionTypes.simpleQuestion;

var Expression = require('./expression.js');
var galaxyToArabic = require('./../calc/galaxyToArabic.js');

/*
 *	简单问题
 */
function SimpleQuestion(expression) {
	Expression.apply(this, arguments);

	this.type = type;
}

SimpleQuestion.prototype.getAnswer = function () {
	if (!this.answer) {
		try {
			this.countArabic = galaxyToArabic(this.count);
			var answer = [this.count, 'is', this.countArabic];
			this.answer = answer.join(' ');
		} catch (err) {
			context.errors.addError(err);
			this.answer = Expression.dontKonwAnswer;
		}
	}

	return this.answer;
};

module.exports = SimpleQuestion;
