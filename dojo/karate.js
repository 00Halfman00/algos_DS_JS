const numsArr1 = [5, 8, 12, 2, 1, 0];

// helper function for pivot function
const swapElements = (numsArr, idx1, idx2) => {
  [numsArr[idx1], numsArr[idx2]] = [numsArr[idx2], numsArr[idx1]];
};

// helper function for quickSort function
const pivot = (numsArr, startIdx = 0, endIdx = numsArr.length) => {
  const pivNum = numsArr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; ++i) {
    if (numsArr[i] < pivNum) {
      swapElements(numsArr, (swapIdx += 1), i);
    }
  }
  swapElements(numsArr, swapIdx, startIdx);
  return swapIdx;
};

// quickSort function
const quickSort = (numsArr, startIdx = 0, endIdx = numsArr.length) => {
  if (startIdx < endIdx) {
    const pivIdx = pivot(numsArr, startIdx, endIdx);
    quickSort(numsArr, startIdx, pivIdx - 1);
    quickSort(numsArr, pivIdx + 1, endIdx);
  }
  return numsArr;
};

// console.log('before: ', numsArr1);
// console.log('quicSort: ', quickSort(numsArr1));
// console.log('after: ', numsArr1);

/*
 insertSort functiopn
  1.  takes an array
  2.  checks to see if there is more than one element in array
  3.  starts to outer loop from the second index till the end of the array
      I.  if the element before the current element is larger
          a.  it creates a variable, call it pivot, and assigns it the value of
              current element at index i in the array
          b.  it beggins to inner loop with j, beginning at one index less than
              i and moves from right to left
              1b. if the current element at index j is greater than the element
                  at j + 1
                  b1. swap those two elements in the array


 */

const numsArr2 = [10, 5, 8, 12, 2, 1, 0];
//                    p
const insertionSort = (numsArr) => {
  if (numsArr[1]) {
    for (let i = 1; i < numsArr.length; ++i) {
      if (numsArr[i] < numsArr[i - 1]) {
        const pivot = numsArr[i];
        for (let j = i - 1; j >= 0 && numsArr[j] > pivot; --j) {
          if (numsArr[j] > numsArr[j + 1]) {
            [numsArr[j], numsArr[j + 1]] = [numsArr[j + 1], numsArr[j]];
          }
        }
      }
    }
  }
  return numsArr;
};

// console.log('before: ', numsArr2);
// console.log('insertionSort: ', insertionSort(numsArr2));
// console.log('after: ', numsArr2);

/*
bubble sort
1.  loop from the beginning with index i till the end of the array
2.  loop from the start with index j and stops when it gets to index i
3.  checks if the current element at j is larget than the element at j + 1 in the array
    and if true, it swaps them, moving the larger element towards the end of array
*/

const bubbleSort = (numsArr) => {
  if (numsArr[1]) {
    for (let i = numsArr.length - 1; i > 0; --i) {
      for (let j = 0; j < i; ++j) {
        if (numsArr[j] > numsArr[j + 1]) {
          [numsArr[j], numsArr[j + 1]] = [numsArr[j + 1], numsArr[j]];
        }
      }
    }
  }
  return numsArr;
};

// console.log('before: ', numsArr2);
// console.log('bubbleSort: ', bubbleSort(numsArr2));
// console.log('after: ', numsArr2);

// same as bubble sort but in reverse: moving the smaller number towards the beggining of array
const selectionSort = (numsArr) => {
  if (numsArr[1]) {
    for (let i = 0; i < numsArr.length; ++i) {
      for (let j = numsArr.length - 1; j > i; --j) {
        if (numsArr[j] < numsArr[j - 1]) {
          [numsArr[j], numsArr[j - 1]] = [numsArr[j - 1], numsArr[j]];
        }
      }
    }
  }
  return numsArr;
};

// console.log('before: ', numsArr2);
// console.log('selectionSort: ', selectionSort(numsArr2));
// console.log('after: ', numsArr2);

/*
radix sort
1.  it takes an array of numbers, call it numsArr
2.  it finds the longest number in the array
3.  it outer loops with k over the length of the longest number
4.  it creates an array of arrays. For base 10 numbers, it creates an array of
    ten arrays, each representing digits 0-9.
5.  it inner loops over the length of the array
6.  it calls a helper function to retrieve the right array/container from the 0-9 arrays
    to place the current number
7.  once inner loop is finished, all the 0-9 arrays are dumped into one single array
    and assigned to numsArr
8.  return numsArr
*/

const numsArr3 = [10, 159, 8023, 12516, 2020, 1, 0];

// most digits helper function ( finds the number with the most digits; that is, finds the longes number )

const mostDigits = (numsArr) => {
  maxLength = 0;
  for (num of numsArr) {
    numString = num + '';
    maxLength = maxLength > numString.length ? maxLength : numString.length;
  }
  return maxLength;
};
// 159, 0
const getDigit = (num, idx) => {
  // index 0 will represent the last digit in num, index 1 represents the second last digit, and so on...
  numString = num + '';
  if (idx < numString.length) {
    return +numString[numString.length - idx - 1];
  }
  return 0;
};

// console.log(getDigit(345, 0));

const radixSort = (numsArr) => {
  const maxDigitLength = mostDigits(numsArr);

  for (let i = 0; i < maxDigitLength; ++i) {
    let base10Containers = [[], [], [], [], [], [], [], [], [], []];

    for (let num of numsArr) {
      let base10Num = getDigit(num, i);
      base10Containers[base10Num].push(num);
    }

    numsArr = [].concat(...base10Containers);
  }
  return numsArr;
};

console.log('radixSort: ', radixSort(numsArr3));
