grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

grid1 = [["1","0","1","1","0","1","1"]]

grid2 = [
   ["1","1","1"],
   ["0","1","0"],
   ["1","1","1"]
   ]




def numOfIslandsDFS(grid):
  """
  1. Run through the matrix looking for cells that are land, which are marked by a one.
  2. If a one is found, increment counter and call dfs on that cell.
  3. dfs will mark the cell as visited and call dfs on neighbors if logical, recursively.
  """
  counter = 0
  for row in range(len(grid)):
    for col in range(len(grid[0])):
      if(grid[row][col] == '1'):
          counter += 1
          dfs(row, col)
  print(grid)
  return counter

def dfs(x, y):
  if x < 0 or x > len(grid) - 1 or y < 0 or y > len(grid[0]) - 1 or grid[x][y] == '0':
    return
  grid[x][y] = '0'
  # up
  dfs(x - 1, y)
  # right
  dfs(x, y + 1)
   # down
  dfs(x + 1, y)
  # left
  dfs(x, y - 1)

# print(numOfIslandsDFS(grid))
def numIslandsBFS(grid):
    def bfs(x, y):
      stack = [(x, y)]

      while stack:
          x, y = stack.pop()
          grid[x][y] = "X"

          # up
          if x - 1 >= 0 and grid[x - 1][y] == "1": stack.append((x - 1, y))
          # right
          if y + 1 < len(grid[0]) and grid[x][y + 1] == "1": stack.append((x, y + 1))
          # down
          if x + 1 < len(grid) and grid[x + 1][y] == "1": stack.append((x + 1, y))
          # left
          if y - 1 >= 0 and grid[x][y - 1] == "1": stack.append((x, y - 1))

    counter = 0
    for i in range(len(grid)):
      for j in range(len(grid[0])):
        if grid[i][j] == "1":
            counter += 1
            bfs(i, j)
    return counter

# print(numIslandsBFS(grid))
def numIslandsDFS2(grid):
        def dfs(x, y):
            grid[x][y] = "0"
            # up
            if x - 1 >= 0 and grid[x - 1][y] == "1": dfs(x - 1, y)
            # right
            if y + 1 < len(grid[0]) and grid[x][y + 1] == "1": dfs(x, y + 1)
            # down
            if x + 1 < len(grid) and grid[x + 1][y] == "1": dfs(x + 1, y)
            # left
            if y - 1 >= 0 and grid[x][y - 1] == "1": dfs(x, y - 1)

        counter = 0
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if(grid[row][col]) == "1":
                    counter += 1
                    dfs(col, row)
        return counter


print(numIslandsDFS2(grid2))
