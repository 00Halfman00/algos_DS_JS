/*
📄 Problem:
You’ve joined the ApplyPass logistics team to optimize delivery routes!
Given a list of packages, each with a delivery start time, end time, and weight,
your task is to maximize the total weight of packages delivered without any delivery time overlaps.
You can only deliver one package at a time, and you can only pick non-overlapping packages.

🧩 Example Input:

packages = [
  [1, 4, 5],  / start at 1, end at 4, weight 5
  [3, 5, 1],
  [0, 6, 8],
  [4, 7, 4],
  [3, 8, 6],
  [5, 9, 3]
]

✅ Expected Output:
9


💡 Explanation:
The maximum weight can be achieved by selecting packages: [1,4,5] and [4,7,4] and [5,9,3] → Total weight = 5 + 4 + 3 = 12


⚙️ Constraints:
1 <= number of packages <= 10^4
0 <= start time < end time <= 10^9
1 <= weight <= 10^4
*/

const maxDeliveryWeight = (packages) => {
  const len = packages.length;
  // edge case
  if (!len) return 0;
  // prep datastructures before initiating the looping
  packages.sort((a, b) => a[1] - b[1]);
  const dp = newArray(len).fill(0);
  dp[0] = packages[0][2];

  // initate the loop mechanism, starting with the second package in packages, moving left to right
  for (let i = 1; i < len; ++i) {
    currentStartTime = packages[i][0];
    currentWeight = packages[i][2];
    maxWeightExcludingCurrent = dp[i - 1];

    // initiate the binary search mechanism, searching the package/s before the current package
    let left = 0,
      right = i - 1,
      mid = 0,
      prevIdxBS = -1;
    while (left <= right) {
      mid = Math.floor((left + (right - left)) / 2);
      if (packages[mid][1] <= currentStartTime) {
        prevIdxBS = mid;
        left = ++mid;
      } else right = --mid;
    }
  }
};

const packages1 = [
  [1, 4, 5],
  [3, 5, 1],
  [0, 6, 8],
  [4, 7, 4],
  [3, 8, 6],
  [5, 9, 3],
];

console.log(maxDeliveryWeight(packages1));
