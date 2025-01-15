// time to fuck around with mazes, bfs style

/*
  INDEX OF PLAN TO CREATE MAZE CLASS
  1.  Create a maze class
  2.  Create a setMaze method
  3.  Create a _setStartCoordinates helper method
  4.  Create a shortestPathBFS method
*/

/*
  Maze class
  1.  takes no parameters
  2.  has three properties:
      (this.maze, this.startCoordinates, this.endCoordinates)
*/

const Maze = class {
  constructor() {
    this.maze = null;
    this.startCoordinates = null;
    this.endCoordinates = null;
  }

  /*
    setMaze helper method
    1.  takes a string as its parameter
    2.  calls two helper funcitons:
        (_setStartCoordinates, _setEndCoordinates)
  */

  setMaze(str) {
    if (typeof str === 'string') {
      this.maze = str.split('\n');
      this._setMazeCoordinates();
    }
    return this;
  }

  /*
  _setMazeCoordinates helper method
  1.  looks for the row that contains the start flag
      and looks for the row that contains the end flag
  2.  looks for the column that contains the start flag
      and looks for the column that contains the end flag
  3.  sets the startCoordinates to be the start row and start col
      and sets the endCoordinates to be the end row and end col
  */
  _setMazeCoordinates() {
    if (this.maze) {
      let startRow, startCol, endRow, endCol;
      for (let idx in this.maze) {
        if (this.maze[idx].includes('S')) startRow = +idx;
        if (this.maze[idx].includes('F')) endRow = +idx;
      }
      if (startRow && endRow) {
        startCol = this.maze[startRow].indexOf('S');
        endCol = this.maze[endRow].indexOf('F');
      } else return;
      this.startCoordinates = [startRow, startCol];
      this.endCoordinates = [endRow, endCol];
    }
  }

  /*
    shortestPathBFS method
    1.  inititates a queue with start coordinates and a visited coordinates table with a stop flag
    2.  loops while the queue is not empty
        3.  removes coordinates from the beginning of the queue
        4.  checks if those coordinates are the coordinates of the end flag of the maze
        5.  constructs a data structure that contains the allowed moves for the maze
        6.  loops over the length of the allowed moves data structure
            7.  checks if coordinates are within bounds of the maze;
                checks if the coordinates are not a wall;
                checks if the coordinates have not already been visited
                8.  inserts coordinates to the end of the queue
                9.  marks entry for the coordinates in the visited table with a payload of its preceding coordinates
  */

  shortestPathBFS() {
    // checkk for the existence of all three conditions or you will waste time: O(n^2) time.
    if (this.maze && this.startCoordinates && this.endCoordinates) {
      const queue = [this.startCoordinates],
        previous = {};
      previous[[this.startCoordinates] + ''] = [-1, -1];

      while (queue[0]) {
        const [startRow, startCol] = queue.shift();
        if (this.maze[startRow][startCol] === 'F') {
          return this._getPath(startRow, startCol, previous);
        } else {
          const cross = [
            [startRow, startCol + 1], // right
            [startRow + 1, startCol], // down
            [startRow, startCol - 1], // left
            [startRow - 1, startCol], // up
          ];

          for (let [row, col] of cross) {
            if (
              row >= 0 &&
              row < this.maze.length &&
              col >= 0 &&
              col < this.maze[0].length &&
              this.maze[row][col] !== '#' &&
              !previous[[row, col] + '']
            ) {
              queue.push([row, col]);
              previous[[row, col] + ''] = [startRow, startCol];
            }
          }
        }
      }
    }
  }

  /*
    _getPath helper method
    1.  takes two numbers and an object as its parameters
    2.  places all the visited coordinates in an array and returns them in the  right order
  */

  _getPath(row, col, table) {
    if (
      typeof row === 'number' &&
      typeof col === 'number' &&
      typeof table === 'object'
    ) {
      if (this.maze && this.startCoordinates && this.endCoordinates) {
        const path = [];
        while (row > -1) {
          path.push([row, col]);
          [row, col] = table[[row, col] + ''];
        }
        return path.reverse();
      }
    }
  }
};

let maze1 = `############
#S         #
##### ######
#          #
######## ###
#          #
## ##### ###
#         F#
############`;
const maze2 = '##  S   F ####';
const maze3 = 'SF';
const maze4 = '';

const mazing = new Maze();
mazing.setMaze(maze1);
console.log(mazing.shortestPathBFS());

console.log(mazing);
