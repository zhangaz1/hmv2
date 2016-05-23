'use strict';

var should = require('should');
var _ = require('lodash');

require('./../helper/initContext.js');

var testData = require('./testData.js');

var galaxyToArabic = require('./../../src/calc/galaxyToArabic.js');
var galaxyToRoman = galaxyToArabic._test.galaxyToRoman;

require('./../helper/initContext.js');

describe('calc', function () {

    describe('galaxyToRoman', function () {

        it('should can convert galaxy to roman', function () {
            _.forEach(testData.testDatas, function (data) {
                var rn = galaxyToRoman(data.galaxy);
                should(rn)
                    .equal(data.roman);
            });
        });

        it('invalid numbers should convert to NaN', function () {
            _.forEach(testData.toNaNRoman, function (gn) {
                var rn = galaxyToRoman(gn);
                should(rn).is.NaN;
            });
        });
    });

    describe('galaxyToArabic', function () {

        it('should can convert galaxy to arabic', function () {
            _.forEach(testData.testDatas, function (data) {
                var an = galaxyToArabic(data.galaxy);
                should(an)
                    .equal(data.arabic);
            });
        });

        it('invalid numbers should convert to NaN', function () {
            _.forEach(testData.toNaNArabic, function (gn) {
                var an = galaxyToArabic(gn);
                should(an).is.NaN;
            });
        });
    });
});
