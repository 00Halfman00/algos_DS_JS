const haystack = 'aaabcdddbbddddabcdefghi';
const needle = 'abc'; //needle.length = 3
//output: [2, 14];

//time complexity: O(hn)

/*
needle = 'abc'
'aaabcdddbbddddabcdefghi'
   i           i
   jjj         jjj
   ccc         ccc
   true        true
*/

const getNeedles = (haystack, needle) => {
  const response = [];
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle[0]) {
      for (let j = i, c = 0; j < i + needle.length; ++j, ++c) {
        if (haystack[j] === needle[c]) {
          if (c === needle.length - 1) {
            response[response.length] = i;
          }
        }
      }
    }
  }
  return response;
};

console.log(
  'the indices of the first character in substrings that equal to needle: ',
  getNeedles(haystack, needle)
);
