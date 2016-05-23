'use strict';

var should = require('should');
var _ = require('lodash');

var testDatas = require('./testData.js')
    .simpleQuestionExpressions;
var parse = require('./../../src/parsers/simpleQuestion.js');

describe('parsers.simpleQuestion', function () {

    it('should can parse simpleQuestion expression', function () {
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
