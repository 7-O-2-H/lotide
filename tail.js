const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `❌ Assertion Failed: ${actual} !==  + ${expected}`;
  } console.log(output);
};

const tail = function(inputArray) {
  return inputArray.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);