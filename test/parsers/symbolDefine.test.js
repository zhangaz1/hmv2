'use strict';

var should = require('should');
var _ = require('lodash');

var testDatas = require('./testData.js')
    .symbolExpressions;
var parse = require('./../../src/parsers/symbolDefine.js');

describe('parsers.symbolDefine', function () {

    it('should can parse symbolDefine expression', function () {
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
