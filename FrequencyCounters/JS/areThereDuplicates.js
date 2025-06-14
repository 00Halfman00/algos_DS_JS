/*
areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
To achieve the bonus time and space complexity, use multiple pointers


Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true


Restrictions:
Time - O(n)
Space - O(n)


Bonus:
Time - O(n log n)
Space - O(1)


        THEORY AND PSEUDOCODE
  If one could sort the array, first. Then duplicates would be contiguous inside array
  Specific to language, consider how sort would work...

  1   Use spread parameter to catch any number of arguments passed in
  2   Sort the arguemnts with built in sort method
  3   Iterate over the arguments array
      3.1   Return true if duplicates are found
  4.  Return false otherwise
*/

const areThereDuplicates = function (...args) {
  const frequencyCount = new Map();

  for (const val of args) {
    frequencyCount.set(val, (frequencyCount.get(val) || 0) + 1);
    if (frequencyCount.get(val) === 2) return true;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
