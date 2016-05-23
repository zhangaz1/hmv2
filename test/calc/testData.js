'use strict';

exports.testDatas = [{
	galaxy: 'glob glob',
	roman: 'II',
	arabic: 2
}, {
	galaxy: 'glob prok',
	roman: 'IV',
	arabic: 4
}, {
	galaxy: 'pish pish',
	roman: 'XX',
	arabic: 20
}, {
	galaxy: 'pish tegj glob glob',
	roman: 'XLII',
	arabic: 42
}];


exports.toNaNRoman = [
	-5,
	4000,
	0.5,
	'a',
	'5a',
	'a5',
	NaN,
	'dog',
	'dog dog'
];

exports.toNaNArabic = [
	NaN,
	'glob glob glob glob',
	'prok pish'
];

exports.symbolDefines = {
	glob: {
		type: 'symbolDefine',
		expression: 'glob is I',
		galaxySymbol: 'glob',
		romanSymbol: 'I'
	},
	prok: {
		type: 'symbolDefine',
		expression: 'prok is V',
		galaxySymbol: 'prok',
		romanSymbol: 'V'
	},
	pish: {
		type: 'symbolDefine',
		expression: 'pish is X',
		galaxySymbol: 'pish',
		romanSymbol: 'X'
	},
	tegj: {
		type: 'symbolDefine',
		expression: 'tegj is L',
		galaxySymbol: 'tegj',
		romanSymbol: 'L'
	}
};

exports.metals = [{
	expression: 'glob glob Silver is 34 Credits',
	metal: 'Silver',
	count: 'glob glob',
	total: 34,
	countArabic2: 2,
	unitCredits2: 17,
	type: 'unitCredits'
}, {
	expression: 'glob prok Gold is 57800 Credits',
	metal: 'Gold',
	count: 'glob prok',
	total: 57800,
	countArabic2: 4,
	unitCredits2: 14450,
	type: 'unitCredits'
}, {
	expression: 'pish pish Iron is 3910 Credits',
	metal: 'Iron',
	count: 'pish pish',
	total: 3910,
	countArabic2: 20,
	unitCredits2: 195.5,
	type: 'unitCredits'
}];


exports.simpleQuestions = [{
	expression: 'how much is pish tegj glob glob ?',
	count: 'pish tegj glob glob',
	countArabic2: 42,
	type: 'simpleQuestion'
}];

exports.complexQuestions = [{
	expression: 'how many Credits is glob prok Silver ?',
	count: 'glob prok',
	metal: 'Silver',
	countArabic2: 4,
	total2: 68,
	type: 'complexQuestion'
}, {
	expression: 'how many Credits is glob prok Gold ?',
	count: 'glob prok',
	metal: 'Gold',
	countArabic2: 4,
	total2: 57800,
	type: 'complexQuestion'
}, {
	expression: 'how many Credits is glob prok Iron ?',
	count: 'glob prok',
	metal: 'Iron',
	countArabic2: 4,
	total2: 782,
	type: 'complexQuestion'
}];
