const tail = require('../tail');
const assertArraysEqual = require('../assertArrayEqual');
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertArraysEqual(result, ["Lighthouse", "Labs"]);