import java.util.Arrays;

public class NumOfEnclaves {
  public static void main(String[] args) {

    // int[][] grid = {
    //     { 0, 0, 0, 0 },
    //     { 1, 0, 1, 0 },
    //     { 0, 1, 1, 0 },
    //     { 0, 0, 0, 0 }
    // };

      // int[][] grid = {
    //   {1,1,0,0,1,1,0,1,0,0},
    //   {0,0,0,1,0,0,1,0,1,0},
    //   {1,0,0,0,0,0,1,0,0,0},
    //   {1,0,0,1,0,0,0,1,1,0},
    //   {1,0,0,1,0,1,0,0,1,1},
    //   {0,0,0,0,1,1,0,0,0,1},
    //   {0,0,1,0,0,0,0,0,1,1},
    //   {1,1,0,0,1,0,1,0,0,0},
    //   {0,0,1,0,0,1,1,0,0,0},
    //   {0,0,1,1,0,0,1,1,0,0},{0,0,1,1,1,0,1,1,1,0},{1,1,1,0,0,1,0,1,1,0},{0,0,0,1,1,0,0,1,1,1}
    // };

    int[][] grid = {
      {1,1,0,0,1,1,0,1,0,0},
      {0,0,0,1,0,0,1,0,1,0},
      {1,0,0,0,0,0,1,0,0,0},
      {1,0,0,1,0,0,0,1,1,0},
      {1,0,0,1,0,1,0,0,1,1},
      {0,0,0,0,1,1,0,0,0,1},
    };

    for (int[] row : grid) {
      System.out.println(Arrays.toString(row));

    }
    System.out.println(numEnclaves(grid));

    for (int[] row : grid) {
      System.out.println(Arrays.toString(row));

    }
  }

  public static int numEnclaves(int[][] grid) {
    int count = 0;
    if(grid[0].length < 2 && grid.length < 2) return count;

    // get elements in the first row and column and the last row and column in grid
    // assuming that the grid is a square in dimensions
    for (int i = 0; i < grid.length || i < grid[0].length; i++) {
      // get elements in firt row and last row
      if (i < grid[0].length && grid[0][i] == 1) dfs(grid, 0, i);
      if (i < grid[0].length && grid[grid.length - 1][i] == 1) dfs(grid, grid.length - 1, i);

      // get elements in first column and last column
      // avoid corners since the row searches will cover them
      if (i > 0 && i < grid.length - 1 && grid[i][0] == 1) dfs(grid, i, 0);
      if (i > 0 && i < grid.length - 1 && grid[i][grid[0].length - 1] == 1) dfs(grid, i, grid[0].length - 1);
    }

    for (int[] row : grid) {
      for (int num : row) {
        if(num == 1)count++;
      }
    }

    return count;
  }

  public static void dfs(int[][] grid, int x, int y) {
    // condition to not change element in grid:
    // x or y are negative numbers
    // x or y are greater than the length of row/column
    // grid at coordinates x, y is a zero already
    if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == 0){
      return;
    }

    // for all the initial calls made on the elements found on the borders of grid, this line below will run
    grid[x][y] = 0;

    // afterwards, call dfs function on all four directions, clockwise
    dfs(grid, x-1, y);// go up
    dfs(grid, x, y+1); // go right
    dfs(grid, x+1, y);//go down
    dfs(grid, x, y-1);// go left
  }
}

                                        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                                        // [0, 0, 0, 1, 0, 0, 1, 0, 1, 0]
                                        // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
                                        // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
                                        // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
                                        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
