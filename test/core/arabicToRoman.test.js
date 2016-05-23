'use strict';

var should = require('should');
var _ = require('lodash');

var convert = require('./../../src/core/arabicToRoman.js');
var testData = require('./testData.js');

describe('cor.arabicToRoman', function () {

    it('should can convert toman to arabic', function () {
        _.forEach(testData.simpleData, function (data) {
            var rn = convert(data.an);
            should(rn)
                .equal(data.rn);
        });
    });

    it('invalid numbers should convert to NaN', function () {
        _.forEach(testData.toNaNRoman, function (data) {
            var rn = convert(data.an);
            should(rn).is.NaN;
        });
    });
});
