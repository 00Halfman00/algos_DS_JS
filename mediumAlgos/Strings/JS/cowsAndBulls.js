/*
299. Bulls and Cows
You are playing the Bulls and Cows game with your friend.
You write down a secret number and ask your friend to guess what the number is. When your
friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong
position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows.
Note that both secret and guess may contain duplicate digits.



Example 1:
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"


Example 2:
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.


Constraints:

1 <= secret.length, guess.length <= 1000
secret.length == guess.length
secret and guess consist of digits only.
*/

// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY O(1)

const getHint3 = (secret, guess) => {
  const hashMap = {};
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) bulls++;
    else {
      if (hashMap[secret[i]] < 0) cows++;
      if (hashMap[guess[i]] > 0) cows++;
      hashMap[secret[i]] = (hashMap[secret[i]] || 0) + 1;
      hashMap[guess[i]] = (hashMap[guess[i]] || 0) - 1;
    }
  }
  return `${bulls}A${cows}B`;
};

var getHintV2 = function (secret, guess) {
  let bulls = 0,
    cows = 0;
  const guessHash = new Map();
  const secretHash = new Map();
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) bulls++;
    else {
      guessHash.set(+guess[i], (guessHash.get(+guess[i]) || 0) + 1);
      secretHash.set(+secret[i], (secretHash.get(+secret[i]) || 0) + 1);
    }
  }
  for (let i = 0; i < 10; ++i) {
    cows += Math.min(guessHash.get(i) || 0, secretHash.get(i) || 0);
  }
  return `${bulls}A${cows}B`;
};

var getHintV1 = function (secret, guess) {
  let bulls = 0,
    cows = 0;
  const hashGuest = new Array(10).fill(0);
  const hashSecret = new Array(10).fill(0);

  for (let i = 0; i < secret.length; ++i) {
    if (guess[i] === secret[i]) bulls++;
    else {
      hashGuest[guess[i]]++;
      hashSecret[secret[i]]++;
    }
  }
  for (let i = 0; i < 10; ++i) {
    cows += Math.min(hashGuest[i], hashSecret[i]);
  }

  return `${bulls}A${cows}B`;
};

var getHint = function (secret, guess) {
  let bulls = 0,
    cows = 0;
  const hash = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) bulls++;
    else {
      if (hash[guess[i]] < 0) cows++;
      if (hash[secret[i]] > 0) cows++;
      hash[guess[i]]++;
      hash[secret[i]]--;
    }
  }
  return `${bulls}A${cows}B`;
};

// console.log(getHint('1708', '8710'));

console.log(getHint('1123', '0111'));
