const Maze = class {
  constructor() {
    this.maze = null;
    this.startCoordinates = null;
    this.finishCoordinates = null;
  }

  setMaze(str) {
    if (typeof str === 'string') {
      this.maze = str.split('\n');
      this._setCoordinates();
    } else {
      console.error('Invalid argument passed in for maze');
    }
  }

  _setCoordinates() {
    if (this.maze) {
      for (let i = 0; i < this.maze.length; ++i) {
        for (let j = 0; j < this.maze[i].length; ++j) {
          if (this.maze[i][j] === 'S') {
            this.startCoordinates = [i, j];
          }
          if (this.maze[i][j] === 'F') {
            this.finishCoordinates = [i, j];
          }
        }
      }
    } else {
      console.error('Maze is missing');
    }
  }

  getShortestPath() {
    // create and initialize datastructures
    const queue = [this.startCoordinates],
      visited = {},
      path = [],
      right = [],
      down = [],
      left = [],
      up = [],
      cross = [right, down, left, up];
    visited[[this.startCoordinates] + ''] = [-1, -1];

    // initiate persistent loop while queue is not empty
    while (queue.length) {
      // grab coordinates from beginnning of queue (FIFO)
      let [curRow, curCol] = queue.shift();
      // check if finish-cell has been found
      if (this.maze[curRow][curCol] === 'F') {
        while (curRow !== -1) {
          path.push([curRow, curCol]);
          [curRow, curCol] = visited[[curRow, curCol] + ''];
        }
        return path.reverse();
      }
      //  adjust values for the directions/coordinates in the cross
      (right[0] = curRow), (right[1] = curCol + 1);
      (down[0] = curRow + 1), (down[1] = curCol);
      (left[0] = curRow), (left[1] = curCol - 1);
      (up[0] = curRow - 1), (up[1] = curCol);

      // loop over adjusted dicrection/coordinates in cross
      for (let [nextRow, nextCol] of cross) {
        if (
          nextRow >= 0 &&
          nextRow < this.maze.length &&
          nextCol >= 0 &&
          nextCol < this.maze[nextRow].length &&
          this.maze[nextRow][nextCol] !== '#' &&
          !visited[[nextRow, nextCol] + '']
        ) {
          queue.push([nextRow, nextCol]);
          visited[[nextRow, nextCol] + ''] = [curRow, curCol];
        }
      }
    }
  }
};

const maze2 = `#S      #
####### #
#       #
# #######
#      F#`;
// const maze3 = 'SF';
// const maze4 = '';

const myMaze = new Maze();
myMaze.setMaze(maze2);
console.log(myMaze.getShortestPath());

/*
get shortest path algorithm

I.    Approach: BFS (Breath First Search), FIFO (First In First Out)
II.   Create a queue out of an array and with the start coordinates in it
III.  Also create an object, call it visited, to keep a key value pair of { current coordinates: next coordinates}
IV.   Loop while queue is not empty
      V.    Remove the first coordinates in the queue
      VI.   Check if the coordinates in the maze contain the finish pointer.
      VII.  Else Create an array, call it cross, that contains the coordinates that are right, down, left and up from the current coordinates.
            IV.   Loop over the cross.
                  X.    Check if coordinates are valid and coordinates in the cross are not a '#' (wall) and coordinates are not an entry in the visited object
                        XI.   Push coordinates to end of the queue
                        XII.  Add entry for those coordinates in the visited object
*/
