'use strict';

var splitor = require('./config.js')
	.expressionRegExps.galaxyNumberSplitor;

var Expression = require('./models/Expression.js');

var allRomanSymbols = require('./core/config.json')
	.symbols;
var expressionTypes = require('./config.js')
	.expressionTypes;

/*
 *	按类别验证表达式
 *			1：SD中的RomanSymbol应该在RomanSymbol范围内
 *			2：UC和Q中用的GalaxySymbol应该在SD定义范围内
 *			3：Q中用到的Metal应该在UC定义范围内
 *			4：无法识别的表达式也会导致校验失败
 */
module.exports = function (expressions) {
	var result = {
		available: true,
		errors: []
	};

	var sds = Expression.getSymbolDefines(expressions);

	validateSymbolDefines(result, expressions);
	validateUniteCredits(result, expressions, sds);
	validateQuestions(result, expressions, sds);
	validateUnknowns(result, expressions);

	return result;
};

/*
 *	验证Galaxy符号定义（对应RomanSymbol必须在配置的RomanSymbol范围内）
 */
function validateSymbolDefines(result, expressions) {
	var sds = Expression.getExpressionsByType(expressions, expressionTypes.symbolDefine);
	for (var i = 0; i < sds.length; i++) {
		var sd = sds[i];

		if (allRomanSymbols.indexOf(sd.romanSymbol) < 0) {
			result.available = false;
			result.errors.push({
				error: sd.romanSymbol + ' not a available romanSymbol',
				expression: sd.expression
			});
		}
	}
}

/*
 *	验证UnitCredits定义中用到的GalaxySymbol是不是在SD中定义了
 */
function validateUniteCredits(result, expressions, sds) {
	var ucs = Expression.getExpressionsByType(expressions, expressionTypes.unitCredits);
	for (var i = 0; i < ucs.length; i++) {
		var uc = ucs[i];
		validateGalaxySymbols(result, uc.count, sds);
	}
}

/*
 *	验证某个GalaxySymbol是否在SD中定义了
 */
function validateGalaxySymbols(result, galaxyNumber, sds) {
	var galaxySymbols = galaxyNumber.split(splitor);
	var gs;
	for (var i = 0; i < galaxySymbols.length; i++) {
		gs = galaxySymbols[i];

		if (!sds.hasOwnProperty(gs)) {
			result.available = false;
			result.errors.push({
				error: gs + ' not a available romanSymbol'
			});
		}
	}
}

/*
 *	验证Question中用到的galaxySymbol是否在SD中定义了，用到的Metal是否在UC中定义过
 */
function validateQuestions(result, expressions, sds) {
	var unitCreditses = Expression.getUnitCrditses(expressions);

	var questions = Expression.getQuestions(expressions);
	for (var i = 0; i < questions.length; i++) {
		var question = questions[i];
		if (question.hasOwnProperty('count')) {
			validateGalaxySymbols(result, question.count, sds);
		}

		if (question.hasOwnProperty('metal') &&
			!unitCreditses.hasOwnProperty(question.metal)) {
			result.available = false;
			result.errors.push({
				error: question.metal + ' never mentioned in unitCredits'
			});
		}
	}
}

/*
 *	验证是否有Unkonwn类型表达式
 */
function validateUnknowns(result, expressions) {
	var unkonwns = Expression.getExpressionsByType(expressions, expressionTypes.unkonwn);

	if (unkonwns.length > 0) {
		result.available = false;
	}

	for (var i = 0; i < unkonwns.length; i++) {
		var uk = unkonwns[i];
		result.errors.push({
			error: 'unkonwn expression: ' + uk,
			expression: uk.expression
		});
	}
}
