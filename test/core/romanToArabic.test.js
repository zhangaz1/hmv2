'use strict';

var should = require('should');
var _ = require('lodash');

var convert = require('./../../src/core/romanToArabic.js');
var testData = require('./testData.js');

describe('core.romanToArabic', function () {

    it('should can convert roman to arabic', function () {
        _.forEach(testData.simpleData, function (data) {
            var rn = convert(data.rn);
            should(rn)
                .equal(data.an);
        });
    });

    it('invalid numbers should convert to NaN', function () {
        _.forEach(testData.toNaNArabic, function (item) {
            var an = convert(item);
            should(an).is.NaN;
        });
    });
});
