/*
You're given a number of users n and a list of referral connections
where each connection[i] = [a, b] means user a referred user b.
Count how many distinct referral groups (connected components) exist.
def countReferralGroups(n: int, connections: List[List[int]]) -> int:
*/

function countReferralGroups(n, connections) {
  let count = 0;
  if (n > 0) {
    // create adjacency list data structure from an array of size n,
    // filled with empty arrays
    const adjList = new Array(n).fill(null).map(() => []);
    for (const [a, b] of connections) {
      // undirected graph: a <--> b
      adjList[a].push(b);
      adjList[b].push(a);
    }
    // create array data structure of size n to track visited nodes by index
    // and trace cluster of nodes in its component
    const visited = new Array(n).fill(false);
    // Recursively explore the connected component
    const dfs = (node) => {
      visited[node] = true;
      for (const neighbor of adjList[node]) {
        if (!visited[neighbor]) dfs(neighbor);
      }
    };

    for (let node = 0; node < n; node++) {
      if (!visited[node]) {
        dfs(node);
        count++;
      }
    }
  }
  return count;
}

// Example Usage:
const n1 = 5;
const connections1 = [
  [0, 1],
  [1, 2],
  [3, 4],
];
console.log(countReferralGroups(n1, connections1)); // Output: 2

const n2 = 5;
const connections2 = [
  [0, 1],
  [2, 3],
  [0, 2],
];
console.log(countReferralGroups(n2, connections2)); // Output: 2

const n3 = 3;
const connections3 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
console.log(countReferralGroups(n3, connections3)); // Output: 1

const n4 = 1;
const connections4 = [];
console.log(countReferralGroups(n4, connections4)); // Output: 1

const n5 = 0;
const connections5 = [];
console.log(countReferralGroups(n5, connections5)); // Output: 0
