const addManyNumStr = (numStrArr) => {
  if (numStrArr.length === 1) return numStrArr[0];
  const maxIdx = Math.max(...numStrArr.map((numStr) => numStr.length)) - 1;
  let i = maxIdx,
    currIdx = 0,
    sum = 0,
    carry = 0,
    result = '';

  while (i >= 0 || carry > 0) {
    sum = carry;

    for (const numStr of numStrArr) {
      currIdx = numStr.length - 1 - (maxIdx - i);
      if (currIdx >= 0) sum += numStr[currIdx] - 0;
    }

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i -= 1;
  }
  return result;
};

const stringNums = ['11', '123', '456', '77'];
console.log(addManyNumStr(stringNums)); // 667
console.log(addManyNumStr(['11'])); // 11
