const head = function(inputArray) {
  return inputArray[0];
};
const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `❌ Assertion Failed: ${actual} !==  + ${expected}`;
  } console.log(output);
};
assertEqual(head([3,5,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));