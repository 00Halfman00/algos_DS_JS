/*
415. Add Strings

Given num2Digit non-negative integers, num1 and num2 represultented as string,
return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large
integers (such as BigInteger). You must also not convert the inputs to integers directly.



Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"


Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"


Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"


Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
*/
// adds two num-strings
var addStrings = (num1, num2) => {
  let i = num1.length - 1,
    j = num2.length - 1,
    sum = 0,
    carry = 0,
    result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    sum = carry;
    if (i >= 0) sum += num1[i] - 0;
    if (j >= 0) sum += num2[j] - 0;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i -= 1;
    j -= 1;
  }
  return result;
};

const num1 = '11',
  num2 = '123';
const num3 = '456',
  num4 = '77';

// console.log(addStrings(num1, num2)); // '134'
// console.log(addStrings(num3, num4)); // '533'

/*
  Given an array of many numbers as strings, return their sum as a single string
  steps:
  1.  find the biggest index of the longest number-string
  2.  iterate from the last character of the longest string up to first character
  3.  iterate from the first number string up to the last number-string in array.
      4.  do the math
  5.  return the result
*/

// adds many nuber strings
const addManyNumberStrings = (strNums) => {
  const maxIdx = Math.max(...strNums.map((num) => num.length)) - 1;
  let i = maxIdx,
    sum = 0,
    carry = 0,
    currIdx = 0,
    result = '';

  while (i >= 0 || carry > 0) {
    sum = carry;

    for (const num of strNums) {
      currIdx = num.length - 1 - (maxIdx - i);
      if (currIdx >= 0) sum += num[currIdx] - 0;
    }

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i -= 1;
  }
  return result;
};

const stringNums = ['11', '123', '456', '77'];
console.log(addManyNumberStrings(stringNums)); // 667
console.log(addManyNumberStrings(['11'])); // 11
