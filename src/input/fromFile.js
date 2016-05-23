'use strict';

var config = require('./../config.js');
var fs = require('fs');
var questionMark = /[^\s]\?$/;

/*
 *	读取指定文件
 *			内容按换行拆分成数组
 *			忽略空行
 */
function readInputArr(filePath) {
	var data = fs.readFileSync(filePath, 'utf-8');

	var result = data.split(/\r?\n/);
	result = result.filter(function (line) {
		return line !== '';
	});

	return result;
}


function trim(str) {
	return str.replace(/^\s+|\s+$/g, '');
}

function replaceMultipleSpaceToOne(str) {
	return str.replace(/\s+/g, config.defaultSplitor);
}

function splitQuestMark(str) {
	if (questionMark.test(str)) {
		str = str.substr(0, str.length - 1) + ' ?';
	}
	return str;
}

function formatExpression(input) {
	var expression = trim(input);
	expression = splitQuestMark(input);
	expression = replaceMultipleSpaceToOne(input);
	return expression;
}


/*
 * 读取输入文件，返回按行构成的数组
 *    每一项做了前后空白清除，中间连续多空白合并为一个空白
 */
module.exports = function (filePath) {
	var result = readInputArr(filePath);
	result = result.map(formatExpression);
	return result;
};


/*
 * 此导出仅用于测试
 */
module.exports._test = {
	trim: trim,
	replaceMultipleSpaceToOne: replaceMultipleSpaceToOne,
	formatExpression: formatExpression
};
