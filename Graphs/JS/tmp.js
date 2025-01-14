import minBinaryHeapPriorityQueue from './minBinaryHeapPriorityQueue.js';

/*
  Muscle memory to reinforce synaptic paths
  Node class/fuction that takes a string as its sole parameter.
*/

const Node = function (val) {
  this.val = val;
};

/*
  Graph class that takes no parameters
*/

const Graph = class {
  constructor() {
    this.adjacencyList = {};
  }

  /*
    createVertex method that takes a string as its sole parameter
    1.  If the argument is valid
    2.  If the vertex doesn't already exist
  */
  createVertex(vertexName) {
    if (typeof vertexName === 'string') {
      if (!this.adjacencyList[vertexName]) {
        this.adjacencyList[vertexName] = { node: vertexName, edges: [] };
        return true;
      }
    }
    return false;
  }

  /*
    createEdge method that takes two strings and a number as its parameters
    1.  If the arguments are valid
    2.  If both vertices exist in adjacencyList and are not the smae vertex
    3.  If first vertex doesn't already have the second vertex as an edge
    4.  If second vertex doesn't already have the first vertex as an edge
  */
  createEdge(vertexName1, vertexName2, weight) {
    if (
      typeof vertexName1 === 'string' &&
      typeof vertexName2 == 'string' &&
      typeof weight === 'number'
    ) {
      if (
        this.adjacencyList[vertexName1] &&
        this.adjacencyList[vertexName2] &&
        vertexName1 !== vertexName2
      ) {
        if (!this._hasEdge(vertexName1, vertexName2)) {
          this.adjacencyList[vertexName1].edges.push({
            node: vertexName2,
            weight,
          });
        }
        if (!this._hasEdge(vertexName2, vertexName1)) {
          this.adjacencyList[vertexName2].edges.push({
            node: vertexName1,
            weight,
          });
        }
        return true;
      }
    }
    return false;
  }

  /*
    _hasEdge helper method that takes two strings as its parameters
    1.  if the list of edges for vertexName1 already contains vertexName2
  */
  _hasEdge(vertexName1, vertexName2) {
    for (let edge of this.adjacencyList[vertexName1].edges) {
      if (edge.node === vertexName2) return true;
    }
    return false;
  }

  /*
    removeVertex method that takes a string as its parameter
    1.  If the argument is valid
    2.  If the vertex exist in adjacencyList
    3.  Go thru the edges/neighbors for the vertex to be deleted
        and erease it from list of edges of each neighbor
  */
  removeVertex(vertexName) {
    if (typeof vertexName === 'string') {
      if (this.adjacencyList[vertexName]) {
        let vertex;
        for (let neighbor of this.adjacencyList[vertexName].edges) {
          // each neighbor will look like this: { node: vertexName, edges: [] }
          vertex = this.adjacencyList[neighbor.node];
          vertex.edges = vertex.edges.filter((e) => e.node !== vertexName);
        }
        delete this.adjacencyList[vertexName];
        return true;
      }
    }
    return false;
  }

  /*
    removeEdge method that takes two strings as its parameters
    1.  If the both arguments are valid
    2.  If both vertices exist in adjacencyList
    3.  Get the list of edges for each of the two verices and filter out the other from the list
  */
  removeEdge(vertexName1, vertexName2) {
    if (typeof vertexName1 === 'string' && typeof vertexName2 === 'string') {
      if (this.adjacencyList[vertexName1] && this.adjacencyList[vertexName2]) {
        this.adjacencyList[vertexName1].edges = this.adjacencyList[
          vertexName1
        ].edges.filter((e) => e.node !== vertexName2);

        this.adjacencyList[vertexName2].edges = this.adjacencyList[
          vertexName2
        ].edges.filter((e) => e.node !== vertexName1);
        return true;
      }
    }
    return false;
  }

  /*
    getShortestPath method
    1.  If both arguments are valid
    2.  If both vertices exist in adjacencyList/graph
    3.  Create a priority queue and two tables:
        4.  distances table will keep track of the known distance from the starting vertex up to the currently being viewed neighbor
        5.  previous table will keep track of which neighbor led to the current vertex being viewed
    6.  Loop while priority queue is not empty
    7.  dequeue vertex from the priority queue
    8.  check if it is the destination vertex
        9. If so return what payload you wish
    10. Else loop over the list of neighbors for the current vertex
    11. calculate the path cost to the current neighbor
    12. If path cost is less than what the neighbor has for itself in the distances table
        13. update distances table with the cost to get to the current neighbor
        14. update previous table so that the neighbor points to the right vertex that lead to lesser path cost
        15. insert into priority queue, the current neighbor with the priority of the path cost
  */

  getShortestPath(startVertex, endVertex) {
    if (typeof (startVertex === 'string' && typeof endVertex === 'string')) {
      if (this.adjacencyList[startVertex] && this.adjacencyList[endVertex]) {
        ///////////////////        STAGE 1

        const queue = new minBinaryHeapPriorityQueue(),
          distances = {},
          previous = {};

        for (let vertex in this.adjacencyList) {
          if (vertex === startVertex) {
            queue.enqueue(vertex, 0);
            distances[vertex] = 0;
          } else {
            queue.enqueue(vertex, Infinity);
            distances[vertex] = Infinity;
          }
          previous[vertex] = null;
        }
        ///////////////////        STAGE 2
        while (queue.nodes[0]) {
          const currVertex = queue.dequeue();
          /////////////////   check for final destination
          if (currVertex.value === endVertex) {
            console.log('finished');
            const path = [];
            let tmp = endVertex;
            while (tmp) {
              path.push(tmp);
              tmp = previous[tmp];
            }
            return path.reverse();
          }
          ///////////////    else run thru the list of neighbors for the current vertex in adjacencyList
          else if (currVertex && distances[currVertex] !== Infinity) {
            let pathCost = 0;
            for (let edge of this.adjacencyList[currVertex.value].edges) {
              pathCost = currVertex.priority + edge.weight;
              if (pathCost < distances[edge.node]) {
                distances[edge.node] = pathCost;
                previous[edge.node] = currVertex.value;
                queue.enqueue(edge.node, pathCost);
              }
            }
          }
        }
      }
    }
  }
};

const myGraph = new Graph();
myGraph.createVertex('A');
myGraph.createVertex('B');
myGraph.createVertex('C');
myGraph.createVertex('D');
myGraph.createVertex('E');
myGraph.createVertex('F');
myGraph.createEdge('A', 'B', 4);
myGraph.createEdge('A', 'C', 2);
myGraph.createEdge('B', 'E', 3);
myGraph.createEdge('C', 'D', 2);
myGraph.createEdge('C', 'F', 4);
myGraph.createEdge('D', 'E', 3);
myGraph.createEdge('D', 'F', 1);
myGraph.createEdge('E', 'F', 1);

// console.log(myGraph.adjacencyList['A']);
// console.log(myGraph.adjacencyList['B']);

// console.log(myGraph.removeVertex('A'));

// console.log(myGraph.removeEdge('A', 'B'));
// console.log('removed');

// console.log(myGraph.adjacencyList['A']);
// console.log(myGraph.adjacencyList['B']);

console.log(myGraph.getShortestPath('A', 'E'));
