const middle = function(array) {
  let outputArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return outputArray;
  }
  if (array.length % 2 === 0) {
    for (let i = midIndex - 1; i <= midIndex; i++) {
      outputArray.push(array[i]);
    }
  } else {
    outputArray.push(array[midIndex]);
  }
  return outputArray;
};

module.exports = middle;