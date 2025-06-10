/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters.
The function should return true if the message can be built with the letters that you are given,
or it should return false.
Assume that there are only lowercase letters and no space or special characters
in both the message and the letters.


Bonus Constraints:
If M is the length of message and N is the length of letters:
Time Complexity: O(M+N)
Space Complexity: O(N)


Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true


          THEORY & PSEUDOCODE
    If the right letters are passed in, one should be able to construct the message

1   Declare and initiate a new Map object
2   Iterate over letters  O(M)
    2.1   keep a frequency count of each unique letter
3   Iterate over mesage   O(N)
        3.1   Check if the char is not in Map object or has a value of zero
              3.1.1   return false
        3.1   Else detract 1 from the value of that char in Map object
4   return true

  time complexity: O(M+N)


DIAGRAM/TEST RUN
INPUT: message1 = 'abc',  letters1 = 'dcba'

1   loop over letters
    1.1   create a hash count of each character
          lettersCountHash = { a: 1, b: 1, c: 1, d: 1},

2   loop over message
    char = 'a'
    2.1   check if current char is not in hash map or has a value of zero in hash map
          return false
    2.2   else subtract 1 from the value of the frequency count for that char in hash map
          lettersCountHash = { a: 0, b: 1, c: 1, d: 1}
    char = 'b'
    2.3   check if current char is not in hash map or has a value of zero in hash map
          return false
    2.4   else subtract 1 from the value of the frequency count for that char in hash map
          lettersCountHash = { a: 0, b: 0, c: 1, d: 1}
    char = 'c'
    2.1   check if current char is not in hash map or has a value of zero in hash map
          return false
    2.2   else subtract 1 from the value of the frequency count for that char in hash map
          lettersCountHash = { a: 0, b: 0, c: 0, d: 1}

3.  return True
*/

const constructNote = function (message, letters) {
  const lettersCountHash = new Map();
  for (const char of letters) {
    lettersCountHash.set(char, (lettersCountHash.get(char) || 0) + 1);
  }

  let currentChar = '';
  for (const char of message) {
    currentChar = lettersCountHash.get(char);
    if (!currentChar || currentChar === 0) return false;
    else lettersCountHash.set(char, currentChar - 1);
  }

  return true;
};

console.log(constructNote('aa', 'abc')); //  false
console.log(constructNote('abc', 'dcba')); //  true
console.log(constructNote('aabbcc', 'bcabcaddff')); //  true
