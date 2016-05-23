'use strict';

var type = require('./../config.js')
	.expressionTypes.complexQuestion;

var galaxyToArabic = require('./../calc/galaxyToArabic.js');
var Expression = require('./expression.js');

var context = require('./../context.js');

module.exports = ComplexQuestion;

/*
 *	复杂问题
 *			需要数量*单价的
 */
function ComplexQuestion(expression) {
	Expression.apply(this, arguments);

	this.type = type;
}

/*
 *	计算答案
 */
ComplexQuestion.prototype.getAnswer = function () {
	if (!this.answer) {
		try {
			var an = galaxyToArabic(this.count);
			this.countArabic = an;

			var metal = context.unitCreditses[this.metal];
			if (!metal) {
				throw new Error('The unitCredits never mentioned of ' + this.metal);
			}
			var uc = metal.getUnitCredits();

			this.total = an * uc;
			var answer = [this.count, this.metal, 'is', this.total, 'Credits'];
			this.answer = answer.join(' ');
		} catch (err) {
			context.errors.addError(err);
			this.answer = Expression.dontKonwAnswer;
		}
	}

	return this.answer;
};
