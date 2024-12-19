/*
  Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

  Example 1:

  Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
  Output: 3
  Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
  Example 2:

  Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
  Output: 6
  Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
*/

const ints = [2, 2, 2, 2, 5, 5, 5, 8];
//            i,    j
//            i,       j
//            i           j
//              i           j
const thresh = 4;
const size = 3;
const avgCount = (arr, k, t) => {
  let sum = 0,
    count = 0,
    left = 0,
    right = k - 1,
    total = 0;

  while (count < k) {
    sum += arr[count];
    ++count;
  }
  while (right <= arr.length) {
    if (sum / k >= t) total++;
    sum -= arr[left];
    sum += arr[right];
    left++;
    right++;
  }
  return total;
};



const avgCount1 = (arr, k, t) => {
  let sum = 0,
    total = 0;

  for (let idx = 0; idx < k; ++idx) {
    sum += arr[idx];
  }

  for (let i = 0, j = k - 1; j <= arr.length; ++i, ++j) {
    if (sum / k >= t) total++;
    sum -= arr[i];
    sum += arr[j];
  }

  return total;
};


// time complexity O(n)
// space complexity O(1)
console.log(avgCount1(ints, size, thresh));
