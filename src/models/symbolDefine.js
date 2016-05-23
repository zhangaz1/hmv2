'use strict';

var type = require('./../config.js')
	.expressionTypes.symbolDefine;

var Expression = require('./expression.js');

module.exports = SymbolDefine;

/*
 *	符号定义表达式	
 */
function SymbolDefine(expression) {
	Expression.apply(this, arguments);

	this.type = type;
}
