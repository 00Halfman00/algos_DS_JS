//                           SORTING UNORDERED ARRAYS

/*
  BUBBLE SORT      /////////////////////////////////////////////////////////////////////////////////
  (MOVES LARGER ELEMENTS TOWARDS THE END OF THE ARRAY)
  1.  OUTER LOOPS FROM THE END OF THE ARRAY MOVING TOWARDS THE BEGINNING WITH INDEX i
    2.  INNER LOOP FROM THE START OF THE ARRAY TOWARDS THE END WITH INDEX j
    3.  IF THE ELEMENT AT INDEX j IS LARGER THAN THE INDEX OF j + 1, SWAP THE TWO ELEMENTS

  time complexity on average and worst case: O(n^2)
  time complexity if arrays is mostly sorted: O(n)
  space complexity: O(1)
*/

const bubbleSort = (intsArray) => {
  let sorted = true;
  for (let i = intsArray.length - 1; i > 0; --i) {
    sorted = true;
    for (let j = 0; j < i; ++j) {
      if (intsArray[j] > intsArray[j + 1]) {
        [intsArray[j], intsArray[j + 1]] = [intsArray[j + 1], intsArray[j]];
        sorted = false;
      }
    }
    if (sorted) {
      console.log('breaking loop', intsArray);
      break;
    }
  }
  return intsArray;
};

// const ints1 = [11, 4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// const ints2 = [1, 2, 3, 5, 4, 6];
// bubbleSort(ints1);
// bubbleSort(ints2);
// console.log(ints1);
// console.log(ints2);

/*
  SELECTION SORT      //////////////////////////////////////////////////////////////////////////////
  (MOVES SMALLER ELEMENTS TOWARDS THE BEGINNING OF THE ARRAY)
  1.  OUTER LOOP FROM THE BEGINNING OF THE ARRAY MOVING TOWARDS THE END WITH INDEX i
    2.  INNER LOOP FROM THE END OF THE ARRAY TOWARDS THE BEGINNING WITH INDEX j
    3.  IF THE ELEMENT AT INDEX j IS SMALLER THAN THE ELEMENT AT j - 1, SWAP THE TWO ELEMENTS

  time complexity on average and worst case: O(n^2)
  time complexity if arrays is mostly sorted: O(n)
  space complexity: O(1)
*/

const selectionSort = (intsArray) => {
  let sorted = true;
  for (let i = 0; i < intsArray.length; ++i) {
    sorted = true;
    for (let j = intsArray.length - 1; j > i; --j) {
      if (intsArray[j] < intsArray[j - 1]) {
        [intsArray[j], intsArray[j - 1]] = [intsArray[j - 1], intsArray[j]];
        sorted = false;
      }
    }
    if (sorted) {
      console.log('breaking loop', intsArray);
      break;
    }
  }
  return intsArray;
};

// const ints1 = [11, 4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// const ints2 = [1, 2, 3, 5, 4, 6];
// selectionSort(ints1);
// selectionSort(ints2);
// console.log(ints1);
// console.log(ints2);

/*
  INSERTION SORT      //////////////////////////////////////////////////////////////////////////////
  (STARTS SEARCHING FROM SECOND ELEMENT TOWARDS END WITH INDEX i, AND IF IT SEES THAT THE ELEMENT AT i - 1
   IS SMALLER THAN THE ELEMENT AT INDEX i, IT STARTS TO LOOP BACKWARDS FROM THAT POINT, SORTING THAT PORTION
   OF THE ARRAY)
   1. OUTER LOOP FROM THE SEOND ELEMENT OF THE ARRAY MOVING TOWARDS THE END WITH INDEX i
      2. CHECK IF THE ELEMENT AT THE INDEX BEFORE INDEX i IS LARGER
          3.  ASSIGN THE CURRENT ELEMENT'S VALUE TO A VARIABLE CALLED tmp
          4.  INNER LOOP FROM THE CURRENT ELEMENT TOWARDS THE BEGINNING OF THE ARRAY WITH INDEX j
              AND ONLY IF THE ELEMENT AT j - 1 IS SMALLER THAN tmp
              5.  IF THE ELEMENT AT INDEX j - 1 IS LARGER THAN THE ELEMENT AT INDEX j, SWAP

  time complexity on average and worst case: O(n^2)
  time complexity if arrays is mostly sorted: O(n)
  space complexity: O(1)
*/

const insertionSort = (intsArray) => {
  if (intsArray.length > 1) {
    for (let i = 1; i < intsArray.length; ++i) {
      if (intsArray[i] < intsArray[i - 1]) {
        const pivot = intsArray[i];
        for (let j = i - 1; j >= 0 && intsArray[j] > pivot; --j) {
          if (intsArray[j] > intsArray[j + 1]) {
            [intsArray[j], intsArray[j + 1]] = [intsArray[j + 1], intsArray[j]];
          }
        }
      }
    }
  }
  return intsArray;
};

// const ints1 = [11, 4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// const ints2 = [1, 2, 3, 5, 4, 6];
// insertionSort(ints1);
// insertionSort(ints2);
// console.log(ints1);
// console.log(ints2);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//
//           END OF OF SORTING ALGORITHMS WITH O(N^2) TIME COMPLEXITY
//
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  MERGE SORT      //////////////////////////////////////////////////////////////////////////////////
  (KEEPS DIVIDING ARRAY INTO TWO HALVES, RECURSIVELY, UNTIL IT REACHES TOW ARRAYS OF ONE ELEMENT EACH.
   THEN IT BEGINS TO SORT THOSE TWO ELMENTS WITH THE HELPER FUNCTION WHICH PLACES THEM INTO ONE SINGLE
   SORTED ARRAY AND RETURNS, REBUILDING AN ARRAY OF SORTED ELEMENTS FROM THE ORIGINAL UNSORTED ARRAY.)
  1.  USES A HELPER FUNCTION CALLED mergeTwoSortedArrays)
  2.  CREATES A BASE CASE: IF LENGTH OF ARRAY IS LESS THAN OR EQUAL TO ONE, RETURN ARRAY
  3.  FINDS THE MIDDLE OF THE LENGTH OF THE ARRAY
  4.  ASSIGNS A VARIABLE CALLED left THE VALUE OF RECURSIVELY CALLING ITSELF WITH THE FIRST HALF OF THE ARRAY
  5.  ASSIGNS A VARIABLE CALLED right THE VALUE OF RECURSIVELY CALLING ITSELF WITH THE SECOND HALF OF THE ARRAY
  6.  FINALLY, IT CALLS THE HELPER FUNCITON, mergeTwoSortedArrays, PASSING IN THE ARGUMENTS OF left and right

  time complexity of mergeTwoSortedArrays: O(n)
  space complexity of mergeTwoSortedArrays: O(n)

  time complexity of mergeSort: O(n log n), because it uses helper function O(n) is added to time complexity
  time complexity of mergeSort: O(n), because it uses helper function O(n) is added to space complexity
*/

// takes two sorted arrays and returns a new array with both array's elements in sorted order
const mergeTwoSortedArrays = (intsArr1, intsArr2) => {
  const reply = [];

  let left = 0,
    right = 0;
  while (left < intsArr1.length && right < intsArr2.length) {
    if (intsArr1[left] < intsArr2[right]) {
      reply[reply.length] = intsArr1[left];
      ++left;
    } else {
      reply[reply.length] = intsArr2[right];
      ++right;
    }
  }

  while (left < intsArr1.length) {
    reply[reply.length] = intsArr1[left];
    ++left;
  }
  while (right < intsArr2.length) {
    reply[reply.length] = intsArr2[right];
    ++right;
  }

  return reply;
};

// const first = [1, 3, 5, 7, 9],
//   second = [0, 2, 4, 6, 8, 10];
// console.log(mergeTwoSortedArrays(first, second));

const mergeSort = (intsArr) => {
  if (intsArr.length <= 1) {
    return intsArr;
  }
  const middle = Math.floor(intsArr.length / 2);
  const left = mergeSort(intsArr.slice(0, middle));
  const right = mergeSort(intsArr.slice(middle));
  return mergeTwoSortedArrays(left, right);
};

// const ints1 = [11, 4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// console.log(mergeSort(ints1));

/*
  QUICK SORT      //////////////////////////////////////////////////////////////////////////////////
  (CHOOSES A PIVOT INDEX IN THE ARRAY, THEN IT BEGINS TO RECURSIVELY CALL ITSELF WITH THE LEFT SIDE
   OF THE ARRAY FROM THE PIVOT INDEX AND ALSO RECURSIVELY CALL ITSELF WITH THE RIGHT SIDE OF THE ARRAY
   FROM THE PIVOT INDEX, CONTINUALLY DIVINDING THE ARRAY INTO SMALLER HALVES TO SORT)

  1. USES A HELPER FUNCTION CALLED pivot
  2. CHECKS, FIRST, IF START INDEX IS LESS THAT END INDEX
    3.  CALLS THE HELPER FUNCTION pivot TO RETRIEVE THE PIVOT INDEX
    4.  RECURSIVELY CALLS ITSELF ON THE FIRST HALF OF THE ARRAY; THAT IS, FROM START INDEX TO PIVOT
        INDEX
    5.  RECURSIVELY CALLS ITSELF ON THE SECOND HALF OF THE ARRAY; THAT IS, FROM PIVOT INDEX TO END
        INDEX

  time complexity in best case and average: O(n logn)
  time complexity in worst case where the wrong pivot element is chosen: O(n^2)

*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  const pivotElement = arr[startIdx];
  let swapIdx = startIdx;
  for (let i = startIdx + 1; i <= endIdx; ++i) {
    if (arr[i] < pivotElement) {
      // swap(arr, ++swapIdx, i);
      ++swapIdx;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  // swap(arr, startIdx, swapIdx);
  [arr[startIdx], arr[swapIdx]] = [arr[swapIdx], arr[startIdx]];
  return swapIdx;
};

const quickSort = (intsArr, startIdx = 0, endIdx = intsArr.length - 1) => {
  if (startIdx < endIdx) {
    const pivotIdx = pivot(intsArr, startIdx, endIdx);
    quickSort(intsArr, startIdx, pivotIdx - 1);
    quickSort(intsArr, pivotIdx + 1, endIdx);
  }
  return intsArr;
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// console.log(quickSort(ints1));
// console.log(ints1);

/*
  RADIX SORT      //////////////////////////////////////////////////////////////////////////////////
  (WORKS WITH NUMBERS ONLY, TO MY KNOWLEDGE)
  1.  USES A HELPER FUNCTION NAMED getDigit (it returns the digit at the given index for a number passed in)
  2.  USES A HELPER FUNCTION NAMED mostDigits (it returns the lenght of the number in the array with the largest length)
  3.  GET THE LENGTH OF THE LONGEST NUMBER
  4.  OUTER LOOPS OVER THE LENGTH OF THE LARGEST NUMBER IN THE ARRAY WITH INDEX i
      5.  CREATES AN ARRAY OF TEN ARRAYS TO REPRESENT BASE 10 NUMBERS
      6.  INNER LOOPS OVER THE LENGTH OF THE ARRAY
          7.  FINDS THE VALUE AT INDEX i FOR THE CURRENT NUMBER AND PLACES THE NUMBER
              IN THE BASE 10 ARRAY AT THE VALUE OF THAT INDEX FOR THE NUMBER
      8.  CONCATENATES ALL THE BASE 10 ARRAYS INTO A SINGLE ARRAY WITH ALL THEIR VALUES
*/

const getDigit = (num, idx) => {
  const numStr = num + '';
  if (idx < numStr.length) {
    return numStr[numStr.length - idx - 1];
  }
  return 0;
};

const mostDigits = (numsArr) => {
  let max = 0;
  for (let num of numsArr) {
    num = num + '';
    max = num.length > max ? num.length : max;
  }
  return max;
};

// console.log(mostDigits([1, 234, 23, 56789, 90, 1000]));

const radixSort = (numsArr) => {
  if (numsArr.length > 1) {
    const longestNum = mostDigits(numsArr);
    for (let i = 0; i < longestNum; ++i) {
      let base10Containers = [[], [], [], [], [], [], [], [], [], []];
      for (let num of numsArr) {
        base10Containers[getDigit(num, i)].push(num);
      }
      numsArr = [].concat(...base10Containers);
    }
  }
  return numsArr;
};

const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
console.log('radix sort: ', radixSort(ints1));
