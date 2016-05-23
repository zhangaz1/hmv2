'use strict';

var expressionTypes = require('./config.js');
var errors = require('./errors.js');
var Expression = require('./models/expression.js');

/*
 *	按分类存储的所有数据
 */
function Context(expressions) {
    this.errors = errors;

    this.init(expressions);
}

Context.prototype.init = function (expressions) {
    this.reset(expressions);
};

Context.prototype.reset = function (expressions) {
    expressions = expressions || [];

    this.symbolDefines = Expression.getSymbolDefines(expressions);
    this.unitCreditses = Expression.getUnitCrditses(expressions);
    this.questions = Expression.getQuestions(expressions);
    this.unkonwn = Expression.getExpressionsByType(expressions, expressionTypes.unkonwn);
};

module.exports = new Context();
