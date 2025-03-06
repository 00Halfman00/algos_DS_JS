const maxProfit = (prices) => {
  let maxGain = 0; // time complexity: O(1)
  if (prices.length) {
    let minPrice = prices[0], // time complexity: O(1)
      count = 0, // time complexity: O(1)
      length = prices.length; // time complexity: O(1)
    // time complexity: O(n)
    while (count < length) {
      if (prices[count] < minPrice)
        minPrice = prices[count]; // time complexity: O(1)
      else if (prices[count] - minPrice > maxGain) {
        maxGain = prices[count] - minPrice; // time complexity: O(1)
      }
      ++count; // time complexity: O(1)
    }
  }
  return maxGain; // time complexity: O(1)
};

// time complexity: O(n)
// space complexity: O(1)

prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0

prices3 = [2, 4, 1, 6];
console.log(maxProfit(prices3)); // Output 5

prices4 = [];
console.log(maxProfit(prices4)); // output 0
