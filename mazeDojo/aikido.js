// FIND THE SHORTEST IN A MAZE FROM THE START: 'S' UP TO THE FINISH: 'F'
// AVOID WALLS: '#'

/*
  Maze class
  1.  Create a class to hold a maze and start corrdinates

*/

const Maze = class {
  constructor() {
    this.maze = null;
    this.startCoordinates = null;
  }

  /*
    setMaze method
    1.  It will check if the argument passed is a string
      2.  Method will take a string and set it as the maze for the class instance
      3.  It will call the _setCoordinates method of the class
  */
  setMaze(str) {
    if (typeof str === 'string') {
      this.maze = str.split('\n');
      this._setCoordinates();
    }
    return this;
  }

  /*
    _setCoordinates method
    1.  It will check if the class instance has a maze
      2.  It will look for the row containing the start pointer and assign it to a startRow variable.
      3.  It will look for the column that contains the start pointer and assign it to a startCol variable.
      4.  It will set the start coordinates of the class instance to the
          start row and start column in the 2D array
  */

  _setCoordinates() {
    if (this.maze) {
      let startRow, startCol;
      for (let idx in this.maze) {
        if (this.maze[idx].includes('S')) startRow = +idx;
      }
      if (startRow >= 0) {
        startCol = this.maze[startRow].indexOf('S');
      } else return;
      this.startCoordinates = [startRow, startCol];
    }
  }

  /*
    getShortestPath method
    1.  It will check if the class instance has a maze
      2.  It will create a couple of data structures ( a queue and a visted cell's table),
          and both will be inititated with starting data: ( queue: start coordinates, visited: stop flag)
      3.  It will iterate while the queue is not empty
          4.  It will remove the first array of row and column coordinates from the queue.
          5.  It will check if the coordinates of row and column contain the finish pointer.
              6.  It will create an empty array, called path, to return the path or coordinates used to
                  get from the start to the finish
              7.  It will loop while the start coordinates flag has been reachec
                  8.  It will push the startCoordinates onto the parth array
                  9.  It will reassign the startCoordinates to the respective previous coordinates,
                      contained in the visited cell's table
                  10. It will return the path reversed; that is, it will return an array that starts
                      with the start coordinates and up to the finish coordinates
          11. Create cross of valid moves (right, down, left, and up)
              12. Check if coordinates are within bounds of the maze, and if coordinates are not a wall and hasn't been visited.
                  13. Add coordinates to the end of the queue
                  14. Mark coordinates  and their previous coordinates in the visited table.
  */

  getShortestPath() {
    if (this.maze && this.startCoordinates) {
      //
      //        set up data structures and inititate with starting data
      //
      const queue = [this.startCoordinates],
        visited = {};
      visited[this.startCoordinates + ''] = [-1, -1];
      //
      //        loop while queue is not empty and dequeue the first node in queuue (FIFO)
      //
      while (queue[0]) {
        let [startRow, startCol] = queue.shift();
        //
        //        check if the finish pointer has been found
        //
        if (this.maze[startRow][startCol] === 'F') {
          const path = [];
          while (startRow > -1) {
            path.push([startRow, startCol]);
            [startRow, startCol] = visited[[startRow, startCol] + ''];
          }
          return path.reverse();
        }
        //
        //    Loop over cross of valid moves. If coordinates pass condition, queue coordinates and mark entry in visited table
        //
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
            !visited[[row, col] + '']
          ) {
            queue.push([row, col]);
            visited[[row, col] + ''] = [startRow, startCol];
          }
        }
      }
    }
  }
};

const maze2 = '##  S   F ####';
// const maze3 = 'SF';
// const maze4 = '';

const myMaze = new Maze();
myMaze.setMaze(maze2);
console.log(myMaze.getShortestPath());
