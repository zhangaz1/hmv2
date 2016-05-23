'use strict';

var config = require('./config.json');
var symbols = config.symbols + '  '; // 最大级别时会向后取两位

var arabicToRoman = require('./arabicToRoman.js');

var compositeSymbols = createCompositeSymbols();

/*
 *   查找指定层的罗马数字并转成阿拉伯数字
 */
function romanToArabicOneLevel(level, context) {
    var levelSymbols = compositeSymbols[level];

    // 从9到1探测
    for (var i = 0; i < levelSymbols.length; i++) {
        if (context.rn.length === 0) {
            break;
        }

        var compositeSymbol = levelSymbols[i];
        if (startWith(context.rn, compositeSymbol.rn)) {
            context.an += compositeSymbol.an;
            context.rn = context.rn.substr(compositeSymbol.rn.length);
            break;
        }
    }
}

/*
 *	实现罗马数字向阿拉伯数字转换
 */
module.exports = function(romanNumber) {
    var context = {
        an: 0,
        rn: String(romanNumber)
            .replace(/\s+/g, '')
            .toUpperCase()
    };

    // 从高到底逐层探测
    for (var level = 0; level < compositeSymbols.length; level++) {
        romanToArabicOneLevel(level, context);
    }

    if (context.rn.length !== 0) {
        // throw new Error('not an available RomanNumber');
        return NaN; // 无法转换的数字
    }

    return context.an;
};

function startWith(source, prefix) {
    if (prefix === null || prefix === "" ||
        source.length === 0 || prefix.length > source.length) {
        return false;
    } else {
        return source.substr(0, prefix.length) === prefix;
    }
}

/*
 *  正常罗马符号（非NaN）
 */
function formalRomanNumber(item) {
    return item.rn === item.rn;
}

/*
 *   创建一层码表（1-9）
 */
function createOneLeveSymbols(level) {
    var base = Math.pow(10, level);
    var symbols = [];

    // 每层1-9
    for (var n = 1; n <= 9; n++) {
        var an = n * base;
        symbols.push({
            rn: arabicToRoman(an),
            an: an
        });
    }

    symbols = symbols.filter(formalRomanNumber);
    symbols.reverse();

    return symbols;
}

/*
 *	构造类似如下二维数组
 *
 *[ [ { rn: 'MMM', an: 3000 },
 *    { rn: 'MM', an: 2000 },
 *    { rn: 'M', an: 1000 } ],
 *  [ { rn: 'CM', an: 900 },
 *	...
 *    { rn: 'VI', an: 6 },
 *    { rn: 'V', an: 5 },
 *    { rn: 'IV', an: 4 },
 *    { rn: 'II', an: 2 },
 *    { rn: 'III', an: 3 },
 *  { rn: 'I', an: 1 } ] ]
 */
function createCompositeSymbols() {
    var result = [];

    var maxLevel = Math.floor(symbols.length / 2);

    // 按层构建
    for (var level = 0; level < maxLevel; level++) {
        result.push(createOneLeveSymbols(level));
    }

    result.reverse();

    return result;
}
