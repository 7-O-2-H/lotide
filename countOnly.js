const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }

    if (!result[item]) {
      result[item] = 0;
    }
    

    result[item]++;
  }

  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));
// assertEqual to test countOnly
/* const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = '✅ Assertion Passed: ' + actual + ' === ' + expected;
  } else {
    output = '❌ Assertion Failed: ' + actual + ' !== ' + expected;
  } console.log(output);
};

//Test cases
*/

/*
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
*/