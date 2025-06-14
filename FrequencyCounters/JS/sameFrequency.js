/*
  Frequency Counter - sameFrequency
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.


Your solution MUST have the following complexities:
Time: O(N)


Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

      THEORY & PSEUDOCODE
  Create hash map for the frequency count of each digit for both numbers.
  If both hash maps contain the same key:value pairs, they have the same frequency of digits

  1.  Check if both numbers do not have the same length
      return false
  2.  Declare and Initiate both hash maps (one for each argument/number)
  3.  return the equality of both hash maps


  {'1': 1, '8':1, '2': 1} == {'2': 1, '8':1, '1': 1} == true

  time and space  complexity: O(N)
*/

const sameFrequency = (first, second) => {
  const firstFrequencyCount = new Map();
  const secondFrequencyCount = new Map();
  (first = first + ''), (second = second + '');
  if (first.length !== second.length) return false;
  // fill frequencies
  for (let i = 0; i < first.length; ++i) {
    firstFrequencyCount.set(
      first[i],
      (firstFrequencyCount.get(first[i]) || 0) + 1
    );
    secondFrequencyCount.set(
      second[i],
      (secondFrequencyCount.get(second[i]) || 0) + 1
    );
  }
  // check for equal keys and values
  for ([key, val] of firstFrequencyCount) {
    if (!secondFrequencyCount.has(key)) return false;
    if (secondFrequencyCount.get(key) !== val) return false;
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
