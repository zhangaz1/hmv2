'use strict';

exports.simpleData = [{
    an: 2006,
    rn: 'MMVI'
}, {
    an: 1944,
    rn: 'MCMXLIV'
}, {
    an: 3333,
    rn: 'MMMCCCXXXIII'
}, {
    an: 3999,
    rn: 'MMMCMXCIX'
}, {
    an: 0,
    rn: ''
}, {
    an: 9,
    rn: 'IX'
}, {
    an: 14,
    rn: 'XIV'
}, {
    an: 987,
    rn: 'CMLXXXVII'
}];


exports.toNaNRoman = [
    -5,
    4000,
    0.5,
    'a',
    '5a',
    'a5',
    NaN
];


exports.toNaNArabic = [
    'XXXX',
    'IIX',
    'a',
    '1'
];