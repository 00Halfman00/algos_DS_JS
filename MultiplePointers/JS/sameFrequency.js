/*
  Frequency Counter - sameFrequency
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.


Your solution MUST have the following complexities:
Time: O(N log N)


Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

      THEORY & PSEUDOCODE
  If one could sort the arrays, first, then a direct comparision can be made via a loop
  and two pointers: one pointer for the first number and a second for the second number.

DIAGRAM/TEST RUN:

{'1': 1, '8':1, '2': 1} == {'2': 1, '8':1, '1': 1} == True
*/

const sameFrequency = (first, second) => {
  (first = first + ''), (second = second + '');
  if (first.length !== second.length) return false;
  const one = [],
    two = [];
  for (let i = 0; i < first.length; ++i) {
    one[i] = +first[i];
    two[i] = +second[i];
  }
  one.sort((a, b) => a - b);
  two.sort((a, b) => a - b);

  for (let i = 0; i < one.length; ++i) {
    if (one[i] !== two[i]) return false;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
