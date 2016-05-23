'use strict';

var config = require('./config.json');
var symbols = config.symbols + '  '; // 最大级别时会向后取两位

function getSymbol(position) {
    return position >= symbols.length ?
        ' ' :
        symbols[position];
}

/*
 * 将一位阿拉伯数字转为罗马数字
 */
function arabicToRomanSingleDigital(an, position) {
    if (an === 0) {
        return '';
    }

    //if (an > 9 || an < 0) {
    //    throw new Error('an: ' + an + ' out of range: 0-9');
    //}
    //
    //if (position < 0) {
    //    throw new Error('position: ' + postion + ' out of range > 0');
    //}

    var start = position * 2;
    var rn = config.baseNumberTemplates[an - 1]
        .replace(/1/g, symbols[start])
        .replace(/2/g, symbols[start + 1])
        .replace(/3/g, symbols[start + 2]);

    return rn;
}


/*
 *	实现阿拉伯数字转罗马数字功能
 */
module.exports = function (arabicNumber) {
    var an = Number(arabicNumber);
    if (isNaN(an)) { // 非法阿拉伯数字
        return NaN;
        //throw new Error('arabicNumber: ' + arabicNumber + ' is not avalible arabicNumber');
    }

    if (/\.|\-/g.test(an.toString())) {
        return NaN;
    }

    var rm = an
        .toString()
        .split('')
        .reverse()
        .map(function (ch, i) {
            return arabicToRomanSingleDigital(ch - '0', i);
        })
        .reverse()
        .join('');

    if (/ /g.test(rm)) { // 无法表示的罗马数字（目前范围内）
        return NaN;
        //throw new Error('arabicNumber: ' + arabicNumber + ' is too greate for current system.');
    }

    return rm;
};
