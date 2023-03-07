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
assertArrayEqual([1,2,3], [1,2,4]);
assertArrayEqual([4,5,3], [1,2,4]);
assertArrayEqual([1,2,3], [1,2,4,6]);
assertArrayEqual([1,2,3], [1,2,3]);