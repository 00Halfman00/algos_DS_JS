/*
79. Word Search
Medium

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false


Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
*/

/*
   // assuming all rows are of equal length
   1.  outer loop over the length of the board                      *******
   2.  inner loop over the length of the rows in the board          *******
   4.  if first letter is found
       I.  call a helper function to search board via DFS           *******
           a.  check for valid cell (has character & within bounds) *******
           b.  check if count === word's length - 1                 *******
               1b. return count
           b.  mark the cell                                        *******
           c.  adjust count                                         *******
           call helper function on right, down, left, and up cells  *******
*/

const board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word1 = 'ABCCED'; // true

const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word2 = 'SEE'; // true

const board3 = [
  ['a', 'b'],
  ['c', 'd'],
];
const word3 = 'abcd'; // false

const board4 = [
  ['a', 'b'],
  ['c', 'd'],
];
const word4 = 'cdba'; // true

const board5 = [
  ['C', 'A', 'A'],
  ['A', 'A', 'A'],
  ['B', 'C', 'D'],
];

const word5 = 'AAB'; // true

const board6 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

const word6 = 'ABCB'; // faslse

const exist = function (board, word) {
  const recurseDFS = (row, col, txt) => {
    if (!txt) return true;
    let resp = false;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      return resp;
    if (board[row][col] !== txt[0]) return resp;
    board[row][col] = '*'; // mark cell
    const cross = [
      [row, col + 1], // right
      [row + 1, col], // down
      [row, col - 1], // left
      [row - 1, col], // up
    ];
    for (let [row, col] of cross) {
      resp = recurseDFS(row, col, (txt = txt.substring(1)));
      if (resp) break;
    }
    board[row][col] = txt[0];
    return resp;
  };

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if (board[i][j] === word[0]) {
        if (recurseDFS(i, j, word)) return true;
      }
    }
  }
  return false;
};

var exist1 = function (board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;
  const backtrack = function (row, col, suffix) {
    /* Step 1). check the bottom case. */
    if (suffix.length == 0) return true;
    /* Step 2). Check the boundaries. */
    if (
      row < 0 ||
      row == ROWS ||
      col < 0 ||
      col == COLS ||
      board[row][col] != suffix.charAt(0)
    )
      return false;
    /* Step 3). explore the neighbors in DFS */
    let ret = false;
    // mark the path before the next exploration
    board[row][col] = '#';
    const directions = [
      [0, 1], // right
      [1, 0], // down
      [0, -1], // left
      [-1, 0], // up
    ];
    for (let [rowOffset, colOffset] of directions) {
      ret = backtrack(row + rowOffset, col + colOffset, suffix.slice(1));
      if (ret) break;
    }
    /* Step 4). clean up and return the result. */
    board[row][col] = suffix.charAt(0);
    return ret;
  };

  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS; ++col) {
      if (backtrack(row, col, word)) return true;
    }
  }
  return false;
};

var exist3 = function (board, word) {
  const recurseDFS = (row, col, txt) => {
    if (!txt) return true;
    if (
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board[0].length &&
      board[row][col] === txt[0]
    ) {
      board[row][col] = '*';
      let resp = false;
      const cross = [
        [row, col + 1],
        [row + 1, col],
        [row, col - 1],
        [row - 1, col],
      ];
      for (let [row, col] of cross) {
        resp = recurseDFS(row, col, txt.substring(1));
        if (resp) break;
      }
      board[row][col] = txt[0]; // clearn up after DFS, restoring letters on the board
      return resp;
    }
    return false;
  };
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === word[0]) {
        if (recurseDFS(i, j, word)) return true;
      }
    }
  }
  return false;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  the problem in human language is to find a pattern of adjacent cells in grid that compose
  a given word. A cell is adjacent to another cell if it is vertically or horizontally next to it.
  Moreover, the same cell cannot be used twice to compose the sought word.
  To solve this problem use both dfs (depth first search) and backtracking.


   // CREATE MAIN FUNCTION
      parameters: a board (2D array), and a word (string)
   1.  outer loop over the length of the board                      *******
   2.  inner loop over the length of the rows in the board          *******
   3.  if first letter is found
       4.   call dfs helper function to search board                 *******
            a.  needs to return true if word is found
       5.  create dfs helper function

   // CREATE DFS HELPER FUNCTION
      parameters: a board (2D array), row, column and index (integers)
   1. condition to break recursion: index equals the lenght of word
   2. if row and colum coordinates are valid and if cell contains
      letter at index being sought
   3. create a variable to hold value of letter at cell
   4. mark cell as visited (Example: board[row][col] = "*")
   5. create a cross of the coordinates to travel: right, down, left and up
   6. iterate over length of the cross, calling dfs helper function
*/

var exist2 = function (board, word) {
  const recurseDFS = (board, row, col, idx = 0) => {
    // condition to stop recursion if whole word if found
    if (idx === word.length) return true;
    if (
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board[0].length &&
      board[row][col] === word[idx]
    ) {
      const tmp = word[idx]; // store letter at current iteration to restore back later when current iteration is revisited; that is, when the call stack starts to unwind and return
      board[row][col] = '*'; // mark cell on the board as visited
      const cross = [
        [row, col + 1], // right
        [row + 1, col], // down
        [row, col - 1], // left
        [row - 1, col], // up
      ];
      // loop over cells that are to the right, down, left and up from the current cell
      for (let [row, col] of cross) {
        if (recurseDFS(board, row, col, idx + 1)) return true;
      }
      // code needed to restore letters that were visited on marked cells
      board[row][col] = tmp;
      return;
    }
  };

  // steps 1 and 2 involve traversing the grid's cells until the first letter is found of the sought word
  // iterate over rows
  for (let i = 0; i < board.length; ++i) {
    // iterate over columns
    for (let j = 0; j < board[0].length; ++j) {
      // steps 3 and 4                                // row and column combination make up a cell
      if (board[i][j] === word[0]) {
        // start DFS process when first letter in word is found
        if (recurseDFS(board, i, j)) return true; // if word is found stop everything and return true
      }
    }
  }
  return false; // word was not found
};

var exist3 = function (board, word) {
  const recurseDFS = (board, row, col, idx = 0) => {
    if (idx === word.length) return true;
    if (
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board[0].length &&
      board[row][col] === word[idx]
    ) {
      const tmp = word[idx];
      board[row][col] = '*';

      if (recurseDFS(board, row, col + 1, idx + 1)) return true;
      if (recurseDFS(board, row + 1, col, idx + 1)) return true;
      if (recurseDFS(board, row, col - 1, idx + 1)) return true;
      if (recurseDFS(board, row - 1, col, idx + 1)) return true;

      board[row][col] = tmp;
      return;
    }
  };

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === word[0]) {
        if (recurseDFS(board, i, j)) return true;
      }
    }
  }
  return false;
};

// console.log(exist2(board1, word1));
console.log(exist3(board2, word2));
// console.log(exist2(board3, word3));
// console.log(exist2(board4, word4));
// console.log(exist2(board5, word5));
// console.log(exist2(board6, word6));
