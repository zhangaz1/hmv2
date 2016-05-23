'use strict';

var splitor = require('./../config.js')
    .expressionRegExps.galaxyNumberSplitor;
var romanToArabic = require('./../core/romanToArabic.js');

var context = require('./../context.js');

/*
 *	实现银河数字向罗马数字转换
 */
function galaxyToRoman(galaxyNumber) {
    var gn = String(galaxyNumber);

    try {
        var rn = gn
            .split(splitor)
            .map(function (galaxySymbol) {
                var sd = context.symbolDefines[galaxySymbol];
                if (sd) {
                    return sd.romanSymbol;
                } else {
                    throw new Error('has not defined galaxy symbol: ' + galaxySymbol);
                }
            })
            .join('');
    } catch (err) {
        context.errors.addError(err);
        rn = NaN;
    }

    return rn;
}

/*
 * 实现银河数字向阿拉伯数字转换
 */
module.exports = function (galaxyNumber) {
    var rn = galaxyToRoman(galaxyNumber);
    var an = romanToArabic(rn);
    return an;
};


/*
 *	此导出仅用于测试
 */
module.exports._test = {
    galaxyToRoman: galaxyToRoman
};
