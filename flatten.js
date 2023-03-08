const assertArrayEqual = function (arrayOne, arrayTwo) {
  let arraysAreEqual = true;
  if (arrayOne.length !== arrayTwo.length) {
    arraysAreEqual = false;
    console.log('❌ Assertion Failed! The arrays are not equal. They have different lengths');
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`❌ Assertion Failed! Array element # ${i} is not equal in both arrays: ${arrayOne[i]} does not equal ${arrayTwo[i]}`);
      arraysAreEqual = false;
    }
  }
  if (arraysAreEqual) {
    console.log('✅ Assertion Passed! The arrays are equal!');
  }
};
const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `❌ Assertion Failed: ${actual} !==  + ${expected}`;
  } console.log(output);
};
const eqArrays = function (arrayOne, arrayTwo) {
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
const flatten = function(arr) {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++)
        flattenedArr.push(arr[i][j]);
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};
