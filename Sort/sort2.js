/////////  unless you have practiced these algos, a lot, a lot of times...

/*
  1.  CREATE THE BUBBLE SORT ALGO NAMED bubbleSort
      A.  IT WILL TAKE AN ARRAY OF NUMBERS AS ITS SOLE PARAMETER NAMED nums
      B.  IT WILL SORT THE ARRAY IN PLACE
      C.  IT WILL CREATE A MUTABLE VARIABLE NAMED sorted AND INITIATE IT TO false
      D.  IT WILL LOOP OVER THE nums ARRAY IN REVERSE ORDER WITH THE
          VARIABLE i ASSIGNED THE LENGTH OF THE ARRAY AND WILL KEEP LOOPING AS LONG
          AS i IS GREATER THAN ZERO
          I.    IT WILL HAVE AN INNER LOOP THAT WILL LOOP OVER THE LENGTH OF THE
                ARRAY IN ORDER FROM LEFT TO RIGHT WITH THE VARIABLE j ASSIGNED
                THE VALUE OF ZERO AND WILL KEEP LOOPING AS LONG AS j IS LESS THAN
                i MINUS ONE
                a.  IT WILL CHECK IF THE VALUE OF nums AT INDEX j IS GREATER THAN
                    THE VALUE OF nums AT INDEX j PLUS ONE
                    a1. SWAP THE ELEMENTS/NUMBERS IN THE nums ARRAY
                    a2. REASSING THE sorted VARIABLE TO VALUE true
      E.  RETURN nums

      TIME COMPLEXITY O(N^2)
      SPACE COMPLEXITY O(1)    ( NO NEW MEMORY IS CREATED )
*/
// WORKS BY MOVING THE BIGGEST NUMBER TOWARDS THE END OF THE ARRAY AND WORKS ITS WAY BACK TOWARDS THE START
// NOTE: TWO POINTER ALGORITHM: nums[j], nums[j+1]
const bubbleSort = (nums) => {
  let sorted;

  for (let i = nums.length; i > 0; --i) {
    for (let j = 0; j < i - 1; ++j) {
      sorted = false;
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        if (!sorted) sorted = true;
      }
    }
    if (!sorted) break;
  }
  return nums;
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// const ints2 = [1, 2, 3, 4, 5];
// console.log(bubbleSort(ints1));

/*
  1.  CREATE THE selectionSort SORT ALGO NAMED selectionSort
      A.  IT WILL TAKE AN ARRAY OF NUMBERS AS ITS SOLE PARAMETER NAMED nums
      B.  IT WILL LOOP OVER THE nums ARRAY IN ORDER FROM LEFT TO RIGHT WITH THE
          VARIABLE i ASSIGNED THE VALUE OF ZERO WHICH IS THE FIRST INDEX, AND IT
          WILL LOOP UNTIL IT REACHES THE SECOND LAST INDEX IN THE nums ARRAY
          I.    IT WILL CREATE AN INNER LOOP THAT WILL LOOP OVER THE nums ARRAY
                FROM LEFT TO RIGHT WITH THE VARIABLE j ASSIGNED TO VALUE OF i PLUS
                ONE, AND IT WILL LOOP UNTIL IT REACHES THE END OF THE nums ARRAY
                a.  IT WILL CHECK IF THE VALUE OF nums AT INDEX i is GREATER THAN
                    THE VALUE OF nums AT INDEX j
                    a1. SWAP THE ELEMENTS/NUMBERS IN THE nums ARRAY
      C. RETURN nums

      TIME COMPLEXITY O(N^2)
      SPACE COMPLEXITY O(1)    ( NO NEW MEMORY IS CREATED )
*/
// WORKS BY FINDING THE SMALLEST NUMBER IN THE ARRAY AND MOVES IT TO THE START/BEGINNING OF THE ARRAY
// AND WORKS ITS WAY TOWARDS THE END OF THE ARRAY
// NOTE: TWO POINTER ALGORITHM: nums[i], nums[j]
const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
console.log(selectionSort(ints1));

/*
  this sorting algorithm is a bit more mechanical than the previous two with
  selection sort written in the simplest/efficient way to understand

  1.  CREATE THE INSERTION SORT ALGO NAMED insertionSort
      A.  IT WILL TAKE AN ARRAY OF NUMBERS AS ITS SOLE PARAMETER NAMED nums
      B.  IT WILL CREATE A MUTABLE VARIABLE NAMED tmp AND WILL LEAVE IT UNASSIGNED
      C.  IT WILL LOOP OVER THE nums ARRAY FROM LEFT TO RIGHT WITH THE VARIABLE
          i  ASSIGNED THE VALUE OF 1 WHICH IS THE SECOND INDEX IN THE ARRAY AND
          WILL KEEP LOOPING UNTIL IT REACHES THE END OF THE nums ARRAY
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
                        * SWAP THE ELEMENTS/NUMBERS IN THE nums ARRAY
      D.  RETURN nums

      TIME COMPLEXITY: O(N^2)
      SPACE COMPLEXITY: O(1)    (NO NEW MEMORY IS CREATED, NOT REALLY)

*/
// WORKS BY STARTING AT THE SECOND INDEX AND AT EACH ITERATION CHECKS THE ELEMENT AT THE CURRENT
// INDEX WITH THE ELEMENT AT THE PREVIOUS INDEX AND ONLY IF NEEDED SORTS THE ARRAY FROM THE CURRENT
// INDEX BACK TO ITS PROPER PLACE OF ORDER
const insertionSort = (nums) => {
  let tmp;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] > nums[i]) {
      tmp = nums[i];

      for (let j = i - 1; j >= 0 && nums[j] > tmp; --j) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// console.log(insertionSort(ints1));

/*

  More complex sortiing algos that will incorporate recursion and helper functions,maybe


  1.  CREATE A FUNCTION THAT MERGES THE ELEMENTS IN TWO ARRAYS AND RETURNS THEM
      IN A NEW ARRAY IN SORTED ORDER. NAME THE FUNCTION merge2Arrs
      TIME COMPLEXITY: O( N+M )

  2.  CREATE THE FUNCTION MERGESORT
      A.  IT WILL TAKE AN ARRAY OF UNSORTED NUMBERS NAMED nums
      B.  IT WILL CHECK IF THE LENGTH OF THE nums ARRAY IS ONE OR LESS
          I.    IT WILL RETURN THE nums ARRAY
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
    } else  {
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
const mergeSort = nums => {
  if(nums.length <= 1) return nums;
  const mid = Math.floor(nums.length/2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge2Arrs(left, right);
}


// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// const ints2 = [1, 3, 4, 5, 9];
// const ints3 = [0, 2, 6, 7, 8];


// // console.log(merge2Arrs(ints2, ints3));
// console.log(mergeSort(ints1));





/*
  1.  CREATE A HELPER FUNCTION NAMED swap
      A.  IT WILL TAKE TWO INDICES AND AN ARRAY AS ITS PARAMETERS
      B.  IT WILL SWAP THE ELEMENTS AT EACH OTHERS INDICES IN THE ARRAYD

  2.  CREATE A HELPER FUNCTIJON NAMED pivot
      A.  IT WILL TAKE AN ARRAY AND TWO INDICES AS ITS PARAMETERS
          I.    THE ELEMENTS IN THE ARRAY WILL BE OF TYPE NUMBER NAMED nums
          II.   THE FIRST INDEX WILL HAVE A DEFAULT VALUE OF ZERO AND NAMED strIdx
          III.  THE SECOND INDEX WILL HAVE A DEFAULT VALUE OF THE LENGTH OF THE ARRAY MINUS
                ONE AND NAMED endIdx
      B.  IT WILL CREATE AN UNMUTABLE VARIABLE NAMED piv THAT WILL BE ASSIGNED THE VALUE OF THE
          ELEMENT IN THE nums ARRAY AT THE VALUE OF strIdx
      C.  IT WILL CREATE A MUTABLE VARIABLE NAMED swapIdx THAT WILL BE INITIATED WITH THE VALUE
          OF strIdx
      D.  IT WILL BEGIN LOOPING OVER THE ARRAY WITH THE VALUE OF i BEING THE VALUE OF strIdx PLUS
          ONE AND WILL LOOP UNTIL IT REACHES THE END OF THE ARRAY
          I.  IT WILL CHECK IF THE VALUE OF piv IS GREATER THAN THE VALUE OF THE ELEMENT AT INDEX
              i IN THE nums ARRAY
                a.  IT WILL MOVE THE swapIdx VARIABLE/POINTER BY ONE BY ADDING ONE TO swapIdx
                b.  IT WILL CALL THE swap HELPER FUNCTION TO SWAP THE ELEMENT AT swapIdx WITH THE
                    ELEMENT AT i IN THE nums ARRAY

*/


const swap = (idx1, idx2, arr) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const pivot = (arr, strIdx = 0, endIdx = arr.length-1) => {
  const piv = arr[strIdx];
  let swapIdx = strIdx;

  for(let i = strIdx + 1; i < arr.length; ++i ){
    if(piv > arr[i]){
      ++swapIdx;  // part of the two pointer approach: i is one pointer and swapIdx the other
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, strIdx);
  return swapIdx;
}



// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];

// [4, 8, 2, 1, 9, 5, 7, 6, 3, 0]; start
// i = 1
// piv = 4
// swapIdx = 0
// [4, 8, 2, 1, 9, 5, 7, 6, 3, 0]; result no swap
// i = 2
// piv = 4
// swapIdx = 1
// [4, 2, 8, 1, 9, 5, 7, 6, 3, 0]; result swapped
// i = 3
// piv = 4
// swapIdx = 2
// [4, 2, 1, 8, 9, 5, 7, 6, 3, 0]; result swapped
// i = 4
// piv = 4
// swapIdx = 2
// [4, 2, 1, 8, 9, 5, 7, 6, 3, 0]; result no swap
// i = 5
// piv = 4
// swapIdx = 2
// [4, 2, 1, 8, 9, 5, 7, 6, 3, 0]; result no swap
// i = 6
// piv = 4
// swapIdx = 2
// [4, 2, 1, 8, 9, 5, 7, 6, 3, 0]; result no swap
// i = 7
// piv = 4
// swapIdx = 2
// [4, 2, 1, 8, 9, 5, 7, 6, 3, 0]; result no swap
// i = 8
// piv = 4
// swapIdx = 3
// [4, 2, 1, 3, 9, 5, 7, 6, 8, 0]; result swapped
// i = 9
// piv = 4
// swapIdx = 4
// [4, 2, 1, 3, 0, 5, 7, 6, 8, 9]; result swapped
// this is what array looks like after loop is over
// one last call to swap helper function
// swap( arr, swapIdx, stridx)
// [0, 2, 1, 3, 4, 5, 7, 6, 8, 9];
// return swapIdx which is index 4 which also strangely has the value of four

