'use strict';

exports.symbolExpressions = [{
	expression: 'glob is I',
	romanSymbol: 'I',
	galaxySymbol: 'glob',
	type: 'symbolDefine'
}, {
	expression: 'prok is V',
	romanSymbol: 'V',
	galaxySymbol: 'prok',
	type: 'symbolDefine'
}, {
	expression: 'pish is X',
	romanSymbol: 'X',
	galaxySymbol: 'pish',
	type: 'symbolDefine'
}, {
	expression: 'tegj is L',
	romanSymbol: 'L',
	galaxySymbol: 'tegj',
	type: 'symbolDefine'
}];

exports.creditsExpressions = [{
	expression: 'glob glob Silver is 34 Credits',
	metal: 'Silver',
	count: 'glob glob',
	total: 34,
	type: 'unitCredits'
}, {
	expression: 'glob prok Gold is 57800 Credits',
	metal: 'Gold',
	count: 'glob prok',
	total: 57800,
	type: 'unitCredits'
}, {
	expression: 'pish pish Iron is 3910 Credits',
	metal: 'Iron',
	count: 'pish pish',
	total: 3910,
	type: 'unitCredits'
}];

exports.simpleQuestionExpressions = [{
	expression: 'how much is pish tegj glob glob ?',
	count: 'pish tegj glob glob',
	type: 'simpleQuestion'
}];

exports.complexQuestionExpressions = [{
	expression: 'how many Credits is glob prok Silver ?',
	count: 'glob prok',
	metal: 'Silver',
	type: 'complexQuestion'
}, {
	expression: 'how many Credits is glob prok Gold ?',
	count: 'glob prok',
	metal: 'Gold',
	type: 'complexQuestion'
}, {
	expression: 'how many Credits is glob prok Iron ?',
	count: 'glob prok',
	metal: 'Iron',
	type: 'complexQuestion'
}];

exports.incomprehensibleQuestionExpression = [{
	expression: 'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?',
	type: 'incomprehensibleQuestion'
}];
