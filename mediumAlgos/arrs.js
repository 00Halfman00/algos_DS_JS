// const threeSum = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   const res = [];
//   let target, subtrahend;
//   // if (nums.length < 3) return res;  // in the case that there are less than three elements in the array

//   for (let i = 0; i < nums.length - 2; ++i) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;  // this line is essential to avoid doubles for i movements
//     if (nums[i] > 0) break;
//     target = -nums[i];

//     for (let left = i + 1, right = nums.length - 1; left < right; ) {
//       subtrahend = nums[left] + nums[right];
//       if (target === subtrahend) {
//         res[res.length] = [nums[i], nums[left], nums[right]];
//         while (left < right && nums[left] === nums[left + 1]) ++left;  // this line is essential to avoid doubles, going  ->
//         while (left < right && nums[right] === nums[right - 1]) --right;  // this line is essential to avoid doubles, going  <-
//         ++left, --right;
//       } else {
//         if (subtrahend > target) --right;
//         if (subtrahend < target) ++left;
//       }
//     }

//   }
//   return res;
// };

// TIME COMPLEXITY: O( n^2 )

// return three numbers in the array that when added are zero, return unique combinations only

// Input: nums = [-1,0,1,2,-1,-4]  --> [ -4, -1, -1, 0, 1, 2 ]
//                                            i,  j,       k
//                                                i, j, k
// Output: [[-1,-1,2],[-1,0,1]]

// Input: nums = [-1, 0, 1, 0]   -->  [ -1, 0, 0, 1]]
// Output: [[ -1, 0, 1]]

/*
  1.  CREATE A FUNCTION NAMED threeSum
      ( IT WILL TAKE AN ARRAY OF NUMBERS AND RETURN A DIFFERENT ARRAY WITH SUBARRAYS CONTAINING ANY
       THREE NUMBERS THAT ADDED TOGETHER ARE ZERO, NO DUPLICATE SUBARRAYS OF NUMBERS  )
       A. IT WILL TAKE AN ARRAY OF NUMBERS/INTEGERS AS ITS PARAMETER
       B. SORT THE ARRAY
       C. CREATE AN ARRAY NAMED res TO RETURN WITH RESULTS
       D. CREATE A MUTABLE VARIABLE NAMED target
       E. CREATE A MUTABLE VARIABLE NAMED subtrahend
       F. LOOP OVER THE nums
          (LOOP UPTO LENGTH - 2 BECASUE A INNER LOOP WILL LOOP OVER THE LAST TWO ELEMENTS)
          I.    IF THE NUMBER/ELEMENT AT INDEX i IN nums IS GREATER THAN ZERO break THE LOOP BECASUE NO
                THREE POSITIVE NUMBERS ADDED TOGETHER ARE ZERO
          II.   IF i IS GREATER THAN ZERO AND IF THE NUMBER AT INDEX i IN nums IS THE SAME AS THE NUMBER BEFORE IT
                IN nums.
                a.  continue TO THE NEXT ITERATION TO AVOID DUPLICATING THE SAME WORK
                    FROM PREVIOUS LOOP
          III.  IF i IS GREATER THAN ZERO
                a.  CHECK IF THE NUMBER AT INDEX i IS THE SAME AS THE LAST NUMBER IN numsArr
                    a1. IF SO break OUT OF THE LOOP, SO YOU CAN RETURN res
          IV.  ASSIGN target THE OPPOSITE VALUE OF THE NUMBER AT INDEX i IN nums
          V.   LOOP OVER LEFT AND RIGHT WHERE LEFT IS INITIATED WITH THE VALUE OF i + 1 WHICH IS
                THE NEXT INDEX AFTER i,  AND LEFT IS INITITATED WITH THE VAUE OF THE LENGTH OF
                nums - 1 WHICH IS THE INDEX OF THE LAST ELEMENT/NUMBER IN THE ARRAY.
                LOOP AS LONG AS THE left INDEX IS LESS THAN THE right INDEX
                a.  ASSIGN subtranhend VARIABLE THE VALUE OF ADDING THE NUMBER AT INDEX left WITH
                    THE NUMBER AT INDEX right IN nums
                b.  IF THE VALUE OF target EQUALS THE VALUE OF subtrahend
                    (THE IDEA IS THAT IF YOU SUBTRACT A NUMBE WITH THE SAME NUMBER THE RESULT IS ZERO)
                    b1. PUSH ONTO res AN ARRAY WITH CONTAINING THE NUMBERS AT INDEX i, left, and right
                    b2. IF THE NUMBER AT INDEX left EQUALS THE NUMBER AT INDEX right IN numsArr
                        2b. break OUT OF INNER LOOP
                    b3. LOOP WHILE THE NUMBER INFRONT OF THE NUMBER AT INDEX left IS THE SAME AND
                        left IS LESS THAN right
                        - KEEEP ADDING ONE TO LEFT
                    b4. LOOP WHILE THE NUMBER BEFORE THE NUMBER AT INDEX right IS THE SAME AND
                        left IS LESS THAN right
                        - KEEEP SUBTRACTING ONE FROM right
                    b5. NOW THAT THERE IS NO NUMBER INFRONT OF left IN THE numsArr AND THAT YOU HAVE
                        ALREADY USED IT
                        . INCREASE LEFT BY ONE TO MOVE IN THE NEXT ITERATION ON THE NEXT NUMBER
                    b6. NOW THAT THERE IS NO NUMBER BEFORE THE NUMBER AT INDEX right AND THAT YOU
                        HAVE USED ALREADY USED IT
                        - DECREASE RIGHT BY ONE TO MOVE IN THE NEXT ITERATION ON THE NEXT NUMBER
                c.  ELSE IF THE VALUE NEEDED TO EQUAL target NEEDS TO BE GREATER
                    c1. INCRESE left BY ONE
                d.  ELSE THE VALUE NEED TO EQUAL target NEEDS TO BE SMALLER
                    d1. DECREASE right BY ONE
          VI. FINALLY, RETURN res ARRAY.




*/

const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  let target, subtrahend;

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0) break; // postive numbers cannot add up to zero
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (i > 0) {
      if (nums[i] === nums[nums.length - 1]) break;
    }

    target = -nums[i];

    for (let left = i + 1, right = nums.length - 1; left < right; ) {
      subtrahend = nums[left] + nums[right];

      if (target === subtrahend) {
        res[res.length] = [nums[i], nums[left], nums[right]];
        if (nums[left] === nums[right]) break;

        while (nums[left] === nums[left + 1] && left < right) ++left;
        while (nums[right] === nums[right - 1] && left < right) --right;
        ++left;
        --right;
      } else if (target >= subtrahend) ++left;
      else --right;
    }
  }
  return res;
};

const nums1 = [-1, 0, 1, 2, -1, -4]; // length = 6 - 2 = 4
const nums2 = [0, 0, 0, 0];
const nums3 = [-1, 0, 1, 0]; // --> [ -1, 0, 0, 1 ]
const nums4 = [-2, 0, 0, 2, 2];
const nums5 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const nums6 = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

console.log("threeSum's return value: ", threeSum(nums6));

