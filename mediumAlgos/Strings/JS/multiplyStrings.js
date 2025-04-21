/*
43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings,
return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the
inputs to integer directly.


Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"


Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"


Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

// helper function

const addManyNumStr = (strNums) => {
  if (strNums.length === 1) return strNums[0];
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

const multiply2NumStr = (numStr1, numStr2) => {
  if (numStr1 * numStr2 === 0) return 0;

  let maxNum = 0,
    otherNum = 0;
  if (numStr1.length > numStr2.length) {
    maxNum = numStr1;
    otherNum = numStr2;
  } else {
    maxNum = numStr2;
    otherNum = numStr1;
  }

  const maxIdx = maxNum.length - 1,
    otherIdx = otherNum.length - 1,
    numStrArr = [];
  let sum = 0,
    carry = 0,
    result = '',
    padding = '';

  for (let i = otherIdx; i >= 0; --i) {
    for (let j = maxIdx; j >= 0; --j) {
      sum = carry;
      sum += otherNum[i] * maxNum[j];
      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
    }
    if (carry) result = carry + result;
    result += padding;
    padding += '0';
    carry = 0;
    sum = 0;
    numStrArr.push(result);
    result = '';
  }
  return addManyNumStr(numStrArr);
};

const num1 = '2',
  num2 = '3';
console.log(multiply2NumStr(num1, num2)); // 6

const num3 = '123',
  num4 = '456';
console.log(multiply2NumStr(num3, num4)); // 56088
