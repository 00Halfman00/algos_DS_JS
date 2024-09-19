const haystack = 'aaabcdddbbddddabcdefghi';
const needle = 'abc'; //needle.length = 3
//output: [2, 14];

//time complexity: O(n + (m * o)) where n is the length of haystack; n is the length of needle and o is th enumber of time needle apperas in haystack

// 'aaabcdddbbddddabcdefghi'
//   'abc'       'abc'
//    i
//    count
//     i
//     count
//      i
//      count  res[res.length] = tmp; count = 0;

/*
  TASK: CREATE A FUNCTION THAT TAKES A STRING OF CHARACTERS AND A TARGET STRING OF CHARACTERS AND
        RETURNS AN ARRAY WITH THE INDEXE/S OF THE FIRST CHARACTER IN SUBSTRING/S INSIDE THE LARGER
        STRING

        1.  CREATE A FUNCTION NAMED getNeedle THAT WILL TAKE A LARGER STRING NAMED haystack AND A
            SMALLER STRING NAMED
            NOTE: MANY SUBSTRINGS/TARGETS CAN BE FOUND IN LARGER STRING
            A.  CREATE AN UNMUTABLE VARIABLE NAMED res THAT WILL BE AN ARRAY TO RETURN INDICES OF
                THE FIRST CHARACTER OF NEEDLES FOUND
            B.  IF THE haystack STRING OF CHARACTERS IS VALID AND THE needle STRING OF CHARACTERS
                IS VALID AND THE haystack's LENGTH OF CHARACTERS IS LARGER OR EQUAL TO THE needle's
                length of characters
                I.    CREATE THREE MUTABLE VARIABLES: tmp, start, and count.
                      EACH ARE UNASSIGNED EXCEPT FOR COUNT WHOSE VALUE WILL BE INITIATED AT ZERO
                II.   LOOP OVER THE haystack's STRING OF CHARACTERS, FROM LEFT TO RIGHT
                      a.  CHECK IF THE HAYSTACK AT INDEX i IS EQUAL TO THE FIRST CHARACTER OF needle;
                          THAT IS, EQUAL TO NEEDLE AT COUNT
                          a1. IF count IS ZERO
                              1a. ASSIGN THE VALUE OF i TO THE start VARIABLE
                          b1. []
*/


const getNeedles = (haystack, needle) => {
  const res = [];
  if(haystack && haystack[0] && needle && needle[0] && haystack.length >= needle.length){
    let start, tmp = '', count = 0;

    for(let i = 0; i < haystack.length; ++i){
      if(haystack[i] === needle[count]){
        if(count === 0) start = i;
        tmp += haystack[i];
        ++count;
        if(tmp === needle){
          res[res.length] = start;
          count = 0;
        }

      } else {
        if(haystack[i] === needle[0]) --i;
        if(count) count = 0;
        if(tmp[0]) tmp = '';
      }
    }
  }
  return res;
}

console.log('the indices of the first character in substrings that equal to needle: ', getNeedles(haystack, needle));
