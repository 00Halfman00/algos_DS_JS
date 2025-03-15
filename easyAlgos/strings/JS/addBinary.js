/*
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.



Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

// two binary numbers, explictly adding either a 1 or a 0 to carry
var addBinary = function (a, b) {
  let i = a.lenght - 1,
    j = b.length - 1,
    carry = 0,
    result = '';
  while (i >= 0 || j >= 0 || carry > 0) {
    i >= 0 && a[i] === '1' ? (carry += 1) : (carry += 0);
    j >= 0 && b[j] === '1' ? (carry += 1) : (carry += 0);

    result = (carry % 2) + result;
    carry = Math.floor(carry / 2);

    i -= 1;
    j -= 1;
  }
  return result;
};

// console.log(addBinary('11', '1')); // expect 100
// console.log(addBinary('1010', '1011')); // expect "10101"

// sum more than two binary numbers

/*

Similarities:

Right-to-Left Iteration: Both algorithms iterate through the input strings from right to left, processing digits column by column.
Carry Handling: Both algorithms maintain a carry variable to handle overflow from one column to the next.
Modulo and Floor Division: Both algorithms use modulo and floor division to extract the digit for the result and calculate the carry.
Differences:

Base: addStrings operates in base 10 (decimal), while addBinary operates in base 2 (binary).
Digit Representation: addStrings uses decimal digits ('0'-'9'), while addBinary uses binary digits ('0' and '1').
Carry Calculation: In addBinary, the carry is calculated by dividing by 2 (instead of 10) because it's a base-2 system.
Adapting to 3 or More Binary Numbers:

Just like addStrings, addBinary can be extended to handle multiple binary numbers. Here's how:

Input Array: Instead of two input strings a and b, you would have an array of binary strings.
Sum Calculation: Inside the while loop, you would iterate through the array, summing the digits at the current position, along with the carry.
Modulo and Floor Division: The modulo and floor division operations would remain the same (% 2 and Math.floor(carry / 2)) because you're still working in base 2.
Carry Value: The carry value could be larger than 1 when adding more than two numbers.
Example of conceptual change:

JavaScript

*/

/*
  Given an array of binary strings, return their sum as a binary string.

  steps:
  1.  find the length of longest binary string in the array of binary strings
  2.  iterate starting at the length of the longest string up to the zero.
  3.  iterate over the array of string from first to last binary string in array.
      4.  do the math...
  5.  return the binary sum of all the binary strings in the array.
*/

const addManyBinaryStrings = (binaryNums) => {
  const maxLength = Math.max(...binaryNums.map((num) => num.length));
  let i = maxLength - 1,
    carry = 0,
    sum = 0,
    result = '';

  while (i >= 0 || carry > 0) {
    sum = carry;
    for (let j = 0; j < binaryNums.length; ++j) {
      if (
        binaryNums[j].length - 1 - (maxLength - 1 - i) >= 0 &&
        binaryNums[j][binaryNums[j].length - 1 - (maxLength - 1 - i)] === '1'
      ) {
        sum += 1;
      }
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i -= 1;
  }
  return result;
};

const binaryArray = ['101', '11', '1100', '1'];

console.log(addManyBinaryStrings(binaryArray)); // Output: 10101

/*
You've summarized it perfectly! That's the core essence of how carry handling works in binary addition (and, in fact, in any base addition).

To reiterate:

Modulo (carry % base):
This extracts the least significant digit (or bit) of the sum in the current place value.
It gives you the remainder when the sum is divided by the base.

Floor Division (Math.floor(carry / base)):
This calculates the carry that needs to be propagated to the next higher place value.
It gives you the quotient when the sum is divided by the base, effectively shifting the carry to the left.
This pattern is consistent across different number systems:

Binary (base 2):
carry % 2 and Math.floor(carry / 2)
Decimal (base 10):
If you were to implement decimal addition in a similar digit-by-digit way, you'd use carry % 10 and Math.floor(carry / 10).

You've grasped the fundamental principle. It's a powerful and versatile technique for handling carries in arithmetic operations.
*/
