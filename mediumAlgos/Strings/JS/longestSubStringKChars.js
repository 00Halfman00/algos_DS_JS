var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (s.length * k === 0) return 0;
  const charCountMap = new Map();
  let maxLength = 1,
    leftIdx = 0;

  for (let rightIdx = 0; rightIdx < s.length; ++rightIdx) {
    charCountMap.set(s[rightIdx], (charCountMap.get(s[rightIdx]) || 0) + 1);

    while (charCountMap.size > k) {
      charCountMap.set(s[leftIdx], charCountMap.get(s[leftIdx]) - 1);
      if (charCountMap.get(s[leftIdx]) === 0) {
        charCountMap.delete(s[leftIdx]);
      }
      leftIdx += 1;
    }

    maxLength = Math.max(maxLength, rightIdx - leftIdx + 1);
  }

  return maxLength;
};

const s1 = 'eceba',
  k1 = 2;
const s2 = 'aa',
  k2 = 1;

console.log(lengthOfLongestSubstringKDistinct(s1, k1));
console.zlog(lengthOfLongestSubstringKDistinct(s2, k2));
