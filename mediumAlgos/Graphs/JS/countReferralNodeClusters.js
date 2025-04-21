/*
You're given a number of users n and a list of referral connections
where each connection[i] = [a, b] means user a referred user b.
Count how many distinct referral NocountReferralNodeClusters (connected components) exist.
def countReferralNodeClusters(n: int, connections: List[List[int]]) -> int:


that is, find all the distinct clusters of node/s connected independently
of other clusters of nodes.

Keep code Dry: no point in having multiple return statements
*/

const countReferralNodeClusters = (n, connections) => {
  let count = 0;
  if (n > 0) {
    // create adjacency list of size n, filled with empty arrays
    const adjList = new Array(n).fill(null).map(() => []);
    // add data/nodes to adjacency list gotten from connections
    for (const [a, b] of connections) {
      // undirected graph a <-> b
      adjList[a].push(b);
      adjList[b].push(a);
    }
    // trace cluster of nodes (connected components)
    const visited = new Array(n).fill(false);
    // Recursively explore the connected component starting from this node.
    const dfs = (node) => {
      // if gotten this far, it's the firt time the node has been seen
      visited[node] = true;
      // go thru the list of neighbors of the current node
      for (const neighbor of adjList[node]) {
        // only if the neighbor-node has not been visited,
        // call dfs, passing in the neighbor
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };
    // keep count of distinct set/s of node-clusters
    for (let node = 0; node < n; ++node) {
      if (!visited[node]) {
        dfs(node);
        ++count;
      }
    }
  }
  return count;
};

// Example Usage:
const n1 = 5;
const connections1 = [
  [0, 1],
  [1, 2],
  [3, 4],
];
console.log(countReferralNodeClusters(n1, connections1)); // Output: 2

const n2 = 5;
const connections2 = [
  [0, 1],
  [2, 3],
  [0, 2],
];
console.log(countReferralNodeClusters(n2, connections2)); // Output: 2

const n3 = 3;
const connections3 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
console.log(countReferralNodeClusters(n3, connections3)); // Output: 1

const n4 = 1;
const connections4 = [];
console.log(countReferralNodeClusters(n4, connections4)); // Output: 1

const n5 = 0;
const connections5 = [];
console.log(countReferralNodeClusters(n5, connections5)); // Output: 0
