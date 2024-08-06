const threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  let target, subtrahend;
  // if (nums.length < 3) return res;  // in the case that there are less than three elements in the array

  for (let i = 0; i < nums.length - 2; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;  // this line is essential to avoid doubles for i movements
    if (nums[i] > 0) break;
    target = -nums[i];

    for (let left = i + 1, right = nums.length - 1; left < right; ) {
      subtrahend = nums[left] + nums[right];
      if (target === subtrahend) {
        res[res.length] = [nums[i], nums[left], nums[right]];
        while (left < right && nums[left] === nums[left + 1]) ++left;  // this line is essential to avoid doubles, going  ->
        while (left < right && nums[right] === nums[right - 1]) --right;  // this line is essential to avoid doubles, going  <-
        ++left, --right;
      } else {
        if (subtrahend > target) --right;
        if (subtrahend < target) ++left;
      }
    }

  }
  return res;
};

// TIME COMPLEXITY: O( n^2 )


// Input: nums = [-1,0,1,2,-1,-4]  --> [ -4, -1, -1, 0, 1, 2 ]
//                                            i,  j,       k
//                                                i, j, k
// Output: [[-1,-1,2],[-1,0,1]]


// Input: nums = [-1, 0, 1, 0]   -->  [ -1, 0, 0, 1]]
// Output: [[ -1, 0, 1]]


const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 0, 0, 0];
const nums3 = [-1, 0, 1, 0];
console.log("threeSum's return value: ", threeSum(nums3));
