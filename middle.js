const assertArrayEqual = function(arrayOne, arrayTwo) {
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

const middle = function(array) {
  let outputArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length < 2) {
    return outputArray;
  }
  if (isArrayEven(array)) {
    for (let i = midIndex - 1; i <= midIndex; i++) {
      outputArray.push(array[i]);
    }
  } else {
    outputArray.push(array[midIndex]);
  }
  return outputArray;
};

const isArrayEven = function(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isArrayEven([3,5,6]));
console.log(isArrayEven([2,3,4,5]));
console.log(middle([2,3,4,6]));
console.log(middle([1,2,3,4,5]));
assertArrayEqual(middle([2,4,5,6,7,8]),[5,6]);
assertArrayEqual(middle([1,2,3]), [2]);
console.log(middle([1,2]));
console.log(middle([1, 'hello',5, 'goodbye']));