const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1)) {
      if (!Array.isArray(val2)) {
        return false;
      } else if (!eqArrays(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const person1 = {height: 5.9, weight: 170};
const person2 = {height: 5.9, weight: 171};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  let output = '';
  if (result) {
    output = `✅ Assertion Passed:  ${inspect(actual)}  ===  ${inspect(expected)}`;
  } else {
    output = `❌ Assertion Failed:  ${inspect(actual)}  !==  ${inspect(expected)}`;
  }
  console.log(output);
};

//assertObjectsEqual(person1, person2);

module.exports = assertObjectsEqual;
module.exports = eqArrays;
module.exports = eqObjects;

