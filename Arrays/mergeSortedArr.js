// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// let nums1 = [2, 0], m = 1, nums2 = [1], n = 1;
// let nums1 = [1], m = 1, nums2 = [], n = 0;
// let nums1 = [0], m = 0, nums2 = [1], n = 1;
let nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [1,2,2], n = 3;

var merge = function (nums1, m, nums2, n) {
  const tmp = [...nums1];
  let left = 0,
    right = 0,
    count = 0;

  while (count < m + n) {
    if (tmp[left] !==  undefined && !nums2[right]) break;
    else if (tmp[left] && tmp[left] <= nums2[right]) {
      nums1[count] = tmp[left];
      ++left;
      ++count;
    } else if (nums2[right]) {
      nums1[count] = nums2[right];
      ++right;
      ++count;
    }
  }
  while (tmp[left]) {
    nums1[count] = tmp[left];
    ++left;
    ++count;
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
