/*
note:
  n is the number of employees
  headID is represents the top manager
  managers is an array of managers for each ith employee
  informTime is an array that represents how long it takes for each employee
  (if they manage anyone) to inform subordinates.

  time and space complexity are both O(n)
  */

const numOfMinutesBFS = (n, headID, managers, informTime) => {
  let maxTime = 0;
  if (n > 1) {
    // create adjacency list mapping managers to employees
    const adjList = new Array(n).fill(null).map(() => []);
    managers.forEach((manager, subordinate) => {
      if (manager !== -1) {
        adjList[manager].push(subordinate);
      }
    });
    // use BFS to traverse "graph" and calculate max time to inform employees in company
    const queue = [[headID, 0]];
    let employee = null,
      time = null;
    while (queue.length) {
      [employee, time] = queue.shift();
      maxTime = Math.max(maxTime, time);
      // if employee has subodinates; that is, does employee manage anyone
      if (adjList[employee].length) {
        adjList[employee].forEach((report) => {
          // add subordinate, plus time to reach subordinate
          queue.push([report, time + informTime[employee]]);
        });
      }
    }
  }
  return maxTime;
};

// DFS is faster than BFS. Wonder if BFS can be set up to avoid processing every
// node/path to a manager

const numOfMinutesDFS = (n, headID, managers, informTime) => {
  let maxTime = 0;
  if (n > 1) {
    // use DFS to traverse "graph" to calculate max time to inform employees
    const dfs = (idx) => {
      // if not the top manager or someone who has had a depth first search performed
      // for his/her accumulated informtime up to the top manager
      if (managers[idx] !== -1) {
        informTime[idx] += dfs(managers[idx]);
        // mark as if employee was top manager to memoize infomtime for employee
        managers[idx] = -1;
      }
      // return top manager or memoized informtime for employee
      return informTime[idx];
    };
    // iterate over employees
    for (let i = 0; i < n; ++i) {
      // calculate time if employee has an informtime
      if (informTime[i] !== 0) {
        maxTime = Math.max(maxTime, dfs(i));
      }
    }
  }
  return maxTime;
};

const n1 = 6,
  headID1 = 2,
  manager1 = [2, 2, -1, 2, 2, 2],
  informTime1 = [0, 0, 1, 0, 0, 0];

/*
                         2 (Head, time: 1)

                   /  /  |  \  \
                  0  1   3   4  5
*/

console.log(numOfMinutesBFS(n1, headID1, manager1, informTime1));
console.log(numOfMinutesDFS(n1, headID1, manager1, informTime1));

const n2 = 7,
  headID2 = 0,
  manager2 = [-1, 0, 0, 1, 1, 2, 2],
  informTime2 = [15, 0, 10, 0, 5, 0, 0];

/*
                    0 (Head, time: 15)
                  /   \
                 /     \
              1 (time: 0) 2 (time: 10)
              / \        / \
             /   \      /   \
 3 (time: 0) 4 (time: 5) 5 (time: 0) 6 (time: 0)
*/

console.log(numOfMinutesBFS(n2, headID2, manager2, informTime2));
console.log(numOfMinutesDFS(n2, headID2, manager2, informTime2));
