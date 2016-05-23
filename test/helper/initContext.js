
var dataPath = './test/models/testData.js';

var context = require('./../../src/context.js');
var input = require('./../../src/input/fromFile.js');
var parse = require('./../../src/parsers/index.js');

var inputs = input(dataPath);
var expressions = parse(inputs);
context.reset(expressions);