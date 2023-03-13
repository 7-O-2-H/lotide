const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
  }

  return console.log('❌ Assertion Failed: ' + actual + ' !== ' + expected);

};

assertEqual("lighthouse labs", "lighthouse labs");
assertEqual(1, 5);
assertEqual((2 + 4), 6);

module.exports = assertEqual;