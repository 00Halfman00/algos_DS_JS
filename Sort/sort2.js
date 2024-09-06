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

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] > nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
};

// const ints1 = [4, 8, 2, 1, 9, 5, 7, 6, 3, 0];
// console.log(selectionSort(ints1));

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


*/

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



const ints1 = [1, 3, 4, 5, 9];
const ints2 = [0, 2, 6, 7, 8];

console.log(merge2Arrs(ints1, ints2));
