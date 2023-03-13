const countLetters = function(str) {
  const result = {};
  for (const letter of str) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 0;
      result[letter]++;
    }
  }
  return result;
};
//console.log(countLetters('lighthouse'));

module.exports = countLetters;