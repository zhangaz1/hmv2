'use strict';

module.exports = {
	defaultDataFile: './testData.txt',

	defaultSplitor: ' ',

	expressionRegExps: {
		galaxyNumberSplitor: /\s+/,

		symbolDefine: /^\w+ is [IVXLCDM]$/,

		unitCredits: /^((\w+) )+is \d+ Credits$/,

		simpleQuestion: /^how much is ((\w+) )+\?$/,
		complexQuestion: /^how many Credits is ((\w+) ){2,}\?$/,
		incomprehensibleQuestion: /.*/ // /^how ((\w+) )*\?$/
	},
	expressionTypes: {
		expression: 'expression',

		symbolDefine: 'symbolDefine',

		unitCredits: 'unitCredits',

		simpleQuestion: 'simpleQuestion',
		complexQuestion: 'complexQuestion',
		incomprehensibleQuestion: 'incomprehensibleQuestion',

		unkonwn: 'unkonwn'
	},

	dontKonwAnswer: 'I have no idea what you are talking about'
};
