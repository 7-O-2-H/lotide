const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `❌ Assertion Failed: ${actual} !==  + ${expected}`;
  } console.log(output);
};
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayOne.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);