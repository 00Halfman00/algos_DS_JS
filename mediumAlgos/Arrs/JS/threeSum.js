/*
15. 3Sum

Hint
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.


Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/

// var threeSum = function (nums) {
//   let res = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }

//     let j = i + 1;
//     let k = nums.length - 1;

//     while (j < k) {
//       let total = nums[i] + nums[j] + nums[k];

//       if (total > 0) {
//         k--;
//       } else if (total < 0) {
//         j++;
//       } else {
//         res.push([nums[i], nums[j], nums[k]]);
//         j++;

//         while (nums[j] === nums[j - 1] && j < k) {
//           j++;
//         }
//       }
//     }
//   }
//   return res;
// };

// BINARY SEARCH
var threeSum = function (nums) {
  const resp = [];
  nums = nums.sort((a, b) => a - b);

  let left, right, sum;
  for (let start = 0; start < nums.length; ++start) {
    if (start > 0 && nums[start] === nums[start - 1]) continue;

    (left = start + 1), (right = nums.length - 1);
    while (left < right) {
      sum = nums[start] + nums[left] + nums[right];
      if (sum < 0) ++left;
      else if (sum > 0) --right;
      else {
        resp.push([nums[start], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1] && left < right) ++left;
        while (nums[right] === nums[right - 1] && left < right) --right;
        ++left, --right;
      }
    }
  }
  return resp;
};

const nums1 = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums1));

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
       THREE NUMBERS THAT ADDED TOGETHER EQUAL TO ZERO, NO DUPLICATE SUBARRAYS OF NUMBERS  )
       A. IT WILL TAKE AN ARRAY OF NUMBERS/INTEGERS AS ITS PARAMETER NAMED nums
       B. SORT THE nums ARRAY
       C. CREATE AN ARRAY NAMED res TO RETURN RESULTS
       D. CREATE A MUTABLE VARIABLE NAMED target, leave it unassined for now
       E. CREATE A MUTABLE VARIABLE NAMED subtrahend, leave it unassined for now
       F. LOOP OVER THE nums ARRAY
          (LOOP UPTO LENGTH - 2 BECASUE A INNER LOOP WILL LOOP OVER THE LAST TWO ELEMENTS)
          I.    IF THE NUMBER/ELEMENT AT INDEX i IN nums IS GREATER THAN ZERO break THE LOOP BECASUE NO
                THREE POSITIVE NUMBERS ADDED TOGETHER EQUAL TO ZERO
          II.   IF i IS GREATER THAN ZERO AND IF THE NUMBER AT INDEX i IN nums IS THE SAME AS THE
                NUMBER BEFORE IT IN nums
                a.  continue TO THE NEXT ITERATION TO AVOID DUPLICATING THE SAME WORK
                    FROM PREVIOUS LOOP
          III.  ASSIGN target THE OPPOSITE VALUE OF THE NUMBER AT INDEX i IN nums
          IV.   LOOP OVER LEFT AND RIGHT WHERE LEFT IS INITIATED WITH THE VALUE OF i + 1 WHICH IS
                THE NEXT INDEX AFTER i,  AND LEFT IS INITITATED WITH THE VAUE OF THE LENGTH OF
                nums - 1 WHICH IS THE INDEX OF THE LAST ELEMENT/NUMBER IN THE ARRAY.
                LOOP AS LONG AS THE left INDEX IS LESS THAN THE right INDEX
                a.  ASSIGN THE subtranhend VARIABLE THE VALUE OF ADDING THE NUMBER AT INDEX left WITH
                    THE NUMBER AT INDEX right IN nums
                b.  IF THE VALUE OF target EQUALS THE VALUE OF subtrahend
                    (THE IDEA IS THAT IF YOU SUBTRACT A NUMBE WITH THE SAME NUMBER THE RESULT IS ZERO)
                    b1. PUSH ONTO res AN ARRAY CONTAINING THE NUMBERS AT INDEX i, left, and right
                        in nums
                    b2. IF THE NUMBER AT INDEX left EQUALS THE NUMBER AT INDEX right IN nums
                        2b. break OUT OF INNER LOOP
                    b3. LOOP WHILE THE NUMBER INFRONT OF THE NUMBER AT INDEX left IS THE SAME NUMBER
                        AND left IS LESS THAN right
                        - INCRESE left BY ONE
                    b4. LOOP WHILE THE NUMBER BEFORE THE NUMBER AT INDEX right IS THE SAME NUMBER AND
                        left IS LESS THAN right
                        - DECREASE right BY ONE
                    b5. NOW THAT THERE IS NO NUMBER THAT IS THE SAME NUMBER INFRONT OF left IN THE
                        nums ARRAY
                        - INCREASE LEFT BY ONE TO MOVE IN THE NEXT ITERATION ON THE NEXT NUMBER,
                          MOVING FROM LEFT TO RIGHT
                    b6. NOW THAT THERE IS NO NUMBER THAT IS THE SAME NUMBER BEFORE THE NUMBER AT
                        INDEX right IN THE nums ARRAY
                        - DECREASE RIGHT BY ONE TO MOVE IN THE NEXT ITERATION ON THE NEXT NUMBER,
                          MOVING FROM RIGHT TO LEFT
                c.  ELSE IF THE VALUE NEEDED TO EQUAL target MUST BE GREATER
                    c1. INCRESE left BY ONE
                d.  ELSE THE VALUE NEEDED TO EQUAL target MUST BE SMALLER
                    d1. DECREASE right BY ONE
      G. FINALLY, RETURN res ARRAY.




*/

// const threeSum = (nums) => {
//   if (nums[0] !== nums[nums.length - 1]) {
//     nums = nums.sort((a, b) => a - b);
//   }

//   const res = [];
//   let target, subtrahend;

//   for (let i = 0; i < nums.length - 2; ++i) {
//     if (nums[i] > 0) break;
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     target = -nums[i];

//     for (let left = i + 1, right = nums.length - 1; left < right; ) {
//       subtrahend = nums[left] + nums[right];

//       if (target === subtrahend) {
//         res[res.length] = [nums[i], nums[left], nums[right]];

//         if (nums[left] === nums[right]) break;

//         while (nums[left] === nums[left + 1] && left < right) ++left;
//         while (nums[right] === nums[right - 1] && left < right) --right;
//         ++left;
//         --right;
//       } else if (target >= subtrahend) ++left;
//       else --right;
//     }
//   }
//   return res;
// };

// const nums1 = [-1, 0, 1, 2, -1, -4];
// const nums2 = [0, 0, 0, 0, 0, 0, 0, 0];
// const nums3 = [-1, 0, 1, 0]; // --> [ -1, 0, 0, 1 ]
// const nums4 = [-2, 0, 0, 2, 2];
// const nums5 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
// const nums6 = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

// console.log("threeSum's return value: ", threeSum(nums6));
