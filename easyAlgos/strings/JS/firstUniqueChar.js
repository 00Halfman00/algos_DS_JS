/*
🧑‍💻 Challenge:
Write a function that takes a string and returns the first non-repeating character. If all characters repeat, return null.

💡 Example:

irst_unique_char("leetcode")   Output: 'l'
first_unique_char("aabbcc")    Output: None
first_unique_char("swiss")     Output: 'w'

*/

const firstUniqueChar = (str) => {
  const charMap = new Map(); // time complexity: O(1)
  // time complexity: O(n)
  for (char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1); // time complexity: O(1)
  }
  // time complexity: O(n)
  for (const [key, value] of charMap) {
    if (value === 1) return key; // time complexity: O(1)
  }
  return null; // time complexity: O(1)
};

// time complexity: O(n)
// space complexity: O(n)

console.log(firstUniqueChar('swiss'));
