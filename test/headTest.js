const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([3,5,7], 1));
assertEqual(head(["Hello", "Lighthouse", "Labs"], "Hello"));