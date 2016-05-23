'use strict';

var should = require('should');
var _ = require('lodash');

var testDatas = require('./testData.js')
    .incomprehensibleQuestionExpression;
var parse = require('./../../src/parsers/incomprehensibleQuestion.js');

describe('parsers.incomprehensibleQuestion', function () {

    it('should can parse incomprehensibleQuestion expression', function () {
        var data;
        for (var i = 0; i < testDatas.length; i++) {
            data = testDatas[i];
            var result = parse(data.expression);

            should(result)
                .property('match')
                .is.true;

            should(result)
                .property('result')
                .eql(data);
        }
    });
});
