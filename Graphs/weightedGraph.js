const Node = function (val, weight) {
  this.node = val;
  this.weight = weight;
};

const WUGraph = class {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {

    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2] && weight) {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1][this.adjacencyList[vertex1].length] =
          new Node(vertex2, weight);
      }
      if (!this.adjacencyList[vertex1].includes(vertex1)) {
        this.adjacencyList[vertex2][this.adjacencyList[vertex2].length] =
          new Node(vertex1, weight);
      }

    }
  }

  removeVertex(vertex) {

    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.adjacencyList[v.node] = this.adjacencyList[v.node].filter(
          (e) => e.node !== vertex
        );
      });
      delete this.adjacencyList[vertex];
    }

  }
};

const wUG = new WUGraph();

wUG.addVertex('A');
wUG.addVertex('B');
wUG.addVertex('C');
wUG.addVertex('D');
console.log("wUG's adjacencyList: ", wUG.adjacencyList);
wUG.addEdge('A', 'B', 10);
wUG.addEdge('A', 'C', 20);
wUG.addEdge('C', 'D', 30);
wUG.addEdge('D', 'A', 20);
console.log("wUG's adjacencyList: ", wUG.adjacencyList);
wUG.removeVertex('A');
console.log("wUG's adjacencyList: ", wUG.adjacencyList);
