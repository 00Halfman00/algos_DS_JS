/*
240. Search a 2D Matrix II
Medium

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.


Example 1:
Input: matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
]
target = 5
Output: true

Example 2:
Input: matrix = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
]
target = 20
Output: false

*/

/*
  1.  create a queue and place the first element of the first row in the queue
  2.  loop while queue is not empty
  3.  remove the first element of the queue and make it the current num
  4.  check if it is the target being sought
  4.  else check if current num right neighbor is smaller or equal to target
  5.  also check if current num's bottom neighbor is smaller or equal to target
  6.  also check if row and col are within range of the matrix
      7.  push the element into the queue
*/

const searchMatrix1 = (matrix, target) => {
  if (typeof matrix[0][0] === 'number') {
    const queue = [[0, 0]],
      previous = {};
    while (queue[0]) {
      const [startRow, startCol] = queue.shift();
      if (matrix[startRow][startCol] === target) return true;
      const moves = [
        [startRow, startCol + 1], // right
        [startRow + 1, startCol], // down
      ];
      for (let [row, col] of moves) {
        if (
          row < matrix.length &&
          col < matrix[0].length &&
          !previous[[row, col] + '']
        ) {
          if (matrix[row][col] <= target) {
            queue.push([row, col]);
            previous[[row, col] + ''] = [startRow, startCol];
          }
        }
      }
    }
  }
  return false;
};

/*
  v2
*/

var searchMatrixV2 = function (matrix, target) {
  if (matrix[0]) {
    for (let row of matrix) {
      if (row[0] <= target || row[row.length - 1] <= target) {
        if (row.includes(target)) return true;
      }
    }
  }
  return false;
};

var searchMatrix3 = function (matrix, target) {
  if (matrix[0]) {
    let left, right, mid;
    for (let row of matrix) {
      (left = 0), (right = row.length - 1);
      while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (row[mid] === target) return true;
        if (row[mid] > target) right = mid - 1;
        else left = mid + 1;
      }
    }
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  if (matrix[0]) {
    let row, left, right, mid;
    while (matrix[0]) {
      row = matrix.pop();
      (left = 0), (right = row.length - 1);
      while (left <= right) {
        if (target < row[left] || target > row[right]) break;
        mid = left + Math.floor((right - left) / 2);
        if (row[mid] === target) return true;
        if (row[mid] > target) right = mid - 1;
        else left = mid + 1;
      }
    }
  }
  return false;
};

const matrix1 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target1 = 5;

// console.log(searchMatrix(matrix1, target1));

const matrix2 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target2 = 20;

const matrix3 = [[-1, 3]];
const target3 = 3;

console.log(searchMatrix(matrix1, target1));
