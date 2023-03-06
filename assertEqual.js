const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = '✅ Assertion Passed: ' + actual + ' === ' + expected;
  } else {
    output = '❌ Assertion Failed: ' + actual + ' !== ' + expected;
  } console.log(output);
};
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 5);
