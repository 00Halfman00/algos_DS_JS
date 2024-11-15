/////////  unless you have practiced these algos, a lot, a lot of times...

/*
  1.  CREATE THE BUBBLE SORT ALGO NAMED bubbleSort
      A.  IT WILL TAKE AN ARRAY OF NUMBERS AS ITS SOLE PARAMETER NAMED arr
      B.  IT WILL SORT THE ARRAY IN PLACE
      C.  IT WILL CREATE A MUTABLE VARIABLE NAMED sorted AND LEAVE IT UNASSIGNED
      D.  IT WILL LOOP OVER THE arr ARRAY IN REVERSE ORDER WITH THE
          VARIABLE i ASSIGNED THE LENGTH OF THE ARRAY AND WILL KEEP LOOPING AS LONG
          AS i IS GREATER THAN ZERO
          I.    IT WILL HAVE AN INNER LOOP THAT WILL LOOP OVER THE LENGTH OF THE
                ARRAY IN ORDER FROM LEFT TO RIGHT WITH THE VARIABLE j ASSIGNED
                THE VALUE OF ZERO AND WILL KEEP LOOPING AS LONG AS j IS LESS THAN
                i MINUS ONE
                a.  IT WILL CHECK IF THE VALUE OF arr AT INDEX j IS GREATER THAN
                    THE VALUE OF arr AT INDEX j PLUS ONE
                    a1. SWAP THE ELEMENTS/NUMBERS IN THE arr ARRAY
                    a2. REASSING THE sorted VARIABLE TO VALUE true
      E.  RETURN arr

      TIME COMPLEXITY O(N^2)
      SPACE COMPLEXITY O(1)    ( NO NEW MEMORY IS CREATED )
*/
// WORKS BY MOVING THE BIitermGGEST NUMBER TOWARDS THE END OF THE ARRAY AND WORKS ITS WAY BACK TOWARDS THE START
// NOTE: TWO POINTER ALGORITHM: arr[j], arr[j+1]
const bubbleSort = (arr) => {
  let sorted;

  for (let i = arr.length; i > 0; --i) {
    for (let j = 0; j < i - 1; ++j) {
      sorted = false;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        if (!sorted) sorted = true;
      }
    }
    if (!sorted) break;
  }
  return arr;
};

const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
const ints2 = [1, 2, 3, 4, 5];
console.log(bubbleSort(ints1));

/*
  1.  CREATE THE selectionSort SORT ALGO NAMED selectionSort
      A.  IT WILL TAKE AN ARRAY OF NUMBERS AS ITS SOLE PARAMETER NAMED arr
      B.  IT WILL LOOP OVER THE arr ARRAY IN ORDER FROM LEFT TO RIGHT WITH THE
          VARIABLE i ASSIGNED THE VALUE OF ZERO WHICH IS THE FIRST INDEX, AND IT
          WILL LOOP UNTIL IT REACHES THE SECOND LAST INDEX IN THE arr ARRAY
          I.    IT WILL CREATE AN INNER LOOP THAT WILL LOOP OVER THE arr ARRAY
                FROM LEFT TO RIGHT WITH THE VARIABLE j ASSIGNED TO VALUE OF i PLUS
                ONE, AND IT WILL LOOP UNTIL IT REACHES THE END OF THE arr ARRAY
                a.  IT WILL CHECK IF THE VALUE OF arr AT INDEX i is GREATER THAN
                    THE VALUE OF arr AT INDEX j
                    a1. SWAP THE ELEMENTS/NUMBERS IN THE arr ARRAY
      C. RETURN arr

      TIME COMPLEXITY O(N^2)
      SPACE COMPLEXITY O(1)    ( NO NEW MEMORY IS CREATED )
*/
// WORKS BY FINDING THE SMALLEST NUMBER IN THE ARRAY AND MOVES IT TO THE START/BEGINNING OF THE ARRAY
// AND WORKS ITS WAY TOWARDS THE END OF THE ARRAY
// NOTE: TWO POINTER ALGORITHM: arr[i], arr[j]
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// console.log(selectionSort(ints1));

/*
  this sorting algorithm is a bit more mechanical than the previous two with
  selection sort written in the simplest/efficient way to understand

  1.  CREATE THE INSERTION SORT ALGO NAMED insertionSort
      A.  IT WILL TAKE AN ARRAY OF NUMBERS AS ITS SOLE PARAMETER NAMED arr
      B.  IT WILL CREATE A MUTABLE VARIABLE NAMED tmp AND WILL LEAVE IT UNASSIGNED
      C.  IT WILL LOOP OVER THE arr ARRAY FROM LEFT TO RIGHT WITH THE VARIABLE
          i  ASSIGNED THE VALUE OF 1 WHICH IS THE SECOND INDEX IN THE ARRAY AND
          WILL KEEP LOOPING UNTIL IT REACHES THE END OF THE arr ARRAY
          I.    IT WILL CHECK IF THE VALUE OF THE ELEMENT AT INDEX i MINUS ONE IS
                GREATER THAN THE VALUE OF THE ELEMENT AT INDEX i
                a.  IT WILL ASSIGN THE VALUE OF THE ELEMENT AT INDEX i TO THE
                    VARIABLE tmp
                b.  IT WILL CREATE AN INNER LOOP THAT WILL LOOP FROM RIGHT TO LEFT
                    WITH THE VARIABLE j ASSIGNED THE VALUE OF i MINUS ONE AND WILL
                    KEEP LOOPING AS LONG AS j IS GREATER OR EQUAL TO ZERO AND THE
                    VALUE OF THE ELEMENT AT INDEX j IS GREATER THAN THE VAOUE OF TMP
                    b1. IT WILL CHECK IF THE VALUE OF THE ELEMENT AT INDEX j IS GREATER
                        THAN THE VALUE OF THE ELEMENT AT INDEX j PLUS ONE
                        * SWAP THE ELEMENTS/NUMBERS IN THE arr ARRAY
      D.  RETURN arr

      TIME COMPLEXITY: O(N^2)
      SPACE COMPLEXITY: O(1)    (NO NEW MEMORY IS CREATED, NOT REALLY)

*/
// WORKS BY STARTING AT THE SECOND INDEX AND AT EACH ITERATION CHECKS THE ELEMENT AT THE CURRENT
// INDEX WITH THE ELEMENT AT THE PREVIOUS INDEX AND ONLY IF NEEDED SORTS THE ARRAY FROM THE CURRENT
// INDEX BACK TO ITS PROPER PLACE OF ORDER
const insertionSort = (arr) => {
  let tmp;

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      tmp = arr[i];

      for (let j = i - 1; j >= 0 && arr[j] > tmp; --j) {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// console.log(insertionSort(ints1));

/*

  More complex sortiing algos that will incorporate recursion and helper functions,maybe


  1.  CREATE A FUNCTION THAT MERGES THE ELEMENTS IN TWO ARRAYS AND RETURNS THEM
      IN A NEW ARRAY IN SORTED ORDER. NAME THE FUNCTION merge2Arrs
      TIME COMPLEXITY: O( N+M )

  2.  CREATE THE FUNCTION MERGESORT
      A.  IT WILL TAKE AN ARRAY OF UNSORTED NUMBERS NAMED arr
      B.  IT WILL CHECK IF THE LENGTH OF THE arr ARRAY IS ONE OR LESS
          I.    IT WILL RETURN THE arr ARRAY
      C.  IT WILL CREATE A VARIABLE NAMED mid THAT WILL HAVE THE VALUE OF THE
          MIDDLE INDEX OF THE ARRAY
      D.  IT WILL CREATE A VARIABLE NAMED left AND ASSIGN IT THE RETURN VALUE OF
          CALLING ITSELF ON THE LEFT SIDE OF THE ARRAY WITH THE ARGUMENT OF
          CALLING THE SLICE METHOD ON THE ARRAY WITH STARTING INDEX OF ZERO AND
          ENDING INDEX OF mid
      E.  IT WILL CREATE A VARIABLE NAMED right AND ASSIGN IT THE RETURN VALUE OF
          CALLING ITSELF ON THE RIGHT SIDE OF THE ARRAY WITH THE ARGUMENT OF
          CALLING THE SLICE METHOD ON THE ARRAY WITH THE STARTING VALUE OF mid
          AND NO ENDING VALUE SO THAT IT WILL GO ONTO THE END OF THE ARRAY
      F.  IT WILL RETURN THE VALUE OF CALLING THE merge2Arrays HELPER FUNCTION
          ON WITH THE ARGUMENTS left AND right
      TIME COMPLEXITY: O (N LOG N)

*/

// WORKS BY TAKING TWO SORTED ARRAYS, CREATING A NEW ARRAY, CHECKING TO SEE WHICH ELEMENT AT
// THE CURRENT INDEX IS THE SMALLEST THEN IT PLACES IT ON THE NEW ARRAY AND RETURNS AFTER IT
// TAKES CARE OF ALL THE VALUES IN EACH ARRAY
const merge2Arrs = (arr1, arr2) => {
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

  while (arr1[left] >= 0) {
    res[res.length] = arr1[left];
    ++left;
  }
  while (arr2[right] >= 0) {
    res[res.length] = arr2[right];
    ++right;
  }

  return res;
};

// WORKS BY RECURSIVELY SPLITTING THE ARRAY PASSED IN UNTIL A LEFT SIDE IS AN ARRAY OF ONE ELEMENT
// AND THE RIGHT SIDE IS AN ARRAY OF ONE ELEMENT AND THEN IT COMPARES THOSE TWO ELEMENTS AND
// RETURNS THEM IN ORDER AS A SINGLE ARRAY
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge2Arrs(left, right);
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// const ints2 = [1, 3, 4, 5, 9];
// const ints3 = [0, 2, 6, 7, 8];

// // console.log(merge2Arrs(ints2, ints3));
// console.log(mergeSort(ints1));

/*
  1.  CREATE A HELPER FUNCTION NAMED swap
      A.  IT WILL TAKE TWO INDICES AND AN ARRAY AS ITS PARAMETERS
      B.  IT WILL SWAP THE ELEMENTS AT EACH OTHERS INDICES IN THE ARRAY

      TIME COMPLEXITY: O(1)

  2.  CREATE A HELPER FUNCTIJON NAMED pivot
      A.  IT WILL TAKE AN ARRAY AND TWO INDICES AS ITS PARAMETERS
          I.    THE ELEMENTS IN THE ARRAY WILL BE OF TYPE NUMBER NAMED arr
          II.   THE FIRST INDEX WILL HAVE A DEFAULT VALUE OF ZERO AND NAMED strIdx
          III.  THE SECOND INDEX WILL HAVE A DEFAULT VALUE OF THE LENGTH OF THE ARRAY MINUS
                ONE AND NAMED endIdx
      B.  IT WILL CREATE AN UNMUTABLE VARIABLE NAMED piv THAT WILL BE ASSIGNED THE VALUE OF THE
          ELEMENT IN THE arr ARRAY AT THE VALUE OF strIdx
      C.  IT WILL CREATE A MUTABLE VARIABLE NAMED swapIdx THAT WILL BE INITIATED WITH THE VALUE
          OF strIdx
      D.  IT WILL LOOP OVER THE ARRAY WITH THE VALUE OF i BEING THE VALUE OF strIdx PLUS
          ONE AND WILL LOOP UNTIL IT REACHES THE END OF THE ARRAY
          I.  IT WILL CHECK IF THE VALUE OF piv IS GREATER THAN THE VALUE OF THE ELEMENT AT INDEX
              i IN THE arr ARRAY
                a.  IT WILL MOVE THE swapIdx VARIABLE/POINTER BY ONE BY ADDING ONE TO swapIdx
                b.  IT WILL CALL THE swap HELPER FUNCTION TO SWAP THE ELEMENT AT swapIdx WITH THE
                    ELEMENT AT i IN THE arr ARRAY
      E.  IT WILL CALL THE swap HELPER FUNCTION ONE LAST TIME PASSING IN THE arr ARRAY, swapIdx,
          AND strIdx. THE PURPOSE IS TO SWAP THE FIRST ELEMENT IN THE ARRAY, WHICH WAS THE VALUE ASSIGNED
          TO piv WITH THE VALUE OF THE ELEMENT IN THE arr ARRAY AT swapIdx, WHICH IS THE LAST ELEMENT
          IN THE arr ARRAY, STARTING FROM THE LEFT, THAT IS SMALLER THAN THE VALUE OF piv
      F.  RETURN swapIdx SO THAT IT WILL BE CALLED LATER BY quicktSort

      TIME COMPLEXITY: O(N);

*/

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const pivot = (arr, strIdx = 0, endIdx = arr.length - 1) => {
  const piv = arr[strIdx];
  let swapIdx = strIdx;

  for (let i = strIdx + 1; i <= endIdx; ++i) {
    if (piv > arr[i]) {
      ++swapIdx;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, strIdx, swapIdx);
  return swapIdx;
};

const quickSort = (arr, strIdx = 0, endIdx = arr.length - 1) => {
  if (strIdx < endIdx) {
    const pivIdx = pivot(arr, strIdx, endIdx);
    quickSort(arr, strIdx, pivIdx - 1);
    quickSort(arr, pivIdx + 1, endIdx);
  }
  return arr;
};

// const ints1 = [4, 6, 9, 1, 2, 5];
// console.log('quickSort: ', quickSort(ints1))

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
                                COMPARISON SORTS ABOVE
*/
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
                                INTEGER SORT BELOW ( NO COMPARISONS )
*/
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  1.  CREATE A HELPER FUNCTION NAMED getDigit
      A.  IT WILL TAKE A NUMBER AND AN INDEX AS ITS PARAMETER
      B.  IT WILL RETURN THE VALUE/DIGIT AT THE INDEX ON THE PASSED IN NUMBER

      TIME COMPLEXITY: O(1)
      SPACE COMPLEXITY: O(1)

  2.  CREATE A HELPER FUNCTION NAMED mostDigits
      A.  IT WILL TAKE AN ARRAY OF INTEGERS AS ITS SOLE PARAMETER NAMED ints
      B.  IT WILL CREATE A MUTABLE VARIABLE NAMED maxInt AND ASSIGN IT THE VALUE OF ZERO
      C.  IF ints WAS PROVIDED AS AN ARGUMENT
          I.    LOOP OVER THE ints ARRAY, USING THE VARIABLE int TO REPRESENT THE ELEMENT AT EACH
                ITERATION IN THE ints ARRAY
                a.  CONVERT THE ELEMENT/INTEGER AT EACH ITERATION INTO A STRING REPRESENTATION OF
                    THAT NUMBER.
                b.  COMPARE THE LENGTH OF int AS A STRING TO THE VALUE OF maxInt AND ASSIGN maxInt
                    TO BE THE LARGEST OF THE TWO VALUES
      D.  RETURN maxInt

      TIME COMPLEXITY: O(N)
      SPACE COMPLEXITY: O(1)

  3.  CREATE THE RADIX SORT FUNCTION NAMED radixSort
      A.  IT WILL TAKE AN ARRAY OF INTEGERS AS ITS SOLE PARAMETER NAMED ints
      B.  IT WILL CREATE AN UNMUTABLE VARIABLE NAMED longest AND ASSIGN IT THE RETURN VALUE OF
          CALLING THE mostDigits HELPER FUNCTION WITH ints AS THE ARGUMENT
      C.  IT WILL LOOP AS MANY TIMES AS THE VALUE OF THE VARIABLE longest, STARTING WITH THE VARIABLE k
          BEING ASSIGNED ZERO
          I.    IT WILL CREATE AN ARRAY THAT CONTAINS 9 EMPTY ARRAYS NAMED buckes, EACH REPRESENTING
                AN ARRAY/BUCKET FOR THE BASE TEN NUMBER THAT WILL BE PLACED AT THAT BUCKET/INDEX(0-9)
          II.   IT WILL CREATE AN INNER LOOP THAT WILL LOOP OVER THE LENGTH OF THE ints ARRAY
                a.  IT WILL PUSH THE VALUE OF THE CURRENT INTEGER IN THE ints ARRAY TO THE BUCKET/ARRAY
                    AT THE INDEX GOTTEN BY CALLING THE getDigit HELPER FUNCTION WITH THE ARGUMENT OF THE
                    CURRENT INTEGER AND THE VALUE OF k AS THE INDEX
          III.  IT WILL REASSIGN THE VALUE OF ints TO BE THE VALUE OF A NEW ARRAY THAT CONTAINS ALL
                THE VALUES OF THE ELEMENTS/INTEGERS THAT ARE IN EACH ARRAY OF THE BUCKETS ARRAY
      D.  RETURN ints

      TIME COMPLEXITY: (NK) WHERE N IS THE LENGTH OF THE ints ARRAY AND K IS THE SIZE OF THE LARGEST NUMBER

*/

const getDigit = (int, idx) => {
  int = int + '';
  if (idx < int.length) {
    return int[int.length - 1 - idx];
  }
  return 0;
};

const mostDigits = (ints) => {
  let maxInt = 0;
  if (ints) {
    for (let int of ints) {
      int = int + '';
      if (maxInt < int.length) maxInt = int.length;
    }
  }
  return maxInt;
};

const radixSort = (ints) => {
  const longest = mostDigits(ints);

  for (let k = 0; k < longest; ++k) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];

    for (let i = 0; i < ints.length; ++i) {
      buckets[getDigit(ints[i], k)].push(ints[i]);
    }

    ints = [].concat(...buckets);
  }

  return ints;
};

// console.log(radixSort([1123, 6870, 112, 34, 9, 564, 321]));
