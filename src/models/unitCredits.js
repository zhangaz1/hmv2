'use strict';

var type = require('./../config.js')
    .expressionTypes.unitCredits;

var Expression = require('./expression.js');
var galaxyToArabic = require('./../calc/galaxyToArabic.js');

module.exports = UnitCredits;

/*
 *	价值定义表达式
 */
function UnitCredits(expression) {
    Expression.apply(this, arguments);

    this.type = type;
}

UnitCredits.prototype.getUnitCredits = function () {
    if (!this.unitCredits) {
        var an = galaxyToArabic(this.count);

        this.countArabic = an;
        this.unitCredits = this.total / an;
    }
    return this.unitCredits;
};
