# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joshkelly/lotide`

**Require it:**

`const _ = require('@ujoshkelly/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertEqualArray)`: asserts whether two given arrays are equal
* `function2(assertEqual)`: asserts whether two given peiced of primitive data type are equal 
* `function3(assertObjectEqual)`: asserts whether two given objects are equal
* `function4(countLetters)`: returns an object indicating the number of occurrences of each letter in a given string
* `function5(countOnly)`: returns an object giving the # of instances of peice of data in an array
* `function6(eqArrays)`: determines if two given arrays are equal
* `function7(eqObjects)`: determines if two given objects are equal
* `function8(findKey)`: returns the first key of a sub object whose value is the given value
* `function9(findKeyByValue)`: returns the key of a given value
* `function10(flatten)`: returns an array of elements from a given array including nested array(s)
* `function11(head)`: returns the first value in an array
* `function12(letterPositinons)`: returns an object containing the position(s) of each letter in a given string
* `function13(map)`: modifies each element of an array by a given function and returns the altered elements in san array
* `function14(middle)` returns the middle elment(s) of an array; returns an empty array if the given array is too short to have a middle
* `function15(tail)`: returns the tail (elements after the initial element) of a given array
* `function16(takeUntil)`: returns an array from from the beginnind of a given array until an element of the given array that satisfies a given condition
* `function17(without)`: returns an array of elements equal to a given array without the given elements to exclude