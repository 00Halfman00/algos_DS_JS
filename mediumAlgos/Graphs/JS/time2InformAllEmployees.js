/*
note:
  n is the number of employees
  head is the head manager node
  managers is an array of all managers
  informTime is an array that represents how long it takes for each manager to inform subordinates

  time and space complexity are both O(n)
  */

const numOfMinutesBFS = function (n, head, managers, informTime) {
  let totalMinutes = 0;
  if (n > 1) {
    const adjList = new Array(n).fill(null).map(() => []);
    managers.forEach((manager, subordinate) => {
      if (manager !== -1) adjList[manager].push(subordinate);
    });

    const queue = [[head, 0]];
    while (queue.length) {
      const [currEmployee, currTime] = queue.shift();
      totalMinutes = Math.max(totalMinutes, currTime);
      if (adjList[currEmployee][0] >= 0) {
        adjList[currEmployee].forEach((report) => {
          queue.push([report, currTime + informTime[currEmployee]]);
        });
      }
    }
  }
  return totalMinutes;
};

const numOfMinutesDFS = function (n, head, managers, informTime) {
  let totalMinutes = 0;

  if (n > 1) {
    const dfs = (idx) => {
      // if not the top manager or employee's informTime has not been updated
      // all the way up to the top manager
      if (managers[idx] !== -1) {
        // inform time for current employee += his/her manager's inform time
        // all the way up the management chain
        informTime[idx] += dfs(managers[idx]);
        // inform time up to the top boss has been updated for employee
        managers[idx] = -1;
      }
      // now you've reached the top manager or the inform time has been updated
      // for the current employee's manager up to the top manager
      return informTime[idx];
    };
    // loop over employees by informTime array from beginning to end
    for (let i = 0; i < n; ++i) {
      // if employee manages anyone
      if (informTime[i] !== 0) totalMinutes = Math.max(dfs(i), totalMinutes);
    }
  }
  return totalMinutes;
};

const n1 = 6,
  headID1 = 2,
  manager1 = [2, 2, -1, 2, 2, 2],
  informTime1 = [0, 0, 1, 0, 0, 0];

console.log(numOfMinutesBFS(n1, headID1, manager1, informTime1));
console.log(numOfMinutesDFS(n1, headID1, manager1, informTime1));

const n2 = 7,
  headID2 = 0,
  manager2 = [-1, 0, 0, 1, 1, 2, 2],
  informTime2 = [15, 0, 10, 0, 5, 0, 0];

console.log(numOfMinutesBFS(n2, headID2, manager2, informTime2));
console.log(numOfMinutesDFS(n2, headID2, manager2, informTime2));
