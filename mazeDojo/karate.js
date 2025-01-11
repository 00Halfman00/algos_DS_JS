const Maze = class {
  constructor() {
    this.maze = null;
    this.startCoordinates = null;
  }

  setMaze(str) {
    this.maze = str.split('\n');
    this._setCoordinates();
    return this;
  }

  _setCoordinates() {
    if (this.maze) {
      let startRow, startCol;
      for (let idx in this.maze) {
        if (this.maze[idx].includes('S')) startRow = +idx;
      }
      startCol = this.maze[startRow].indexOf('S');
      this.startCoordinates = [startRow, startCol];
    }
  }

  getShortestPath() {
    if (this.maze) {
      // set up data structures: queue: [] and visited: {}
      const queue = [this.startCoordinates],
        visited = {},
        path = [];
      visited[this.startCoordinates + ''] = { steps: 0, coordinates: [-1, -1] };
      // iterate while queue is not empty
      let shortest = { coordinates: 0, steps: Infinity };
      while (queue[0]) {
        let [startRow, startCol] = queue.pop();
        // check if the destination has been found       ///////////////////////////////////////////
        if (this.maze[startRow][startCol] === 'G') {
          if (visited[[startRow, startCol] + ''].steps < shortest.steps) {
            shortest = visited[[startRow, startCol] + ''];
            path[0] = [startRow, startCol];
          }
        }
        ///////////////        final code block          ///////////////////////////////////////////
        if (!queue[0] && shortest.steps < Infinity) {
          console.log(visited[[startRow, startCol] + ''].steps);
          console.log('found treasure: ', this.maze[startRow][startCol]);
          [startRow, startCol] = path[0];
          path.pop();
          while (startRow > -1) {
            path.push([startRow, startCol]);
            [startRow, startCol] =
              visited[[startRow, startCol] + ''].coordinates;
          }
          return path.reverse();
        }
        ////////////////////////////////////////////////////////////////////////////////////////////
        // set up data structure with valid moves: (right, down, left, up)
        const cross = [
          [startRow, startCol + 1],
          [startRow + 1, startCol],
          [startRow - 1, startCol],
          [startRow, startCol - 1],
        ];
        // traverse the cross with valid moves
        for (let [row, col] of cross) {
          // check for obstacles/boundaries
          if (
            0 <= row < this.maze.length &&
            0 <= col < this.maze[0].length &&
            this.maze[row][col] !== '#' &&
            !visited[[row, col] + '']
          ) {
            queue.push([row, col]);
            visited[[row, col] + ''] = {
              coordinates: [startRow, startCol],
              steps: 0,
            };
            let steps = 0;
            let tmpRow = row;
            let tmpCol = col;
            while (tmpRow > -1) {
              steps += 1;
              [tmpRow, tmpCol] = visited[[tmpRow, tmpCol] + ''].coordinates;
            }
            visited[[row, col] + ''].steps = steps;
          }
        }
      }
    }
  }
};

let maze1 = `############
# S        #
##### ######
#          #
######## ###
#          #
## ##### ###
#         G#
############`;

// maze1 = maze1.split('\n');
// console.log(maze1);

const myMaze = new Maze();
myMaze.setMaze(maze1);
// console.log('maze: ', myMaze);
console.log(myMaze.getShortestPath());
