const assertArrayEqual = function (arrayOne, arrayTwo) {

  let arraysAreEqual = true;

  if (arrayOne.length !== arrayTwo.length) {
    arraysAreEqual = false;
    return console.log('❌ Assertion Failed! The arrays are not equal. They have different lengths');
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return console.log(`❌ Assertion Failed! Array element # ${i} is not equal in both arrays: ${arrayOne[i]} does not equal ${arrayTwo[i]}`);
      
    }
  } 
  
  return console.log('✅ Assertion Passed! The arrays are equal!');

};

module.exports = assertArrayEqual;