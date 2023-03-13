const tail = require('../tail');
const assertArraysEqual = require('../assertArrayEqual');
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

assertArraysEqual(result, ["Lighthouse", "Labs"]);