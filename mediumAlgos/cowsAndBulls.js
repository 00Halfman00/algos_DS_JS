/*
  You are playing the Bulls and Cows game with your friend.

  You write down a secret number and ask your friend to guess what the number is. When your friend
  makes a guess, you provide a hint with the following info:

  The number of "bulls", which are digits in the guess that are in the correct position.
  The number of "cows", which are digits in the guess that are in your secret number but are located
  in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such
  that they become bulls. Given the secret number secret and your friend's guess guess, return the
  hint for your friend's guess.

  The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows.
  Note that both secret and guess may contain duplicate digits.


    1.  CREATE A FUNCTION NAMED getHint
        A.  CREATE AN UNMUTABLE VARIABLE NAMED hashMap AND ASSIGN IT AN OBJECT
        B.  CREATE TWO MUTABLE VARIABLES, ONE NAMED bulls THE OTHER cows, AND ASSIGN THEM THE VALUE ZERO
        C.  LOOP OVER THE LENGHT OF secret
            I.    IF secret AND guess AT THE SAME INDEX ARE EQUAl
                  a.  ADD ONE TO bulls
            II.   ELSE WHEN secret AND guews AT THE SAME INDEX ARE NOT EQUAL
                  a.  CHECK IF hashMap WITH THE KEY OF secret AT THE CURRENT INDEX IS LESS THAN ZERO
                      a1. IF SO, ADD ONE TO COWS
                  b.  CHECK IF hashMap WITH THE KEY OF guess AT THE CURRENT INDEX IS GREATER THAN ZERO
                      b1. IF SO, ADD ONE TO COWS
                  c.


*/

// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY O(1)

const getHint = (secret, guess) => {
  const hashMap = {};
  let bulls = 0, cows = 0;
  for(let i = 0; i < secret.length; ++i){
    if(secret[i] === guess[i]) bulls++;
    else {
      if(hashMap[secret[i]] < 0) cows++;
      if(hashMap[guess[i]] > 0) cows++;
      hashMap[secret[i]] = (hashMap[secret[i]] || 0) + 1;
      hashMap[guess[i]] = (hashMap[guess[i]] || 0) - 1;
    }
  }
  return `${bulls}A${cows}B`;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY O(1)
const getHint2 = (secret, guess) => {
  const hashMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) bulls++;
    else {
      if (hashMap[secret[i]] < 0) cows++;
      if (hashMap[guess[i]] > 0) cows++;
      hashMap[secret[i]]++;
      hashMap[guess[i]]--;
    }
  }
    return `${bulls}A${cows}B`;
};

// console.log(getHint('1708', '8710'));

console.log(getHint2('1123', '0111'));
