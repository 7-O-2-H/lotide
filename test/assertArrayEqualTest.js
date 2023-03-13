// const assertArrayEqual = require('../assertArrayEqual');

// assertArrayEqual([1,2,3], [1,2,4]);
// assertArrayEqual([4,5,3], [1,2,4]);
// assertArrayEqual([1,2,3], [1,2,4,6]);
// assertArrayEqual([1,2,3], [1,2,3]);

const assert = require('chai').assert;
const assertArrayEqual = require('../assertArrayEqual');

describe("#assertArrayEqual", () => {
  it("returns true for [1, 2 ,3], [1, 2, 3]", () => {
    assert.strictEqual(assertArrayEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for [1,2,3], [1,2,4,6]", () => {
    assert.strictEqual(assertArrayEqual([1,2,3], [1,2,4,6]));
  });
  it("returns false for [1,2,3], [4,5,3]", () => {
    assert.strictEqual(assertArrayEqual([1,2,3], [4,5,3]));
  });
});