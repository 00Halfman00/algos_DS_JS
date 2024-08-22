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
          II.   IT WILL CREATE AN UNMUTABLE VARIABLE NAMED key AND ITS VALUE WILL BE args as a string
          III.  IF THE cache OBJECT HAS THE ARGUMENT PASSED TO THE ANONYMOUS FUNCTION AS ONE OF ITS KEYS
                a.  IT WILL RETURN THE STORED VALUE FOR THAT KEY/ARGUMENT
          IV.   ElSE IF IT DOESN'T HAVE THAT KEY/ARGUEMNT STORED IN cache
                a.  IT WILL CREATE AN UNMUTABLE VARIABLE NAMED res AND ASSIGN IT THE VALUE OF
                    CALLING fn WITH args FROM THE ANONUMOUS FUNCTION AS A REST PARAMETER/ARGUMENT
                b.  IT WILL STORE key AS A KEY IN THE cache OBJECT WITH THE VALUE OF res
                c.  FINALLY, IT WILL RETURN res
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

// TIME COMPLEXITY: O(n^2)
// SPACE COMPLEXITY: O(n)
const fibo = (idx) => {
  if (idx <= 1) return 1;
  return fibo(idx - 1) + fibo(idx - 2);
};


// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
const fibo2 = (idx) =>{
  for(let left = 0, right = 1, tmp; idx > 0;){
    tmp = right;
    right = left + right;
    left = tmp;
    --idx;
    if(!idx) return right;
  }
}

const one = memoize(fibo2);
console.log(one(5));
// console.log(fibo2(5))
