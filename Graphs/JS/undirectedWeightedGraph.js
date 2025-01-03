/*
  STEP ONE
  1.  Create a class that will create nodes for the undirected weighted graph
  2.  Create a clas that will serve as temporay priority queueu
*/

const Node = function (val) {
  this.val = val;
};

// test
// const myNode = new Node('some name');
// console.log(myNode);

const PriorityQueue = class {
  constructor() {
    this.nodes = [];
  }

  enqueue(value, priority) {
    this.nodes.push({ value, priority });
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.nodes.shift();
  }
};

/*
  STEP TWO
  1.  Create a class for the undirected, weighted graph
*/

const undirectedWeightedGraph = class {
  constructor() {
    this.adjacencyList = {};
  }

  /*
    STEP THREE
    NOTE:   In this scenario a class called Node is used to represent some data about an entity.
            Perhaps that entity is best stored in a database, but there is metadata that might
            be of use by having either a class that can hadle stored data more elagently and can
            be managed in a more efficient manner, or an object, which is faster/ligter and dynamic.

    1.  Method to create an entry in the adjacency list with a vertex's name
        as the key in adjacency list and a dictionary containing a class instance
        of a Node to represent an entity and a list of edges that are associated with
        the entity/vertex as the value.
    time complexity: O(1)
  */
  createVertex(vertexName) {
    if (typeof vertexName === 'string') {
      if (!this.adjacencyList[vertexName]) {
        this.adjacencyList[vertexName] = {
          node: new Node(vertexName),
          edges: [],
        };
        return true;
      }
    }
    return false;
  }

  /*
    STEP FOUR
    1.  Method to create an edge between two vertices
    2.  Edge is weighted so edge should look like { node: name of node, weight: some number}
    3.  Check if the edge already exist in the list of edges for that vertex with a helper function
    time complexity: O(v)
  */
  createEdge(vertex1Name, vertex2Name, weight) {
    if (
      typeof vertex1Name === 'string' &&
      typeof vertex2Name === 'string' &&
      typeof weight === 'number'
    ) {
      if (this.adjacencyList[vertex1Name] && this.adjacencyList[vertex2Name]) {
        if (!this._hasEdge(vertex1Name, vertex2Name)) {
          this.adjacencyList[vertex1Name].edges.push({
            node: vertex2Name,
            weight,
          });
        } else return false;
        if (!this._hasEdge(vertex2Name, vertex1Name)) {
          this.adjacencyList[vertex2Name].edges.push({
            node: vertex1Name,
            weight,
          });
        } else return false;
        return true;
      }
    }
    return false;
  }

  /*
    STEP FIVE
    1.  Create a helper function to check if edge already exist in a vertex's list of edges
    time complexity: O(v)
  */
  _hasEdge(vertex1Name, vertex2Name) {
    if (typeof vertex1Name === 'string' && typeof vertex2Name === 'string') {
      if (this.adjacencyList[vertex1Name] && this.adjacencyList[vertex2Name]) {
        for (let edge of this.adjacencyList[vertex1Name].edges) {
          if (edge.node === vertex2Name) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /*
    STEP SIX
    1. Method to remove a vertex from the adjacency list and from the list of edges on neighbors

    time complexity: O(v + e)
  */

  removeVertex(vertexName) {
    if (typeof vertexName === 'string') {
      if (this.adjacencyList[vertexName]) {
        for (let neighbor of this.adjacencyList[vertexName].edges) {
          let vertex = this.adjacencyList[neighbor.node];
          vertex.edges = vertex.edges.filter((e) => e.node !== vertexName);
        }
        delete this.adjacencyList[vertexName];
        return true;
      }
    }
    return false;
  }

  /*
    STEP SEVEN
    1.  Method to remove an edge/connection between two vertices/neighbors
    time complexity: O(e)
  */

  removeEdge(vertex1Name, vertex2Name) {
    if (typeof vertex1Name === 'string' && typeof vertex2Name === 'string') {
      if (this.adjacencyList[vertex1Name] && this.adjacencyList[vertex2Name]) {
        let vertexOne = this.adjacencyList[vertex1Name];
        vertexOne.edges = vertexOne.edges.filter((e) => e.node !== vertex2Name);
        let vertexTwo = this.adjacencyList[vertex2Name];
        vertexTwo.edges = vertexTwo.edges.filter((e) => e.node !== vertex1Name);
        return true;
      }
    }
    return false;
  }

  /*
    STEP EIGHT
    1.  Method to find the shortes path between two vertices in a undirected, weighted graph.
        2.  create three data structures two objects and a priority queue.
            3.  first object named distances will keep track of the cost it takes to get
                from the start vertex up to the vertex being referenced in the distances object/table
            4.  second object named previous will keep track of the vertex that shares and edge with
                the current vertex and was the vertex that produced the current vertex.
            5.  the priority queue does what a priority queue does
        6.  loop over the adjacencyList and give the three data structures the right data to start
            the process of finding the shortest path from a start vertex to a end vertex
        7.  loop while queue is not empty
            8.  get a vertex from the queue
            9.  check if the current vertex is the end vertex
            10. loop over the list of edges for the current vertex
                11. if vertex is valid
                    12. get the path cost: (current vertex's value in distances table + the edge's weight)
                    13. if the path cost is less than the edge's value in the distances table
                        14. make edge's value in the distances table the path cost
                        15. mark the current vertex as the previous value for the edge
                        16. enter into the priority queue the edge along with the path cost
  */

  shortestPath(startVertex, destinationVertex) {
    if (
      typeof startVertex === 'string' &&
      typeof destinationVertex === 'string'
    ) {
      if (
        this.adjacencyList[startVertex] &&
        this.adjacencyList[destinationVertex]
      ) {
        //  PART ONE: FILL DATA STRUCTURES WITH INITIAL DATA
        const previous = {},
          distances = {},
          priorityQueue = new PriorityQueue();
        for (let vertex in this.adjacencyList) {
          previous[vertex] = null;
          if (vertex === startVertex) {
            distances[vertex] = 0;
            priorityQueue.enqueue(vertex, 0);
          } else {
            distances[vertex] = Infinity;
            priorityQueue.enqueue(vertex, Infinity);
          }
        }

        // PART TWO: REMOVE VERTICES FROM THE QUEUE ONE AT A TIME, THE ONE WITH THE HIGHEST PRIORITY
        while (priorityQueue.nodes[0]) {
          const currentVertex = priorityQueue.dequeue();
          if (currentVertex.value === destinationVertex) {
            let tmp = currentVertex.value;
            const path = [tmp];
            while (previous[tmp]) {
              path.push(previous[tmp]);
              tmp = previous[tmp];
            }
            return path.reverse();
          }
          if (currentVertex && distances[currentVertex] !== Infinity) {
            for (let currentEdge of this.adjacencyList[currentVertex.value]
              .edges) {
              const currentEdgePathCost =
                distances[currentVertex.value] + currentEdge.weight;
              if (currentEdgePathCost < distances[currentEdge.node]) {
                distances[currentEdge.node] = currentEdgePathCost;
                previous[currentEdge.node] = currentVertex.value;
                priorityQueue.enqueue(currentEdge.node, currentEdgePathCost);
              }
            }
          }
        }
      }
    }
  }

  /*
    NOTE: printer method is used for testing and development
  */

  printer() {
    if (this.adjacencyList) {
      for (let vertex in this.adjacencyList) {
        console.log(
          'vertex: ',
          vertex,
          ' edges: ',
          this.adjacencyList[vertex].edges,
          '\n'
        );
      }
    }
  }
};

// test Graph class
const myGraph = new undirectedWeightedGraph();
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
// console.log('before');
// myGraph.printer();
// myGraph.removeVertex('D');
// myGraph.removeEdge('A', 'B');
// console.log('after');
// myGraph.printer();
// console.log(myGraph.adjacencyList['F'].edges);

// const queue = new PriorityQueue();
// queue.enqueue('A', 4);
// queue.enqueue('B', 3);

// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);

console.log(myGraph.shortestPath('A', 'E'));
