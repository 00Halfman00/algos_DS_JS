const Maze = class {
  constructor() {
    this.maze = null;
    this.startCoordinates = null;
  }

  setMaze(str) {
    // set a new maze and call helper function to set start coordinates
    this.maze = str.split('\n');
    this._setCoordinates();
    return this;
  }

  _setCoordinates() {
    // find the start cell/coordinates
    if (this.maze) {
      let startRow, startCol;
      for (let idx in this.maze) {
        if (this.maze[idx].includes('S')) startRow = +idx;
      }
      if (startRow >= 0) {
        startCol = this.maze[startRow].indexOf('S');
        this.startCoordinates = [startRow, startCol];
      }
    }
  }

  getShortestPath() {
    if (this.maze) {
      // set up data structures: queue: [] and visited: {}
      const queue = [this.startCoordinates],
        visited = {};
      visited[this.startCoordinates + ''] = [-1, -1];
      // iterate while queue is not empty
      while (queue[0]) {
        // work on FIFO operations, first cells seen are the first to be inspected
        let [startRow, startCol] = queue.shift();
        // check if the destination has been found
        if (this.maze[startRow][startCol] === 'F') {
          // run backwards thru the cells visited and return them in an array in reverse order: start to finish
          const path = [];
          while (startRow > -1) {
            path.push([startRow, startCol]);
            [startRow, startCol] = visited[[startRow, startCol] + ''];
          }
          return path.reverse();
        }
        // set up data structure with valid moves: (right, down, left, up)
        const cross = [
          [startRow, startCol + 1], // right
          [startRow + 1, startCol], // down
          [startRow, startCol - 1], // left
          [startRow - 1, startCol], // up
        ];

        // traverse the cross
        for (let [row, col] of cross) {
          // check for obstacles/walls/visited cells
          if (
            row >= 0 &&
            row < this.maze.length &&
            col >= 0 &&
            col < this.maze[0].length &&
            this.maze[row][col] !== '#' &&
            !visited[[row, col] + '']
          ) {
            // add to the end of the queue and mark as visited
            queue.push([row, col]);
            visited[[row, col] + ''] = [startRow, startCol];
          }
        }
      }
    }
  }
};

let maze1 = `############
#S        #
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

const myMaze = new Maze();
myMaze.setMaze(maze1);
console.log(myMaze.getShortestPath());
