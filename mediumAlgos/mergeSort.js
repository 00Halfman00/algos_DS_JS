/*
  1.  WRITE A FUNCTION NAMED mergeTwoArrs
      ( IT WILL TAKE TWO ARRAYS AND RETURN A SEPERATE ARRAY WITH ALL THE ELEMENTS OF THOSE TWO ARRAYS
       SORTED IN ASCENDING ORDER )
      1.  IT WILL TAKE TWO ARRAYS AS ITS PARAMETERS NAMED arr1 AND arr2
      2.  IT WILL CREATE A UNMUTABLE VARIABLE NAMED res AND ASSIGN IT THE VALUE OF AN EMPTY ARRAY
          ( THIS ARRAY WILL CONTAIN ALL THE ELEMENTS OF THE TWO PASSED IN ARRAYS SORTED )
      3.  IT WILL CREATE TWO MUTABLE VARIABLE NAMED left AND right AND BOTH WILL BE ASSIGNED THE VALUE
          ZERO.
          ( left WILL BE USED AS AN INDEX FOR arr1 AND right WILL BE USED AS AN INDEX FOR arr2 )
      4.  LOOP WHILE left IS LESS THAN THE LENGTH OF THE FIRST ARRAY AND
          right IS LESS THAN THE LENGHT OF THE SECOND ARRAY
          A.  IF THE VALUE OF THE ELEMENT AT INDEX left IN THE FIRST ARRAY IS LESS THAN THE VALUE OF
              THE ELEMENT AT INDEX right IN THE SECOND ARRAY
              I.    PUSH THE VALUE OF THE ELEMENT IN THE FIRST ARRAY AT INDEX left ONTO THE res ARRAY
              II.   INCREASE THE VALUE OF THE VARIABLE left BY ONE.
          B.  IF THE VALUE OF THE ELEMENT AT INDEX right IN THE SECOND ARRAY IS LESS THAN THE VALUE OF
              THE ELEMNT AT INDEX left IN THE FIRST ARRAY
              I.    PUSH THE VALUE OF THE ELEMENT IN THE SECOND ARRAY AT INDEX right ONTO THE res
                    ARRAY
              II,   INCREASE THE VALUE OF THE VARIABE right BY ONE.
      5.  LOOP WHILE THERE IS STILL AN ELEMENT AT INDEX left IN THE FIRST ARRAY
          ( THE POINT IS TO CHECK IF THERE ARE STILL ELEMENTS IN THE FIRST ARRAY THAT WEREN'T LOOPED
           OVER IN THE LOOP PERFORMED IN STEP 4 )
           A. PUSH THE VALUE OF THE ELEMENT AT INDEX left IN THE FIRST ARRAY ONTO res
           b. INCREASE THE VALUE OF THE VARIABLE left BY ONE
      6.  LOOP WHITE THERE IS STILL AN ELEMENT AT INDEX right IN THE SECOND ARRAY
          ( THE POINT IS TO CHECK IF THERE ARE STILL ELEMENTS IN THE FIRST ARRAY THAT WEREN'T LOOPED
           OVER IN THE LOOP PERFORMED IN STEP 4 )
           A. PUSH THE VALUE OF THE ELEMENT AT INDEX right IN THE SECOND ARRAY ONTO res
           B. INCREASE THE VALUE OF THE VARIABLE right BY ONE
      7.  RETURN res
*/

const mergeTwoArrs = (arr1, arr2) => {
  const res = [];
  let left = 0,
    right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      res[res.length] = arr1[left];
      ++left;
    }
    if (arr2[right] <= arr1[left]) {
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

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeTwoArrs(left, right);
};

const nums1 = [1, 3, 5, 7];
const nums2 = [2, 4, 6, 8, 9, 10, 12, 18];

const nums3 = [10, 34, 23, 5, 22, 64, 1, 8, 4];

// console.log(mergeTwoArrs(nums1, nums2));
console.log(mergeSort(nums3));
