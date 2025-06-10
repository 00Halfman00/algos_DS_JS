/*
You're given a number of users n and a list of referral edges
where each connection[i] = [a, b] means user a referred user b.
Count how many distinct countComponents (connected components) exist.
def countComponents(n: int, edges: List[List[int]]) -> int:


Find all the distinct clusters of node/s connected independently
of other clusters of nodes; that is, find all components are return their count.

Keep code Dry: no point in having multiple return statements
*/

const countComponents = (n, edges) => {
  // create variable components and initiate to zero
  let components = 0;
  if (n > 0) {
    // crate datastructures and initiate with data
    const adjList = new Array(n).fill(null).map(() => []);
    for (const [a, b] of edges) {
      adjList[a].push(b);
      adjList[b].push(a);
    }
    const visited = new Array(n).fill(false);
    // create dfs helper function that marks node as visited and loops over
    // node's neighbors and calls itself if they have not been visited
    const dfs = (user) => {
      visited[user] = true;
      for (const neighbor of adjList[user]) {
        if (!visited[neighbor]) dfs(neighbor);
      }
    };
    // loop over number of users, call dfs helper function with user if
    // user has not been visited, and, finally, increase components by one
    for (let user = 0; user < n; user++) {
      if (!visited[user]) {
        dfs(user);
        components += 1;
      }
    }
  }
  // return component's value
  return components;
};

// Example Usage:
const n1 = 5;
const edges1 = [
  [0, 1],
  [1, 2],
  [3, 4],
];
console.log(countComponents(n1, edges1)); // Output: 2

const n2 = 5;
const edges2 = [
  [0, 1],
  [2, 3],
  [0, 2],
];
console.log(countComponents(n2, edges2)); // Output: 2

const n3 = 3;
const edges3 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
console.log(countComponents(n3, edges3)); // Output: 1

const n4 = 1;
const edges4 = [];
console.log(countComponents(n4, edges4)); // Output: 1

const n5 = 0;
const edges5 = [];
console.log(countComponents(n5, edges5)); // Output: 0
