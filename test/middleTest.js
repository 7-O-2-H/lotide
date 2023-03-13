// const middle = require('../middle');
// const assertArrayEqual = require('../assertArrayEqual');

// console.log(middle([2,3,4,6]));
// console.log(middle([1,2,3,4,5]));
// assertArrayEqual(middle([2,4,5,6,7,8]),[5,6]);
// assertArrayEqual(middle([1,2,3]), [2]);
// console.log(middle([1,2]));
// console.log(middle([1, 'hello',5, 'goodbye']));

const middle = require("../middle");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3, 4] for [2,3,4,5]", () => {
    assert.deepEqual(middle([2, 3, 4, 5]), [3, 4]);
  });
  it("returns [5,6] for [2,4,5,6,7,8])", () => {
    assert.deepEqual(middle([2,4,5,6,7,8]),[5,6]);
  });
});