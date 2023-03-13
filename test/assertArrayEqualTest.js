const assertArrayEqual = require('../assertArrayEqual');

assertArrayEqual([1,2,3], [1,2,4]);
assertArrayEqual([4,5,3], [1,2,4]);
assertArrayEqual([1,2,3], [1,2,4,6]);
assertArrayEqual([1,2,3], [1,2,3]);