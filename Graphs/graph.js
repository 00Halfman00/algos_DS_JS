/*
  1.  CREATE AN UNDIRECTED GRAPH CALLED UGraph
  2.  CREATE A METHOD TO ADD VERTICES TO THE ADJACENCY LIST OF UGraph CALLED addVertex
      A. IT TAKES A VALUE (STRING/NAME) AS A PARAMETER AND CREAES A VERTEX, IF IT DOESN'T ALREADY EXIST
      B. IT ADDS THE VERTEX TO THE ADJACENCY LIST WITH PARAMETER'S VALUE AS THE KEY AND AN ARRAY AS THE KEY'S VALUE

      TIME COMPLEXITY: O(N)
      SPACE COMPLEXITY: O(1)

  3.  CREATE A METHOD TO REMOVE A VERTEX
      A.  IT TAKES A VERTEX AS A PARAMETER
      B.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE UNORDERED GRAPH
          I.    LOOP OVER THE VERTEX'S ARRAY OF VERTICES
          II.   FOR EACH OF THOSE VERTICES FILTER OUT THEIR RESPECTIVE ARRAY THE VERTEX PASSED INTO METHOD
          III.  FINALLY, DELETE VERTEX PASSED INTO METHOD FROM THE ADJACENCYLIST



  4.  CREATE A METHOD TO TRAVERSE THE UNORDERED GRAPH RECURSIVELY USING DFS NAMED rDFS
      A.  IT TAKES A VERTEX AS A PARAMETER AND A ARRAY NAMED res AND A OBJECT NAMED vis
      B.  IF THAT VERTEX IS IN THE ADJACENCY LIST OF THE INSTANCE OF THE UNORDERED GRAPH
            I.    PUSH THE VERTEX ONTO THE res ARRAY
            II.   ADD THE VERTEX TO THE vis OBJECT AS A KEY WITH THE VALUE OF TRUE
            III.  LOOP OVER THE VERTEX'S ARRAY OF VERTICES
                  a. IF THE VERTEX IS NOT IN vis, MEANING THAT WE HAVEN'T COME ACROSS IT YET
                  b. RECURSIVELY CALL rDFS FOR THE INSTANCE OF THE METHOD PASSING IN THE VERTEX, res, and vis


*/

const UGraph = class {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if(!this.adjacencyList[vertex1].includes(vertex2)){
        this.adjacencyList[vertex1][this.adjacencyList[vertex1].length] = vertex2;
      }
      if(!this.adjacencyList[vertex2].includes(vertex1)){
        this.adjacencyList[vertex2][this.adjacencyList[vertex2].length] = vertex1;
      }
    }
  }

  removeVertex(vertex) {  // this works with undirected graphs, not with directed graphs
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.adjacencyList[v] = this.adjacencyList[v].filter(
          (e) => e !== vertex
        );
      });
      delete this.adjacencyList[vertex];
    }
  }


  rDFS(vertex, res=[], vis={}){
    if(vertex){  // if we have a value do the work else return empty array
      res[res.length] = vertex;
      vis[vertex] = true;
      this.adjacencyList[vertex].forEach( v => {
       // easier/more efficient to shuttle data structures in parameters
       if(!vis[v]) this.rDFS(v, res, vis);
      })
    }
    return res;
  }















};

const myGMap = new UGraph();

myGMap.addVertex('Chicago');
myGMap.addVertex('Indianapolis');
myGMap.addVertex('Austin');
myGMap.addVertex('Denver');
myGMap.addEdge('Chicago', 'Indianapolis');
myGMap.addEdge('Chicago', 'Austin');
myGMap.addEdge('Chicago', 'Denver');
myGMap.addEdge('Austin', 'Chicago');
myGMap.addEdge('Austin', 'Indianapolis');
myGMap.addEdge('Austin', 'Denver');
// console.log(myGMap.adjacencyList);
// myGMap.removeVertex('Chicago');
// console.log(myGMap.adjacencyList);
console.log('return value of myGMap.rDFS(): \n', myGMap.rDFS('Chicago'))
