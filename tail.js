const assertEqual = require('./assertEqual'); 
  
const tail = function(inputArray) {
  
  return inputArray.slice(1);
  
};

module.exports = tail;