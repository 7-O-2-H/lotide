const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const keys = sentence.charAt(i);
    if (!results[keys]) {
      results[keys] = [];
      results[keys].push(i);
    } else {
      results[keys].push(i);
    }
  }
  return results;
};
//console.log(letterPositions('hello how are you today'));

module.exports = letterPositions;