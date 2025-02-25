/*
🧑‍💻 Challenge:
Write a function that takes a string and returns the first non-repeating character. If all characters repeat, return null.

💡 Example:

irst_unique_char("leetcode")   Output: 'l'
first_unique_char("aabbcc")    Output: None
first_unique_char("swiss")     Output: 'w'

*/

const firstUniqueChar = (str) => {
  const charMap = new Map();
  for (char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (const [key, value] of charMap) {
    if (value === 1) return key;
  }
  return null;
};

console.log(firstUniqueChar('swiss'));
