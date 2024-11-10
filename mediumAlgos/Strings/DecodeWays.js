/*

91. Decode Ways

You have intercepted a secret message encoded as a string of numbers.
The message is decoded via the following mapping:

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

For example, "11106" can be decoded into:
"AAJF" with the grouping (1, 1, 10, 6)
"KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
Note: there may be strings that are impossible to decode.
Given a string s containing only digits, return the number of ways to decode it.
If the entire string cannot be decoded in any valid way, return 0.
The test cases are generated so that the answer fits in a 32-bit integer.



Example 1:
Input: s = "12"
Output: 2
Explanation:
"12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3
Explanation:
"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "06"
Output: 0
Explanation:
"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.



Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).


*/

const numDecodingsMemo = (s) => {
  const memo = {};
  let res;

  var recurse = function (idx, str) {
    if (memo[idx]) return memo[idx];
    if (idx === str.length || idx === str.length - 1) return 1;
    if (str[idx] === '0') return 0;
    res = recurse(idx + 1, str);
    if (+str.substring(idx, idx + 2) <= 26) res += recurse(idx + 2, str);
    memo[idx] = res;
    return res;
  };

  return recurse(0, s);
};

const numDecodingsDP = (s) => {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s.charAt(0) === '0' ? 0 : 1;

  for (let i = 2; i < dp.length; ++i) {
    if (s.charAt(i - 1) !== 0) {
      dp[i] = dp[i - 1];
    }

    let twoDigit = +s.substring(i - 2, i);
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};

var numDecodingsCT = function (s) {
  if (s.charAt(0) === '0') return 0;

  // oneBack and twoBack will retain values outside of loop
  // twoDigit and current will always be reinitialized inside loop
  let oneBack = 1,
    twoBack = 1,
    twoDigit,
    current;

  for (let i = 1; i < s.length; i++) {
    ///////////////////  reset current to keep track of count on each iteration
    current = 0;
    ////////////////////////////////// one digit search
    if (s[i] !== '0') current = oneBack;
    /////////////////////////////////     two digits search
    twoDigit = +s.substring(i - 1, i + 1);
    if (twoDigit >= 10 && twoDigit <= 26) current += twoBack;
    //////////////////////// switch values to retain info for next iteration
    twoBack = oneBack;
    oneBack = current;
  }

  return oneBack;
};

console.log(numDecodingsCT('2125'));

// console.log(numDecodingsMemo('109'));
// console.log(numDecodingsMemo('2125'));
// console.log(numDecodingsDP('326'));f
// console.log(numDecodingsCT('326'));
// console.log(numDecodingsCT('10'));

/*
  2125 can be:
  2, 1, 2, 5
  21, 25
  2, 12, 5
  21, 2, 5
  2, 1, 25
  5 different ways to interpret as long as its not a single digit zero, two digits do not start
  with zero and is a value between 10-26 inclusive
*/
