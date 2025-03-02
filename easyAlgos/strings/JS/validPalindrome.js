var isPalindrome = function (s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  console.log(clean); // a man, a plan, a canal: panama

  for (let left = 0, right = clean.length - 1; left <= right; ++left, --right) {
    if (clean[left] !== clean[right]) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
