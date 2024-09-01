// const arr1 = [1, 2, 3, 5, 4]; // needs sorting towards the end
// const arr2 = [4, 3, 5, 2, 1]; // all over the place
// const arr3 = [2, 1, 3, 4, 5]; // needs sorting towards the start

// /////////////////////////////// BUBBLE SORT ///////////////////////////////////////////////////////

// const bubbleSort = (arr) => {
//   // this is the same as the code written in udemy
//   // bubbles up, which allows to break if no swaps are being made if array is already sorted
//   let swap;
//   for (let i = arr.length; i > 0; --i) {
//     swap = false;
//     for (let j = 0; j < i - 1; ++j) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swap = true;
//       }
//     }
//     if (!swap) break;
//   }
//   return arr;
// };

// // console.log('bubble sort:  \n', bubbleSort(arr2))

// ///////////////////////////////// SELECTION SORT //////////////////////////////

// // these last few years I thought that I was writing a version of Bubble Sort, but what I really was doing was writing selection sort
// // I was learning how to code while I was completing the coding camp for web dev and I wrote this exact code, except for the modern way to swap elements in array, in real time
// // infront of their faces and they did jack shit but get exstatic. I called it bubble sort but it was selection sort that I wrote.

// const selectionSort = (arr) => {
//   // this version of selection sort is written better than the code on udemy
//   // bubbles down, but can't break like with bubble sort so not as efficient in cases where array is mostly sorted and the elements to sort are towards the end
//   // or can we?
//   for (let i = 0; i < arr.length - 1; ++i) {
//     for (let j = i + 1; j < arr.length; ++j) {
//       if (arr[j] < arr[i]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// };

// // console.log('selection sort: \n', selectionSort(arr2))

// /////////////////////////////////////// INSERTION SORT //////////////////////////

// const intsArr1 = [34, 22, 10, 19, 17];
// const insertionSort = (arr) => {
//   let count = 0,
//     curr;
//   for (var i = 1; i < arr.length; i++) {
//     curr = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
//       count++;
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = curr;
//   }
//   console.log('insertion count: ', count);
//   return arr;
// };

// // console.log('insertion sort: ', insertionSort(arr1))

// // const insertSort = (arr) => {
// //   debugger;
// //   let count = 0;
// //   for (let i = 0; i < arr.length - 1; ++i) {
// //     if (arr[i + 1] < arr[i]) {
// //       for (let j = 0; j <= i; ++j) {
// //         count++
// //         if (arr[j] > arr[i + 1]) {
// //           [arr[j], arr[i + 1]] = [arr[i + 1], arr[j]];
// //         }
// //       }
// //     }
// //   }
// //   console.log('insert count: ', count)
// //   return arr;
// // };

// // this is much more understandable by far and seems to be just as efficient as the more unreadable code.
// // For each iteration at i, j will check from the start up to i, yet j wont run unless arr[i+1] < arr[i]
// // so a sorted array that only has something unsorted in the end wont run j until i gets to that unsorted spot
// //

// const insertSort = (arr) => {
//   // so this version of insertion sort is written better than the version in udemy
//   // no variables needed
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] > arr[i + 1]) {
//       for (let j = 0; j <= i; ++j) {
//         if (arr[j] > arr[i + 1]) {
//           [arr[j], arr[i + 1]] = [arr[i + 1], arr[j]];
//         }
//       }
//     }
//   }
//   return arr;
// };

// console.log('insert sort: ', insertSort([2,1,9,76,4]));
// //                                         [1,2,9,76,4]

// const nums1Arr = [1, 4, 7, 8, 9],
//   nums2Arr = [2, 3, 5, 6, 10, 11, 12, 14, 15, 17, 20];

// const merge = (arr1, arr2) => {
//   const res = [];
//   let i = 0,
//     j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       res[res.length] = arr1[i];
//       ++i;
//     } else {
//       res[res.length] = arr2[j];
//       ++j;
//     }
//   }
//   while (arr1[i]) {
//     res[res.length] = arr1[i];
//     ++i;
//   }
//   while (arr2[j]) {
//     res[res.length] = arr2[j];
//     ++j;
//   }
//   return res;
// };

// // console.log('merge function: ', merge(nums1Arr, nums2Arr));

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// };

// // console.log(mergeSort([23, 12, 9, 1, 7]));

// // [ 4, 8, 2, 1, 5, 7, 6, 3 ] i = 1
// // [ 4, 2, 8, 1, 5, 7, 6, 3 ] i = 2
// // [ 4, 2, 1, 8, 5, 7, 6, 3 ] i = 3
// // [ 4, 2, 1, 8, 5, 7, 6, 3 ] i = 4
// // [ 4, 2, 1, 8, 5, 7, 6, 3 ] i = 5
// // [ 4, 2, 1, 8, 5, 7, 6, 3 ] i = 6
// // [ 4, 2, 3, 1, 5, 7, 6, 8 ] i = 7

// // const swap = (arr, idx1, idx2) => {
// //   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

// // };

// // const pivot = (arr, strIdx = 0, endIdx = arr.length -1) => {
// //   let pivot = arr[strIdx];
// //   swapIdx = strIdx;
// //   for (let i = strIdx + 1; i <= endIdx; ++i) {
// //     if ( pivot > arr[i]) {
// //       ++swapIdx;
// //       swap(arr, swapIdx, i);
// //     }
// //   }
// //   swap(arr, strIdx, swapIdx);
// //   return swapIdx;
// // };

// // const quickSort =(arr, left=0, right=arr.length-1) =>{
// //   if(left < right){
// //     const pivotIdx =  `pivot(arr, left, right);
// //     quickSort(arr, left, pivotIdx-1);
// //     quickSort(arr, pivotIdx+1, right);
// //   }
// //   return arr;
// // }

// // console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3, 0]));
// //                     piv
// //                     sI,i
// //                        sI,i,

// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };
// const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
//   const piv = arr[startIdx]; // dynamically get the value at startIdx from arr
//   let swapIdx = startIdx;
//   for (let i = startIdx + 1; i <= endIdx; ++i) {
//     if (arr[startIdx] > arr[i]) {
//       ++swapIdx;
//       swap(arr, swapIdx, i);
//     }
//   }
//   swap(arr, swapIdx, startIdx);
//   return swapIdx;
// };

// // console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// const quickSort = (arr, left=0, right=arr.length-1) => {
//   if(left < right){
//     const pivIdx = pivot(arr, left, right);
//     quickSort(arr, left, pivIdx-1);
//     quickSort(arr, pivIdx+1, right);
//   }
//   return arr;
// }

// // console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
const ints2 = [1, 2, 3, 4, 5, 6, 7, 9, 8, 10, -24];
const ints3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const ints4 = [12, 19, 17, 13, 11];

/////////////////////////////////////////////////////////////////////////////
///////////////       SORTING ARRAY DATA STRUCTURES       /////////////////////
//////////////////////////////////////////////////////////////////////////////

/*
  //////////// CREATE BUBBLE SORT FUNCTION ///////////////////////////////
  1. BEGIN BY LOOPING OVER ARRAY FROM THE END TOWARDS THE BEGINNING WITH VARIABLE: i
  2. THEN CREATE A SECOND LOOP, USING VARIABLE j,  THAT MOVES FROM THE START TOWARDS THEN END
     BUT STOPS AT i - 1.
  3. USE A CONDITION  TO CHECK IF THE CURRENT ELEMENT IS LARGER THAN THE NEXT ELEMENT AND SWAP LOGICALLY.
  4. RETURN SORTED ARRAY

  BONUS POINTS: CREATE CONDITION TO BREAK OUT OF INNER LOOP IF ARRAY IS ALREADY SORTED


  TIME COMPLEXITY: O(n^2), but if array is mostly sorted O(n)
  SPACE COMPLEXITY: O(1)
*/

const bubbleSort = (arr) => {
  let swap;
  for (let i = arr.length; i > 0; --i) {
    swap = false;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
};

// console.log('bubble sort: ', bubbleSort(ints1));

/*

//////////////// CREATE SELECTION SORT ALGORITHM /////////////////////////////
////////////////  SELECTION SORT WRITTEN WELL    ////////////////////////////

1. BEGIN BY LOOPING OVER ARRAY FROM START TO END WITH VARIABLE i.
2. THEN CREATE INNER LOOP, USING VARIABLE j, THAT STARTS TO LOOP FROM i + 1
   TOWARDS THE END OF THE ARRAY.
3. CHECK TO SEE IF THE ELEMENT AT i IS GREATER THAN THE ELEMENT AT j, if so,
   SWAP LOGICALLY.
4. RETURN SORTED ARRAY.

TIME COMPLEXITY: O(n^2)
SPACE COMPLEXITY: O(1)

BONUS POINTS: CREATE CONDITION THAT WHEN ARRAY IS MOSTLY SORTED TIME COMPLEXITY IS O(n)
*/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

// console.log('selection sort my own version: ', selectionSort(ints1));

/////////////////  CREATE INSERTION SORT ALGORITHM    //////////////////////////
////////////////   A BIT MODED ////////////////////////////////////////////////

/*
  1. BEGIN BY LOOPING OVER ARRAY FROM START TO END WTIH VARIABLE i.
  2. CREATE CONDITION TO SEE IF THE ELEMENT AT i IS GREATER THAN THE ELEMENT INFRONT OF IT
     IF TRUE, GO TO STEP 3 ELSE DO NOTHING.
  3. NEXT, CREATE INNER LOOP, USING VARIABLE j, THAT STARTS TO LOOP FROM
     THE START TOWARDS THE END OF THE ARRAY.
  3. IF THE ELEMENT AT j IS GREATER THAN ELEMENT AT j+1, SWAP LOGICALLY
  4. RETURN SORTED ARRAY

  TIME COMPLEXITY: O(n^2) on average and worst cases. O(n) in best case
  SPACE COMPLEXITY: O(1)

  version 3 is now the fastest version when arrays are in random order and almost sorted

*/

//const ints1 = [4, 8, 2, 1, 5, 7, 6, 3];
//               i                          arr[i] > arr[i+1] ? nope  i = 0
//                  i                       arr[i] > arr[i+1] ? yup   i = 1
//              [2, 4, 8, 1, 5, 7, 6, 3] i = 1

const insertionSortV2 = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      for (let j = 0; j <= i; j++) {
        if (arr[j] > arr[i + 1]) {
          [arr[j], arr[i + 1]] = [arr[i + 1], arr[j]];
        }
      }
    }
  }
  return arr;
};
// console.log(' sorting a mostly sorted array order')
// console.log('insertion sort version 2: ', insertionSortV2(ints2));

//const ints1 = [4,  8,  2,  1,  5,  7,  6,  3];
//               j  j+1                         arr[j] > arr[j+1] ? nope
//                   j  j+1                     arr[j] > arr[j+1] ? yup

// [ 1,  2,  9,  76,  0]
//                j  j+1                        arr[j] > arr[j+1] ? yup
// [ 1,  2,  9,  0,  76]
//           j  j+1
const insertionSortV3 = (arr) => {
  let tmp;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      tmp = arr[i];
      for (let j = i - 1; j >= 0 && arr[j] > tmp; --j) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  return arr;
};

// console.log('insertion sort version 3: ', insertionSortV3(ints2));

////////////////    CHREATE MERGE SORT ALGORITHM   /////////////////////////////

/*
  1. CREATE A HELPER FUNCNTION, NAMED merge,  THAT TAKES TWO ARRAYS AS INPUT AND
     RETURNS AN ARRAY WITH ALL ELEMENTS SORTED.
  2. CREATE A FUNCTION, NAMED mergeSort, THAT WILL TAKE AN UNSORTED ARRAY,
     AND RECURSIVELY CALL ITSELF AND SPLIT THE PASSED IN ARRAY INTO A LEFT HALF
     AND A RIGHT HALF, OVER AND OVER, UNTIL THE ARRAY's LENGTH IS 1.
     THEN IT WILL CALL THE MERGE HELPER FUNCTION ON THE LEFT AND RIGHT AND
     RETURN A SORTED ARRAY TO THE FUNCTION ON THE CALL STACK THAT INVOKED IT.
     THOSE SORTED ARRAYS WILL CONTINUE TO RETURN UNTIL THE ORIGINAL CALL ON THE CALLSTACK
     HAS A LEFT SORTED ARRAY AND A RIGHT SORTED ARRAY, CALLING MERGE HELPER FUNCTION
     ONE LAST TIME TO RETURN ONE SORTED ARRAY CONTAINING ALL THE ORIGINAL ELEMENTS
     FROM THE PASSED IN ARRAY SORTED.

     TIME COMPLEXITY: O(n log n)
     SPACE COMPLEXITY: O(n)
*/

// const ints5 = insertionSortV3(ints1);
// const ints6 = insertionSortV3(ints4);

const merge = (left, right) => {
  const res = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res[res.length] = left[i];
      ++i;
    } else {
      res[res.length] = right[j];
      ++j;
    }
  }

  while (left[i]) {
    res[res.length] = left[i];
    ++i;
  }
  while (right[j]) {
    res[res.length] = right[j];
    ++j;
  }

  return res;
};

// console.log('merge function: ', merge(ints1, ints4));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log('ints1 before: ', ints1);
// console.log('mergeSort: ', mergeSort(ints1));

/////////////   CREATE QUCKSORT ALGORITHM   ///////////////////////////////////

/*

  1. CREATE A HELPER FUNCTION NAMED pivot.
    A. PIVOT WILL TAKE AN ARRAY AND A START INDEX AND AND END INDEX
    B. CREATE A VARIABLE NAMED piv, which will hold the element in the array at the start index.
    C. CREATE A VARIABLE NAMED swapIdx that will keep track of where to swap elements from left to right
    D. LOOP OVER ARRAY AND CHECK FOR CONDITION TO SWAP ELEMENTS THAT ARE SMALLER THAN THE piv VALUE
       AND PLACE THEM TO THE LEFT TILL ALL SMALLER VALUES THAN PIV ARE ON THE LEFT SIDE OF ARRAY AND THEN
       PLACE PIV BETWEEN THE LEFT (SMALLER VALUES) AND RIGHT (LARGER VALUES) SIDE OF ARRAY
    E. RETURN ARRAY
  2. CREATE FUNCTION CALLED quickSort THAT WILL TAKE AN ARRAY AND A START INDEX AND END INDEX
    A. CREATE CONDITION TO ONLY DO SOMETHING IF START INDEX IS LESS THAN END INDEX
    B. CALL PIVOT ON THE ARRAY USING THE SAME ARGUMENTS PASSED IN TO quickSort and retrieve
       the swapIdx
    C. CALL quickSort on itself twice (once for the left side of pivotIdx and again for the right side, too).
       quickSort wil keep calling itself till all items have been sorted.
    D. RETURN SORTED ARRAY

    TIME COMPLEXITY: O(n log n), worst case O (n^2), when array is already sorted

*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  let piv = arr[startIdx]; // value to pivot on [...left elemenst, piv, ...right elements]
  let swapIdx = startIdx; // index/pointer to keep track of where to swap;

  for (let i = startIdx + 1; i <= endIdx; ++i) { // don't need to compare piv to itself
    if (piv > arr[i]) {
      ++swapIdx;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, startIdx);
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

// console.log('pivot helper function: ', pivot(ints1));
console.log('quickSort results: ', quickSort(ints1));

////////////////////// CREATE RADIX ALGORITHM    /////////////////////////////

/*

  CREATE HELPER FUNCTION NAMED getDigit
    1. IT WILL HAVE A NUMBER AND AN POSITION AS ITS PARAMETERS
    2. FUNCTION WILL RETURN THE DIGIT AT THE LOCATION OF THE POSITION,
       STARTING FROM RIGHT TO LEFT


  CREATE HELPER FUNCTION NAMED digitCount
    1. IT WILL TAKE A NUMBER AS ITS PARAMETER
    2. IT WILL RETURN THE SIZE OF THE NUMBER OF DIGITS CONTAINED IN THAT NUMBER


  CREATE HELPER FUNCTION NAMED mostDigits
    1. IT WILL TAKE A LIST/ARRAY OF DIGITS AS A PARAMETER
    2. IT WILL RETURN THE SIZE OF THE ELEMENT/NUMBER WITH THE MOST DIGITS



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
  ++pos;
  if (pos <= numStr.length) {
    return +numStr[numStr.length - pos];
  }
  return 0;
};

const digitCount = (num) => {
  const numStr = num + '';
  return numStr.length;
};

const mostDigits = (numsArr) => {
  if (numsArr[0]) {
    let max = 1,
      size;
    for (let i = 0; i < numsArr.length; ++i) {
      size = digitCount(numsArr[i]);
      max = max > size ? max : size;
    }
    return max;
  }
  return 0;
};

const radixSort = (numsArr) => {
  const size = mostDigits(numsArr);
  let count;
  for (let k = 0; k < size; ++k) {
    const buckets = [[], [], [], [], [], [], [], [], [], []]; // base 10 numbers
    for (let i = 0; i < numsArr.length; ++i) {
      buckets[getDigit(numsArr[i], k)].push(numsArr[i]);
    }
    // (numsArr = []), (count = 0);
    // while (count < buckets.length) {
    //   numsArr = [...numsArr, ...buckets[count]];
    //   ++count;
    // }
    numsArr = [].concat(...buckets);
  }
  return numsArr;
};




// console.log('radix sort: ', radixSort([123, 98, 4, 6754, 234]));

// console.log('123 at position 0: ', getDigit(123, 0));
// console.log('123 at position 1: ', getDigit(123, 1));
// console.log('123 at position 2: ', getDigit(123, 2));
// console.log(' the number of digits in 123 are:    ', digitCount(123));
// console.log(' the number of digits in 0 are:    ', digitCount(0));
// console.log('array of numbers used: [123, 45, 3421, 1]')

// console.log('size of number with most digits: ', mostDigits([123, 45, 3421, 1]))
