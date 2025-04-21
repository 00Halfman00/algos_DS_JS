/*
  1.  CREATE A FUNCTION NAMED memoize
      ( IT WILL TAKE A FUNCTION AS A PARAMETER NAMED fn AND RETURN AN ANONYMOUS FUNCTION THAT WILL
      TAKE ANY ARGUMENT/S AND KEEP TRACK OF THE ARGUMENT/S IT HAS SEEN IN CACHE ( an object named cache )
      AS A KEY WITH THE VALUE OF HAVING HAVE CALLED THAT KEY/ARGUMENT ON fn AND STORING THE RESULT IN CACHE.
      WHEN CALLED AGAIN IT WILL CHECK IF IT HAS THAT ARGUMENT AS A KEY IN cache, IF SO, IT WILL RETURN
      THE STORED RESULT, RESULTING IN A QUICKER RETRIEVAL OF CALLING fn WITH PREVIOUSLY SEEN ARGUMENT/S )

      A.  IT WILL TAKE A FUNCTION AS ITS SOLE PARAMETER NAMED fn
      B.  IT WILL CREATE A UNMUTABLE VARIABLE NAMED cache WITH AN OBJECT AS ITS VALUE
      C.  IT WILL CREATE AN ANONUMOUS FUNCTION AND RETURN IT
          I.    THE ANONYMOUS FUNCTION WILL HAVE A REST OPERATER AS ITS PARAMETER NAMED args
          II.   IT WILL CREATE A UNMUTABLE VARIABLE NAMED key AND ITS VALUE WILL BE args as a string
          III.  IF THE cache OBJECT HAS THE ARGUMENT PASSED TO THE ANONYMOUS FUNCTION AS ONE OF ITS KEYS
                a.  IT WILL RETURN THE STORED VALUE FOR THAT KEY/ARGUMENT
          IV.   ElSE IF IT DOESN'T HAVE THAT KEY/ARGUEMNT STORED IN cache
                a.  IT WILL CREATE AN UNMUTABLE VARIABLE NAMED res AND ASSIGN IT THE VALUE OF
                    CALLING fn WITH args FROM THE ANONUMOUS FUNCTION AS A REST PARAMETER/ARGUMENT
                b.  IT WILL STORE key AS A KEY IN THE cache OBJECT WITH THE VALUE OF res
                c.  FINALLY, IT WILL RETURN res

  2.  CREATE A FUNCTION NAMED fibo ( RECURSION )
      ( IT WILL TAKE A INDEX AND RETURN THE FIBONACCI NUMBER AT THAT INDEX )
      A.  IT WILL TAKE A PARAMETER NAMED idx
      B.  IF idx LESS THAN 1 OR EQUAL TO 1
          I.  IT WILL RETURN ONE ( THIS IS THE BASE CASE )
              (THE FIBONACCI SEQUENCE OF NUMBERS STARTS WITH A 1)
          II. IT WILL RETURN THE RESULT OF ADDING THE CALL TO fibo WITH THE ARGUMENT OF idx MINUS ONE
              WITH ANOTHER CALL TO fibo WITH THE ARGUMENT OF idx MINUS TWO.
              (IF THE ARGUMENT PASSED IN FOR idx IS SMALL, THE RECURSION WILL ONLY MAKE A FEW CALL TO
              fibo. BUT IF THE NUMBER IS LARGE, IT WILL EXPONENTIALLY CALL ITSELF REDOING WORK THAT IT HAS
              SEEN BEFORE.)

  3.  CREATE A FUNCTION NAMED fibo2  ( ITERATION )
      ( IT WILL TAKE A INDEX AND RETURN THE FIBONACCI NUMBER AT THAT INDEX )
      A.  IT WILL TAKE A PARAMETER NAMED idx
      B.  IT WILL USE A FOR LOOP TO ITERATE
          I.    IT WILL CREATE THREE MUTABLE VARIABLES
                a.  A VARIABLE NAMED left WITH THE VALUE OF ZERO
                b.  A VARIABLE NAMED right WITH THE VALUE OF ONE
                    ( THE FIBONNACI SEQUENCE OF NUMBER STARTS WITH A ZERO FOLLOWED BY A ONE )
                    ( FIBONACCI NUMBERS: 0, 1, 1, 2, 3, 5, 8, 13, ... )
                c.  A VARIABLE NAMED tmp THAT IS LEFT UNASSIGNED
          II.   IT WILL LOOP WHILE idx IS GREATER THAN ZERO
          III.  IT WILL SUBTRACT ONE FROM idx WITH EACH PASS/ITERATION/LOOP
                a.  IF idx EQUALS 1 ( CONDITION TO STOP LOOPING )
                    a1. IT WILL RETURN right
          IV.   IT WILL DO SOME MATH WITH EACH PASS/LOOP
                ( IT WILL KEEP ADDING left WITH right WHILE REASSIGNING ALL THREE VARIABLES )
                a.  IT WILL ASSIGN tmp THE VALUE OF right
                    ( THE PURPOSE IS TO NOT LOSE THE VALUE OF right ON THIS PASS/LOOP)
                b.  IT WILL ASSIGN right TO BE THE SUM OF ADDING left WITH right
                    ( THIS IS HOW YOU GET THE NEXT FIBONACCI NUMBER, BY ADDING THE PREVIOUS TWO
                     NUMBERS )
                c.  FINALLY, IT WILL ASSIGN left THE VALUE OF tmp
                    ( THE PURPOSE IS TO PREP FOR THE NEXT LOOP, MAKING right THE SUM OF left PLUS
                     right, AND MAKING left HAVE THE VALUE OF RIGHT WHEN THE LOOP STARTED )

*/

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args + '';
    if (cache[key]) return cache[key];
    else {
      const res = fn(...args);
      cache[key] = res;
      return res;
    }
  };
};

// TIME COMPLEXITY: O(2^n)
// SPACE COMPLEXITY: O(n)
const fibo = (idx) => {
  if (idx <= 2) return 1;
  return fibo(idx - 1) + fibo(idx - 2);
};
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
const fibo2 = (idx) => {
  if (idx === 0) return 0;
  for (let left = 0, right = 1, tmp; idx > 0; --idx) {
    if (idx === 1) return right;
    tmp = right;
    right = left + right;
    left = tmp;
  }
};

////////////////  dynamic programing ( tabulation ) //////////////////////////////
// // TIME COMPLEXITY: O(n)
// // SPACE COMPLEXITY: O(n)
const fibo3 = (idx) => {
  const tab = [0, 1, 1];
  for (let i = 3; i <= idx; ++i) {
    tab[i] = tab[i - 2] + tab[i - 1];
  }
  return tab[idx];
};

////////////////  dynamic programing ( tabulation ) //////////////////////////////
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)
const fibo4 = (idx) => {
  const tab = {
    0: 0,
    1: 1,
    1: 1,
  };
  for (let i = 3; i <= idx; ++i) {
    tab[i] = tab[i - 2] + tab[i - 1];
  }
  return tab[idx];
};

/////////////////////// dynamic programing ( memoization )  ///////////////////
const fibo5 = (idx, memo = [0, 1, 1], c = true) => {
  if (idx === 0 && c) {
    count = false;
    return 0;
  }
  if (memo[idx]) return memo[idx];
  if (idx <= 2) return 1;
  const num = fibo5(idx - 1, memo) + fibo5(idx - 2, memo);
  memo[idx] = num;
  return num;
};

const one = memoize(fibo3);
one(5);
one(7);
one(5);
//console.log(fibo(7))
// console.log(fibo5(7));

// 0 1 1 2 3 5 8,13
// 0,1,2,3,4,5,6,7
