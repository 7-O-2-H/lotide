const middle = require('../middle');
const assertArrayEqual = require('../assertArrayEqual');

console.log(middle([2,3,4,6]));
console.log(middle([1,2,3,4,5]));
assertArrayEqual(middle([2,4,5,6,7,8]),[5,6]);
assertArrayEqual(middle([1,2,3]), [2]);
console.log(middle([1,2]));
console.log(middle([1, 'hello',5, 'goodbye']));