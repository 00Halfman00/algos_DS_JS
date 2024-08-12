const Node = function (val, weight) {
  this.node = val;
  this.weight = weight;
};

const BHTPQ = class {
  constructor() {
    this.pq = [];
  }

  enqueue(val, weight) {

    if (val && weight >= 0) {
      const node = new Node(val, weight);
      if (this.pq[0]) {
        this.pq[this.pq.length] = node;
        this.heapUp();
      } else this.pq[0] = node;
    }

  }

  heapUp() {

    let cIdx = this.pq.length - 1,
      pIdx = Math.floor((cIdx - 1) / 2),
      tmp;

    while (this.pq[pIdx] && this.pq[pIdx].weight > this.pq[cIdx].weight) {
      tmp = this.pq[pIdx];
      this.pq[pIdx] = this.pq[cIdx];
      this.pq[cIdx] = tmp;

      cIdx = pIdx;
      pIdx = Math.floor((cIdx - 1) / 2);
    }

  }

  dequeue() {
    if (this.pq) {
      const min = this.pq[0];
      this.pq[0] = this.pq.pop();
      this.heapDown();
      return min;
    }
  }

  heapDown() {
    let pIdx = 0,
      leftCIdx = pIdx * 2 + 1,
      rightCIdx = leftCIdx + 1,
      smallCIdx,
      tmp;

    while (
      (this.pq[leftCIdx] && this.pq[leftCIdx].weight < this.pq[pIdx].weight) ||
      (this.pq[rightCIdx] && this.pq[rightCIdx].weight < this.pq[pIdx].weight)
    ) {
      if (!rightCIdx) smallCIdx = leftCIdx;
      else
        smallCIdx =
          this.pq[leftCIdx].weight < this.pq[rightCIdx].weight
            ? leftCIdx
            : rightCIdx;

      tmp = this.pq[pIdx];
      this.pq[pIdx] = this.pq[smallCIdx];
      this.pq[smallCIdx] = tmp;

      pIdx = smallCIdx;
      leftCIdx = pIdx * 2 + 1;
      rightCIdx = leftCIdx + 1;
    }
  }
};

const WUGraph = class {
  constructor() {
    this.adjacencyList = {};
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

  shortestPath(start, end) {
    const distances = {},
      previous = {},
      queue = new BHTPQ();
    for (const key in this.adjacencyList) {
      key !== start ? (distances[key] = Infinity) : (distances[key] = 0);
      key !== start ? queue.enqueue(key, Infinity) : queue.enqueue(key, 0);
      previous[key] = null;
    }

    let current, pathCost;
    while (queue.pq[0]) {
      current = queue.dequeue().node;

      if (current === end) break;
      if (distances[current] !== Infinity) {
        this.adjacencyList[current].forEach((v) => {
          pathCost = distances[current] + v.weight;
          if (pathCost < distances[v.node]) {
            distances[v.node] = pathCost;
            previous[v.node] = current;
            queue.enqueue(v.node, distances[v.node]);
          }
        });
      }
    }

    const path = [end];
    let tmp = end;
    while (true) {
      if (tmp === start) break;
      tmp = previous[tmp];
      path[path.length] = tmp;
    }
    console.log('path: ', path.reverse());
    return distances[end];
  }
};

const wUG = new WUGraph();

wUG.addVertex('A');
wUG.addVertex('B');
wUG.addVertex('C');
wUG.addVertex('D');
wUG.addVertex('E');
wUG.addVertex('F');

console.log("wUG's adjacencyList: ", wUG.adjacencyList);
wUG.addEdge('A', 'B', 4);
wUG.addEdge('A', 'C', 2);
wUG.addEdge('B', 'E', 3);
wUG.addEdge('C', 'D', 2);
wUG.addEdge('C', 'F', 4);
wUG.addEdge('D', 'E', 3);
wUG.addEdge('D', 'F', 1);
wUG.addEdge('E', 'F', 1);
// console.log("wUG's adjacencyList: ", wUG.adjacencyList);
// wUG.removeVertex('A');
// console.log("wUG's adjacencyList: ", wUG.adjacencyList);

console.log('shortest path method: ', wUG.shortestPath('A', 'E'));

/*
console.log('v: ', v);
 console.log('queue: ', queue);
 console.log('current: ', current);v
    console.log('this.adjacencyList: ', this.adjacencyList)
    console.log('\n distances: ', distances);
    console.log('\n previous: ', previous)
*/


/*
  ///////////////////////////////////////// NODE  /////////////////////////////////////////////////
  1.  CREATE A FUNCTION NAMED Node THAT WILL CREATE NODES FOR BINARY HEAP TREE PRIORITY QUEUE AND WEIGHTED UNDIRECTED GRAPH

      A.  IT TAKES A VALUE (STRING) AND WEIGHT (NUMBER) AS ITS PARAMETERS
      B.  WHEN CALLED WITH THE NEW KEY WORD, IT WILL RETURN A CLASS WITH THE ARGUMENTS PASSED IN AS ITS PROPERTIES

  //////////////////////////////////////// PRIORITY QUEUE  ///////////////////////////////////

  1.  CREATE A BINARY-HEAP-TREE-PRIORITY-QUEUE CLASS NAMED HBTPQ

      A.  IT WILL HAVE A ARRAY AS ITS SOLE PROPERTY NAMED pq

  2.  CREATE A METHOD TO ENQUEUE A NEW NODE INTO pq NAMED enqueue

      A.  IT WILL TAKE A VALUE (STRING) AND WEIGHT (NUMBER) AS ITS PARAMETERS
      B.  IT WILL CREATE A NEW NODE BY CALLING Node WITH THE PARAMATERS PASSED INTO THE METHOD
      C.  IF THERE IS A VALUE IN THE pq ARRAY
          I.    PUSH THE JUST CREATED NODE ONTO THE pq array
          II.   CALL THE heapUp method
      D.  ELSE IF THE pq ARRAY IS EMPTY, PUSH THE JUST CREATED NODE ONTO THE pq array

  3.  CREATE A METHOD TO SORT THE BINARY HEAP TREE PRIORITY QUEUE WHEN A NODE HAS BEEN ADDED TO THE END NAMED heapUp

      A.  CREATE THE cIdx (CHILD INDEX) VARIABLE AND ASSIGN THE VALUE OF THE LAST NODE IN pq
      B.  CREATE THE pIdx (PARENT INDEX) VARIABLE AND ASSIGN THE VALUE OF USING THE FORMULA  (n - 1) / 2  WHEE n IS THE CHILD INDEX; THAT IS cIdx
      C.  LOOP WHILE pIdx IS NOT NULL AND WHILE THE NODE IN THE pq ARRAY AT PARENT INDEX HAS A WEIGHT PROPERTY VALUE THAT IS GREATER
          THAN THE WEIGHT PROPERTY OF THE NODE IN THE pq ARRAY THAT IS AT THE INDEX OF cIdx
          I.    SWAP THE PARENT NODE WITH THE CHILD NODE IN THE pq ARRAY
          II.   ASSIGN THE VALUE OF cIdx TO pIdx
          III.  ASSIGN THE VALUE OF USING THE FORMULA  (n - 1) / 2  WHEE n IS THE CHILD INDEX TO pIdx

  4.  CREATE A METHOD TO DEQUEUE A NODE FROM pq NAMED dequeue

      A.  IF THERE IS A VALUE IN THE pq ARRAY
          I.    CREATE A VARIABLE NAMED min AND ASSIGN THE VALUE OF THE FIRST NODE IN THE pq ARRAY TO IT
          II.   MAKE THE VALUE OF THE FIRST NODE/ELEMENT IN THE pq ARRAY TO BE THE VALUE OF THE LAST NODE/ELEMENT IN THE pq ARRAY
          III.  CALL THE heapDown METHOD
          IV.   RETURN min

  5.  CREATE A METHOD TO SORT THE BINARY HEAP TREE PRIORITY QUEUE WHEN A NODE HAS BEEN REMOVED FROM THE END
      AND ASSIGNED TO THE BEGINNING OF THE BINARY HEAP TREE PRIORITY QUEUE

      A.

  //////////////////////////////////////// GRAPH  ///////////////////////////////////////////

  1. CREATE A WEIGHTED UNDIRECTED GRAPH CALLED WUGraph
  2. CREATE A METHOD TO ADD VERTICES TO THE ADJACENCY LIST OF WUGraph CALLED addVertex
      A. IT TAKES A VALUE (STRING) AND WEIGHT (NUMBER) AS ITS PARAMETERS AND CREATES A VERTEX BY CALLING Node, IF IT DOESN'T ALREADY EXIST
      B. IT ADDS THE VERTEX TO THE ADJACENCY LIST WITH PARAMETER'S VALUE AS THE KEY AND AN ARRAY AS THE KEY'S VALUE

      TIME COMPLEXITY: O(N)
      SPACE COMPLEXITY: O(1)

  3. CREATE A METHOD THAT CREATES AN EDGE BETWEEN TWO VERTICES
      A.  IT TAKES TWO VERTICES AS ITS PARAMETERS
      B.  IF THE TWO VERTICES ARE FOUND IN THE INSTANCE OF THE UNORDERED GRAPH
          I.    IF THE FIRST VERTEX DOES NOT HAVE THE SECOND VERTEX IN ITS ARRAY OF VERTICES
                a.  PUSH THE SECOND VERTEX ONTO THE ARRAY THAT BELONGS TO THE FIRST VERTEX
          II.   IF THE SECOND VERTEX DOES NOT HAVE THE FIRST VERTEX IN ITS ARRAY OF VERTICES
                a.  PUSH THE FIRST VERTEX ONTO THE ARRAY THAT BELONGS TO THE SECOND VERTEX

  4.  CREATE A METHOD TO REMOVE A VERTEX
      A.  IT TAKES A VERTEX AS A PARAMETER
      B.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE INSTANCE OF THE WEIGHTED UNORDERED GRAPH
          I.    LOOP OVER THE VERTEX'S ARRAY OF VERTICES
          II.   FOR EACH OF THOSE VERTICES FILTER OUT OF ITS ARRAY THE VERTEX PASSED INTO THE METHOD
          III.  FINALLY, DELETE VERTEX PASSED INTO METHOD FROM THE ADJACENCYLIST
*/
