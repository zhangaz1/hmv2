'use strict';

var should = require('should');
var _ = require('lodash');

var testDatas = require('./testData.js')
    .creditsExpressions;
var parse = require('./../../src/parsers/unitCredits.js');

describe('parsers.unitCredits', function () {

    it('should can parse unitCredits expression', function () {
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
