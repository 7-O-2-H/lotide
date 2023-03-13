// const tail = require('../tail');
// const assertArraysEqual = require('../assertArrayEqual');
// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertArraysEqual(result, ["Lighthouse", "Labs"]);

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});