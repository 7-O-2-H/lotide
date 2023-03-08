const findKeyByValue = function(obj, item) {
  let group = undefined;
  for (const items in obj) {
    if (obj[items] === item) {
      group = items;
    } 
  }
  return group;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));