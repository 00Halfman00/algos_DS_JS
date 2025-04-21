// helper funciton

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
  if (numStr1 * numStr2 === 0) return '0';
  let longestNumStr = '',
    otherNumStr = '';
  if (numStr1.length >= numStr2.length) {
    longestNumStr = numStr1;
    otherNumStr = numStr2;
  } else {
    longestNumStr = numStr2;
    otherNumStr = numStr1;
  }
  const numStrArr = [];
  let carry = 0,
    sum = 0,
    padding = '',
    result = '';
  for (let i = longestNumStr.length - 1; i >= 0; --i) {
    for (let j = otherNumStr.length - 1; j >= 0; --j) {
      sum = carry + longestNumStr[i] * otherNumStr[j];
      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
    }
    if (carry) result = carry + result; // make use of carry
    carry = 0; // reset carry
    result += padding; // make use of padding
    padding += '0'; // add a zero to padding for next iteration
    numStrArr.push(result); // add result to the end of array
    result = ''; // reset result
  }
  return addManyNumStr(numStrArr);
};

const num3 = '123',
  num4 = '456';
console.log(multiply2NumStr(num3, num4)); // 56088
