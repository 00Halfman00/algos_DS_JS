/*
946. Validate Stack Sequences
Medium

Given two integer arrays pushed and popped each with distinct values,
return true if this could have been the result of a sequence of push and
pop operations on an initially empty stack, or false otherwise.



Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

*/

/*
  NOTE:   So you have a beginning array, called pushed, an empty stack, and a popped array which needs to be verified if it has a logical sequence of actions performed
          from removing from the pushed array adding to the stack and removing from the stack, simultaneously.

  1.  it takes two arrays, called pushed and popped
  2.  it creates two variables:
      3.  a count variable to keep track of the length of popped
      4.  an empty array, called stack
  5.  it outer loops over the length of pushed from start to end
      6.  it places the current element at the end of the stack array
      7.  it inner loops over stack while count is less than the length of the popped array
          and while the last element in the stack is equal to element in the popped array at index count
          8.  remove the least element from the stack
          9.  add one to count
  10. if count is equal to the length of the popped array
      11. return true
  12. else return false
*/

const validateStackSequence = (pushedArr, poppedArr) => {
  const stack = [];
  let count = 0;

  for (let i = 0; i < pushedArr.length; ++i) {
    stack.push(pushedArr[i]);

    while (stack.length && stack[stack.length - 1] === poppedArr[count]) {
      stack.pop();
      count++;
    }
  }
  return count === poppedArr.length;
};

// const pushed1 = [1, 0, 2],
//   popped1 = [2, 1, 0];
// console.log(validateStackSequence(pushed1, popped1)); // expect: false

const pushed1 = [1, 2, 3, 4, 5],
  popped1 = [4, 5, 3, 2, 1];
console.log(validateStackSequence(pushed1, popped1)); // expect: true

const pushed2 = [1, 2, 3, 4, 5],
  popped2 = [4, 3, 5, 1, 2];
console.log(validateStackSequence(pushed2, popped2)); // expect: false

/*
  pushed1 = [1, 2, 3, 4, 5]
  popped1 = [4, 5, 3, 2, 1]

  element = 1
  stack = [ 1 ]




*/
