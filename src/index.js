'use strict';

var fs = require('fs');
var config = require('./config.js');

var context = require('./context.js');
var validate = require('./validate.js');

var input = require('./input/fromFile.js');
var parse = require('./parsers/index.js');

var output = require('./output.js');


function getFilePath() {
	var inputFilePath = config.defaultDataFile;

	if (process.argv.length > 2) {
		var path = process.argv[2];
		if (fs.existsSync(path)) {
			inputFilePath = path;
		} else {
			throw new Error('not found file: ' + path);
		}
	}

	return inputFilePath;
}

function outputErrors() {
	return process.argv.length > 3 &&
		process.argv[3].toLowerCase() === 'true';
}

function logValidateErrors(validateResult) {
	if (validateResult.errors.length > 0) {
		console.log('-----------------------------');
		console.log('Validate Errors:');
		console.log(validateResult.errors);
	}
}

function logRunErrors() {
	if (context.errors.getErrors()
		.length > 0) {
		console.log('-----------------------------');
		console.log('run errors:');
		context.errors.logAllErrors(console.log);
	}
}

function main() {
	try {
		var inputFilePath = getFilePath();

		var inputs = input(inputFilePath);
		var expressions = parse(inputs);

		var validateResult = validate(expressions);

		context.reset(expressions);
		output(context.questions, context.symbolDefines, context.unitCreditses);

		if (outputErrors()) {
			logValidateErrors(validateResult);
			logRunErrors();
		}
	} catch (err) {
		context.errors.addError(err);
		context.errors.logError(err, console.log);
	}
}


main();
