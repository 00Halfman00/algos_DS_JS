/*
  Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1


Time Complexity - O(n)


THEORY, STRATEGY AND PSEUDOCODE

THEORY
  A hash map can be used to keep a frequency of elements

STRATEGY
  Use a hash map to keep track of existing elements

PSEUDO STEPS
1   Create array to return
2   Check for existence of elements
3   Create a hash map to keep track of elements in array
4   Iterate over array
    4.1   If element doesn't exist in hash map
          4.1.1   Enter it as a key in hash map
    4.2   If element exist in hash map
          4.2.1   Push it onto array
5   Return array

*/

const findAllDuplicates = (numsArr) => {
  const resp = [];
  if (numsArr.length) {
    const hashMap = new Map();
    for (const num of numsArr) {
      if (!hashMap.has(num)) hashMap.set(num, true);
      else resp.push(num);
    }
  }
  return resp;
};

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [ 2, 3 ]
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // [ 3, 2, 1 ]
