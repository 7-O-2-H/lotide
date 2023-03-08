const without = function(source, itemsToRemove) {
  let withoutArray = [];
  let arrayBuffer = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        delete arrayBuffer[i];
        i++;
      }
    }
  }
  for (let i = 0; i < arrayBuffer.length; i++) {
    if (arrayBuffer[i] !== undefined) {
      withoutArray.push(arrayBuffer[i]);
    }
  }
  return withoutArray;
};
console.log(without([1,2,'5',3,'4'], ['4',2]));
