const nums1 = [23, 10, 5, 45, 8, 78, 34, 9];
const nums2 = [23, 10, 5, 45, 8, 78, 34, 9];
const bubbleSort = (arr) => {
  /*
    1. loop with i from the end of the array to the beginning
    2. inner loop with j from the beginning of the array until one step before getting to i
    3. check if the current element is bigger than the one infront of it, and swap if so.
    time complexity of O(n^2)
  */
  for (let i = arr.length; i > 0; --i) {
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

// console.log('nums1 before:  ', nums1);
// bubbleSort(nums1);
// console.log('nums1 after:  ', nums1);

const selectionSort = (arr) => {
  /*
    1. loop with i from the beginning of the array towards the end.
    2. inner loop with j from the end of the array towards the start
    3. keep switching elements
    time complexity of O(n^2)
  */
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = arr.length - 1; j > i; --j) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
};

// console.log('nums1 before:  ', nums1);
// selectionSort(nums1);
// console.log('nums1 after:  ', nums1);

const insertionSort = (arr) => {
  /*
    1. loop with i from the second element in the array towards the end of the array
    2. inner loop from the element before i to wards the end of the array
    time complexity of O(n^2)
  */
  let count = 0;
  if (arr[1]) {
    let tmp;
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] < arr[i - 1]) {
        tmp = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > tmp; --j) {
          count += 1;
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    }
  }
  console.log(count);
};

// console.log('nums1 before:  ', nums1);
// insertionSort(nums1);
// console.log('nums1 after:  ', nums1);

// sorting algorithms above have a time complexity of O(n^2)

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const merget2SortedArrays = (arr1, arr2) => {
  /*
    1. takes two sorted arrays and iterates over their length
    2. pushes the value of the smallest element in either array
    3. returns a sorted array made up of both passed in arrays
    time complexity of O(n)
  */

  const res = [];
  let left = 0,
    right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      res[res.length] = arr1[left];
      ++left;
    } else {
      res[res.length] = arr2[right];
      ++right;
    }
  }

  while (arr1[left]) {
    res[res.length] = arr1[left];
    ++left;
  }
  while (arr2[right]) {
    res[res.length] = arr2[right];
    ++right;
  }

  return res;
};

// const first = [1, 3, 5, 7, 9],
//   second = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// console.log('merge2SortedArrays:   ', merget2SortedArrays(first, second));
// const nums1 = [10, 23, 5, 45, 8, 78, 34, 9];
const mergeSort = (arr) => {
  /*
    1.  takes an array and splits it in half
    2.  calls itself on the first half and the second half
    3.  returns calling a helper function that takes two sorted arrays and returns one sorted array,
  */
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merget2SortedArrays(left, right);
};

// console.log('mergeSort:  ', mergeSort(nums1));

const swap = (arr, idx1, idx2) => {
  /*
    1. swaps the elements in the array at those indices
  */
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  /*
    1. picks an element to pivot with, usually the first element
    2. iterates over the array beginning with the element after the startIdx and up to the endIdx
    3. checks to see if the element at the current element is smaller than the pivot.
    4. if it passes check, calls the swap helper function with the arr, swapIdx + 1, and i
    5. Then, outside the loop, calls swap one last time to place pivot element in right place
    6. return swapidx
  */
  const piv = arr[startIdx];
  let swapIdx = startIdx;
  for (let i = startIdx + 1; i <= endIdx; ++i) {
    if (piv > arr[i]) {
      swap(arr, (swapIdx += 1), i);
    }
  }
  swap(arr, swapIdx, startIdx);
  return swapIdx;
};

const quickSort = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  /*
  ` 1. takes an array, a start index and end index
    2. checks if start index is smaller than the end index
    3. gets a pivot index by calling the pivot helper function
    4. divides the sorting into two halves (a left side and a right side) of the
       array at the first pivot index
    5. recursively calls itself on the left side and the right side
    6. Closure is at play
  */
  if (startIdx < endIdx) {
    const pivIdx = pivot(arr, startIdx, endIdx);
    quickSort(arr, startIdx, pivIdx - 1);
    quickSort(arr, pivIdx + 1, endIdx);
  }
  return arr;
};

// console.log('nums1 before:  ', nums1);
// quickSort(nums1);
// console.log('nums1 after:  ', nums1);

/*

  CREATE HELPER FUNCTION NAMED getDigit
    1. IT WILL HAVE A NUMBER AND AN POSITION AS ITS PARAMETERS
    2. FUNCTION WILL RETURN THE DIGIT AT THE LOCATION OF THE POSITION,
       STARTING FROM RIGHT TO LEFT


  CREATE HELPER FUNCTION NAMED mostDigits
    1. IT WILL TAKE A LIST/ARRAY OF DIGITS AS A PARAMETER
    2. IT WILL RETURN THE the number of digits OF THE ELEMENT/NUMBER WITH THE MOST DIGITS


  CREATE FUKNCTION NAMED radixSort
    1. IT WILL TAKE A LIST/ARRAY OF DIGITS AS A PARAMETER
    2. IT WILL GET THE SIZE OF THE NUMBER IN THE LIST WITH THE MOST DIGITS
    3. IT WILL START TO LOOP AS MANY TIMES AS THE SIZE OF THE LARGEST NUMBER, K = DIGIT POSITION IN NUMBER
    4. IT WILL CREATE AN ARRAY OF 9 ARRAYS, REPRESENTING (0-9) BASE 10 NUMBERS
    5. IT WILL THEN LOOP OVER THE LENGTH OF THE ARRAY OF NUMBERS PASSED IN
       AND ASSIGN EACH ELEMENT/NUMBER TO A BUCKET/ARRAY ACCORDING TO TO VALUE
       OF THE DIGIT POSITION (DIGIT POSITION = K) BEING LOOPED OVER IN OUTER LOOP
    6. RETRIEVE ALL VALUES/ELEMENTS FROM ARRAYS AND ASSIGN THEM TO BE THE ELEMENTS OF THE SINGLE ARRAY AGAIN


    NOTE: CURRENTLY WORKING WITH POSITIVE NUMBERS
*/

const getDigit = (num, pos) => {
  const numStr = num + '';
  if (pos < numStr.length) {
    return +numStr[numStr.length - 1 - pos];
  }
  return 0;
};

const mostDigits = (intsArr) => {
  let max = 0,
    strInt = '';
  for (let int of intsArr) {
    strInt = int + '';
    max = strInt.length > max ? strInt.length : max;
  }
  return max;
};

// console.log(getDigit(123456, 3));
// console.log(mostDigits([1, 23, 456, 7, 6879]));

const ints1 = [23, 10, 9, 50, 3, 47];

const radixSort = (intsArr) => {
  const maxNum = mostDigits(intsArr);
  let num;
  for (let i = 0; i < maxNum; ++i) {
    const containers = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < intsArr.length; ++j) {
      num = getDigit(intsArr[j], i);
      containers[num].push(intsArr[j]);
    }
    intsArr = [].concat(...containers);
  }
  return intsArr;
};

console.log(radixSort(ints1));
