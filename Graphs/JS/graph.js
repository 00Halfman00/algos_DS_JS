/*
  1.  CREATE AN UNDIRECTED GRAPH CALLED UGraph
  2.  CREATE A METHOD TO ADD VERTICES TO THE ADJACENCY LIST OF UGraph CALLED addVertex
      A. IT TAKES A VALUE (STRING) AS A PARAMETER AND CREATES A VERTEX, IF IT DOESN'T ALREADY EXIST
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
      B.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE UNORDERED GRAPH
          I.    LOOP OVER THE VERTEX'S ARRAY OF VERTICES
          II.   FOR EACH OF THOSE VERTICES FILTER OUT THEIR RESPECTIVE ARRAY THE VERTEX PASSED INTO METHOD
          III.  FINALLY, DELETE VERTEX PASSED INTO METHOD FROM THE ADJACENCYLIST



  5.  CREATE A METHOD TO TRAVERSE THE UNORDERED GRAPH RECURSIVELY USING DFS NAMED rDFS
      A.  IT TAKES A VERTEX AS A PARAMETER AND A ARRAY NAMED res AND A OBJECT NAMED vis
      B.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE INSTANCE OF THE UNORDERED GRAPH
            I.    PUSH THE VERTEX ONTO THE res ARRAY
            II.   ADD THE VERTEX TO THE vis OBJECT AS A KEY WITH THE VALUE OF TRUE
            III.  LOOP OVER THE VERTEX'S ARRAY OF VERTICES
                  a. IF THE VERTEX IS NOT IN vis, MEANING THAT WE HAVEN'T COME ACROSS IT YET
                  b. RECURSIVELY CALL rDFS FOR THE INSTANCE OF THE METHOD PASSING IN THE VERTEX, res, and vis
      C.  RETURN res ARRAY

  6.  CREATE A METHOD TO TRAVERSE THE UNORDERED GRAPH ITERATIVELY USING DFS NAMED iDFS
      A.  IT TAKES A VERTEX AS A PARAMETER
      B.  CREATE AN ARRAY NAMED res TO PLACE ALL THE VERTICES THAT ARE FOUND IN THE ADJACENCYLIST
      C.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE INSTANCE OF THE UNORDERED GRAPH
          I.    CREATE AN ARRAY THAT WILL BE USED AS A STACK NAMED stack AND PLACE THE VERTEX IN IT
          II.   CREATE AN OBJECT THAT WILL BE USED TO TRACK SEEN VERTICES AND PLACE VERTEX AS A KEY AND true AS ITS VALUE
          III.  CREATE A MUTABLE VARIABLE NAMED v AND LEAVE UNASSIGNED
          IV.   LOOP OVER STACK WHILE IT HAS A ELEMENT/VERTEX IN IT
                a.  POP FROM THE STACK AND ASSIGN IT TO v
                b.  PUSH v ONTO THE res ARRAY
                c.  LOOP OVER THE ARRAY FOR v FOUND IN THE INSTANCE OF THE UNORDERED GRAPH
                d.  IF THE CURRENT ELEMENT/VERTEX FOUND IS NOT IN THE vis OBJECT
                    I.    PLACE THE CURRENT ELEMENT/VERTEX IN THE vis OBJECT AS A KEY WITH THE VALUE OF TRUE
                    II.   PUSH THE CURRENT ELEMENT/VERTEX ONTO stack ARRAY
      D.  RETURN res ARRAY

  7.  CREATE A METHOD TO TRAVERSE THE UNORDERED GRAPH ITERATIVELY USING BFS NAMED iBFS
      A.  IT TAKES A VERTEX AS A PARAMETER
      B.  CREATE AN ARRAY NAMED res TO PLACE ALL THE VERTICES THAT ARE FOUND IN THE ADJACENCYLIST
      C.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE INSTANCE OF THE UNORDERED GRAPH
          I.    CREATE AN ARRAY THAT WILL BE USED AS A QUEUE NAMED queue AND PLACE THE VERTEX IN IT
          II.   CREATE AN OBJECT THAT WILL BE USED TO TRACK SEEN VERTICES AND PLACE VERTEX AS A KEY AND true AS ITS VALUE
          III.  CREATE A MUTABLE VARIABLE NAMED v AND LEAVE UNASSIGNED
          IV.   LOOP OVER QUEUE WHILE THERE IS A ELEMENT/VERTEX IN IT
                a.  SHIFT FROM THE QUEUE AND ASSIGN IT TO v
                b.  PUSH v ONTO THE res ARRAY
                c.  LOOP OVER THE ARRAY FOR v FOUND IN THE INSTANCE OF THE UNORDERED GRAPH
                d.  IF THE CURRENT ELEMENT/VERTEX FOUND IS NOT IN THE vis OBJECT
                    I.    PLACE THE CURRENT ELEMENT/VERTEX IN THE vis OBJECT AS A KEY WITH THE VALUE OF TRUE
                    II.   PUSH THE CURRENT ELEMENT/VERTEX ONTO queue ARRAY
*/

const UGraph = class {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (vertex && !this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (
      vertex1 &&
      vertex2 &&
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2]
    ) {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1][this.adjacencyList[vertex1].length] =
          vertex2;
      }
      if (!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2][this.adjacencyList[vertex2].length] =
          vertex1;
      }
    }
  }

  removeVertex(vertex) {
    // this works with undirected graphs, not with directed graphs
    if (vertex && this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.adjacencyList[v] = this.adjacencyList[v].filter(
          (e) => e !== vertex
        );
      });
      delete this.adjacencyList[vertex];
    }
  }

  rPreDFS(vertex, res = [], vis = {}) {
    // the callstack is the stack

    if (vertex && this.adjacencyList[vertex]) {
      res[res.length] = vertex;
      vis[vertex] = true;
      this.adjacencyList[vertex].forEach((v) => {
        // easier/more efficient to shuttle data structures in parameters
        if (!vis[v]) this.rPreDFS(v, res, vis);
      });
    }

    return res;
  }


  rPostDFS(vertex, res = [], vis = {}) { // the callstack is the stack

    if (vertex && this.adjacencyList[vertex]) {
      vis[vertex] = true;
      this.adjacencyList[vertex].forEach((v) => {
        if (!vis[v]) {
          this.rPostDFS(v, res, vis);
        }
      });
      res[res.length] = vertex;
    }

    return res;
  }

  iDFS(vertex) {
    const res = [];

    if (vertex && this.adjacencyList[vertex]) {
      const stack = [vertex], // an array is the stack
        vis = {};
      let v;
      //vis[vertex] = true;

      while (stack[0]) {
        v = stack.pop();
        res[res.length] = v;
        vis[v] = true;
        this.adjacencyList[v].forEach((e) => {
          if (!vis[e]) {
            stack[stack.length] = e;
          }
        });
      }
    }

    return res;
  }

  rBFS(vertex) {
    const res = [];

    if (vertex && this.adjacencyList[vertex]) {
      const queue = [vertex], // an array is the stack
        vis = {};
      let v;
      vis[vertex] = true;

      while (queue[0]) {
        v = queue.shift();
        res[res.length] = v;
        this.adjacencyList[v].forEach((e) => {
          if (!vis[e]) {
            vis[e] = true;
            queue[queue.length] = e;
          }
        });
      }
    }

    return res;
  }

  iBFS(vertex) {
    const res = [];

    if (vertex && this.adjacencyList[vertex]) {
      const queue = [vertex],
        vis = {}; // a queue instead of stack
      let v;
      vis[vertex] = true;

      while (queue[0]) {
        v = queue.shift();
        res[res.length] = v;
        this.adjacencyList[v].forEach((e) => {
          if (!vis[e]) {
            vis[e] = true;
            queue[queue.length] = e;
          }
        });
      }
    }

    return res;
  }
};

const myGMap = new UGraph();

myGMap.addVertex('A');
myGMap.addVertex('B');
myGMap.addVertex('C');
myGMap.addVertex('D');
myGMap.addVertex('E');
myGMap.addVertex('F');
myGMap.addEdge('A', 'B');
myGMap.addEdge('A', 'C');
myGMap.addEdge('B', 'D');
myGMap.addEdge('C', 'E');
myGMap.addEdge('D', 'E');
myGMap.addEdge('D', 'F');
myGMap.addEdge('E', 'F');

// myGMap.addEdge('A', 'B');
// myGMap.addEdge('A', 'C');
// myGMap.addEdge('B', 'E');
// myGMap.addEdge('C', 'D');
// myGMap.addEdge('C', 'F');
// myGMap.addEdge('D', 'E');
// myGMap.addEdge('D', 'F');
// myGMap.addEdge('E', 'F');

// myGMap.addVertex('Chicago');
// myGMap.addVertex('Indianapolis');
// myGMap.addVertex('Austin');
// myGMap.addVertex('Denver');
// myGMap.addEdge('Chicago', 'Indianapolis');
// myGMap.addEdge('Chicago', 'Austin');
// myGMap.addEdge('Chicago', 'Denver');
// myGMap.addEdge('Austin', 'Chicago');
// myGMap.addEdge('Austin', 'Indianapolis');
// myGMap.addEdge('Austin', 'Denver');
// console.log(myGMap.adjacencyList);
// myGMap.removeVertex('Chicago');
// console.log(myGMap.adjacencyList);
console.log('return value of myGMap.rDFS(): \n', myGMap.rPreDFS('A'));
// console.log('return value of myGMap.rPODFS(): \n', myGMap.rPostDFS('A'));
console.log('return value of myGMap.iDFS(): \n', myGMap.iDFS('A'));
// console.log('return value of myGMap.iBFS(): \n', myGMap.rBFS('A'));
// console.log('return value of myGMap.iBFS(): \n', myGMap.iBFS('A'));
