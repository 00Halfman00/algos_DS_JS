
/*
  1.  CRETE A FUNCTION NAMED curry
      (IT WILL TAKE A FUNCTION NAMED fn AS AN ARGUMENT AND RETURN A SEPERATE FUNCTION NAMED curried
      THAT WILL KEEP BEING CALLED WITH WHATEVER ARGUMENTS HAVE BEEN PASSED IN PREPENDED TO THE
      PARAMETERS OF ITSELF. UNTIL, FINALLY, ALL THE PARAMETERS OF fn HAVE VALUES AND RETURNS THE VALUE
      OF INVOKING fn WITH ALL THE PREVIOUS AND CURRENT ARGUMENTS )

      A.  IT WILL TAKE A FUNCTION AS ITS SOLE PARAMETER
      B.  IT WILL RETURN A FUNCTION NAMED curried
          I.    IT WILL TAKE A REST PARAMETER NAMED args1
          II.   IT WIL CHECK IF THE LENGTH OF THE args1 IS GREATER OR EQUAL TO THE LENGTH OF fn.
                ( IT IS CHECKING TO SEE IF ALL THE PARAMETERS OF fn CAN BE PROVIDED WITH A VALUE )
                a.  IF TRUE, IT WILL RETURN THE VALUE OF CALLING fn WITH .apply, WITH args1 AS THE
                        SECOND PARAMETER, IGNORING THE FIRST SINCE IT IS NOT BEING USED FOR ITS THIS
                        VALUE
                b.  ELSE, IT WILL RETURN A ANONYMOUS FUNCTION
                    b1. THE ANONYMOUS FUNCTION WILL TAKE ITS OWN REST PARAMETER NAMED args2
                    b2. IT WILL REASSINGN args2 TO BE AN ARRAY THAT WILL HAVE ALL THE ELEMTS OF
                        args FOLLOWED BY ALL THE ELEMENTS OF args2
                    b3. IT WILL RETURN THE VALUE OF CALLING curried WITH .apply, WITH args2 AS THE
                        SECOND PARAMETER, IGNORING THE FIRST SINCE IT IS NOT BEING USED FOR ITS THIS
                        VALUE
      NOTE:
      1.  curried will have closure/access to fn.
      2.  the anonymous function will have closure/access to args1.
*/

const curry = function (fn) {
  return (curried = function (...args1) {
    if (args1.length >= fn.length) return fn.apply('', args1);
    else {
      return function (...args2) {
        args2 = [...args1, ...args2];
        return curried.apply('', args2);
      };
    }
  });
};

const print = (name, surname, suffix1, suffix2) => {
  return name + ' ' + surname + ' ' + suffix1 + ' ' + suffix2;
};

const one = curry(print);
const two = one('bob');
const three = two('sinclair');
const four = three('M.D.', 'PhD');

console.log('response: ', one);
console.log('response: ', two);
console.log('response: ', three);
console.log('response: ', three);
console.log('response: ', four);
