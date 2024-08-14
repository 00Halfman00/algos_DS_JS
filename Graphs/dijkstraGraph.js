///////////////////      MUSCLE MEMORY  MUSCLE MEMORY    ///////////////////////
///////////////////      UNDIRECTED GRAPH                ///////////////////////
///////////////////      WEIGHTED GRAPH                 ////////////////////////
//////////////////       BINARY HEAP TREE              /////////////////////////
//////////////////       PRIORITY QUEUE                /////////////////////////
//////////////////       NODES  NODES  NODES NODES     /////////////////////////

/*

  How to find the shortest path between any two vertices in a weighted-undirected
  graph...

  ////////////////////////   NODE CLASS               //////////////////////////

  1.  CREATE A FUNCTION THAT WILL CREATE CLASSES OF NODES NAMED Node
      A.  IT WILL TAKE TWO PARAMETERS (value, weight), A STRING, AND A NUMBER
      B.  IT WILL RETURN A NODE CLASS WITH TWO PROPERTIES (this.val, this.weight)

  ////////////////////////  BINARY-HEAP-TREE-PRIORITY-QUEUE  ///////////////////

  2.  CREATE A BINARY-HEAP-PRIORITY-QUEUE CLASS NAMED BHTPQ
      A.  IT WILL HAVE AN ARRAY AS ITS SOLE PRPERTY NAMED pq
      B.  IT WILL HAVE A METHOD NAMED enqueue TO ADD NODES TO pq ARRAY
      C.  IT WILL HAVE A METHOD NAMED heapUp TO SORT THE pq ARRAY WHEN A NEW NODE IS ADDED
      D.  IT WILL HAVE A METHOD NAMED dequeue TO REMOVE THE FIRST NODE IN pq ARRAY
      E.  IT WILL HAVE A METHOD NAMED heapDown TO SORT THE pq ARRAY WHEN A NODE IS REMOVED

  3.  CREATE METHOD NAMED enqueue
      ( IT WILL ADD A NEW NODE TO THE END OF THE pq ARRAY AND CALL heapUp TO SORT pq)
      A.  IT WILL TAKE TWO PARAMETERS (val, weight), A STRING AND A NUMBER
      B.  CREATE A NEW NODE CLASS NAMED incoming BY CALLING Node WITH THE ARGUMENTS PASSED IN
      C.  IF pq ARRAY IS NOT EMPTY
          I.    PUSH THE NEW NODE ONTO THE pq ARRAY
          II.   CALL THE heapUp METHOD TO SORT pq
      D.  IF pq ARRAY IS EMPTY
          I.    ASSIGN THE NEW NODE TO BE THE FIRST ELMENT IN pq ARRAY

  4.  CREATE METHOD NAMED heapUp()
      ( IT WIL SORT THE pq ARRAY BY USING THE RELATIONSHIP OF THE PARENT INDEX AND THE CHILD INDEX )
      A.  CREATE THE cIdx VARIABLE AND ASSIGN IT THE VALUE OF THE LENGHT OF THE ARRAY MINUS 1
      B.  CREATE THE pIdx VARIABLE AND ASSIGN IT THE VALUE OF USING THE FORMULA: ( n - 1 ) / 2
          WHERE n IS THE VALUE OF cIdx
      C.  CREATE A tmp VARIABLE THAT WILL HELP SWAP THE VALUES OF pIdx WITH cIdx
      D.  LOOP WHILE THE pq ARRAY AT pIdx IS NOT NULL AND THE WEIGHT PROPERTY OF THE NODE AT pIdx IN
          THE pq ARRAY
          IS GREATER THAN THE WEIGHT PROPERTY OF THE NODE AT cIdx IN THE pq ARRAY
          I.    SWAP THE NODE AT pIdx IN THE pq ARRAY WITH THE NODE AT cIdx IN THE pq ARRAY
          II.   ASSIGN cIdx TO BE THE VALUE OF pIdx
          III.  ASSING pIdx TO BE THE VALUE OF USING THE FORMULA: ( n - 1 ) / 2
                WHERE n IS THE VALUE OF cIdx

  5.  CREATE METHOD NAMED dequeue
      ( IT WILL REMOVE THE FIRST NODE OF THE pq ARRAY AND CALL heapDown TO SORT pq )
      A.  IF pq ARRAY IS NOT EMPTY
          I.    CREATE A VARIABLE NAMED min AND ASSIGN IT THE VALUE OF THE FIRST ELMENT/NODE IN THE
                pq ARRAY
          II.   ASSIGN THE VALUE OF THE FIRST ELEMENT/NODE TO BE THE VALUE OF POPING OFF THE LAST
                ELEMENT/NODE IN THE pq ARRAY
          III.  CALL THE heapDown METHOD TO SORT pq ARRAY
          IV.   RETURN THE min VARIABLE

  6.  CREATE METHOD NAMED heapDown
      ( IT WIL SORT THE pq ARRAY BY USING THE RELATIONSHIP OF THE PARENT INDEX AND THE CHILD INDEX )
      A.  IF pq ARRAY IS NOT EMPTY
          I.    CREATE THE pIdx VARAIBLE AND ASSIGN IT THE VALUE OF ZERO, TO REPRESENT THE FIRST
                INDEX IN pq ARRAY
          II.   CREATE THE leftCIdx VARIABLE USING THE FORMULA: n * 2 + 1   WHERE n IS pIdx
          III.  CREATE THE rightCIdx VARIABLE USING THE FORMULA: n * 2 + 2   WHERE n IS pIdx
          IV.   CREATE THE smallCIdx VARIABLE TO HOLD THE VALUE OF THE CHILD WITH THE SMALLEST
                WEIGHT PROPTERTY
          V.    CREATE A tmp VARIABLE THAT WILL HELP SWAP THE VALUES OF pIdx WITH cIdx
          VI.   LOOP WHILE ( THE pq ARRAY AT leftCIdx IS NOT NULL AND THE WEIGHT PROPERTY'S VALUE OF
                THE NODE AT leftCIdx IS LESS THAN THE WEIGHT PROPERTY'S VALUE OF THE NODE AT pIdx)
                OR ( THE pq ARRAY AT rightCIdx IS NOT NULL AND THE WEIGHT PROPERTY'S VALUE OF THE
                NODE AT rightCIdx IS LESS THAN THE WEIGHT PROPERTY'S VALUE OF THE NODE AT pIdx )
          VII.  FIND THE NODE WITH THE SMALLEST WEIGHT PROPERTY VALUE BETWEEN LEFT AND RIGHT
                CHILDREN AND ASSIGN smallCIdx TO BE THE INDEX OF THAT NODE
          VIII. SWAP THE NODE AT pIdx WITH THE NODE AT smallCIdx IN THE pq ARRAY
          IX.   ASSIGN THE VALUE OF pIdx TO BE THE VALUE OF cIdx.
          X.    ASSIGN THE VALUE OF leftCIdx BY USING THE FORMULA: n * 2 + 1
                WHERE n IS pIdx
          XI.   ASSIGN THE VALUE OF rightCIdx By USING THE FORMULA: n * 2 + 2
                WHERE n IS pIdx

  ////////////////////////// WEIGHTED UNDIRECTED GRAPH  ////////////////////////

  7.  CREATE A WEIGHTED UNDIRECTED GRAPH NAMED myGraphraph
      A.  IT WILL HAVE A OBJECT AS ITS SOLE PROPERTY NAMED adjacencyLit
      B.  IT WILL HAVE A METHOD NAMED addVertex THAT WILL ADD A VERTEX TO THE adjacencyList OBJECT
      C.  IT WILL HAVE A METHOD NAMED addEdge THAT WILL CREATE A CONNECTION BETWEEN TO VERTICES
      D.  IT WILL HAVE A METHOD NAMED removeVertex THAT WILL REMOVE A VERTEX AND ANY CONNECTIONS TO
          IT FROM THE adjacencyList OBJECT
      E.  IT WILL HAVE A METHOD NAMED shortestPath THAT WILL RETURN THE SHORTEST PATH BETWEEN ANY
          TWO VERTICES IN THE adjacencyList OBJECT

  8.  CREATE METHOD NAMED addVertex
      ( IT WILL ADD A VERTEX TO THE adjacencyList OBJECT IF IT DOESN'T EXIST )
      A.  IT WILL TAKE ONE ARGUMENT AS ITS PARAMETER (val) A STRING
      B.  IF THE adjacencyList OBJECT DOES NOT HAVE A KEY NAMED AFTER THE ARGUMENT PASSED IN FOR THE
          val PARAMETER
          I.   CREATE A NEW KEY WITH THE NAME OF THE ARGUMENT PASSED IN FOR THE PARAMETER val AND
               HAVE THE VALUE OF THAT KEY BE AN EMPTY ARRAY

  9.  CREATE METHOD NAMED addEdge
      ( IT WILL TAKE TWO VERTICES AND ADD ONE TO THE OTHERS ARRAY OF VERTICES IF IT ISN'T ALREADY IN
      ARRAY )
      A.  IT WILL TAKE TWO VERTICES AS ITS PARAMETERS NAMED vertex1 and vertex2
      B.  IF vertex1 EXIST IN THE adjacencyList OBJECT
          I.    IF THE ARRAY OF vertex1 IN THE adjacencylist's ARRAY DOES NOT INCLUDE vertex2
                a.  PUSH vertex2 ONTO THE ARRAY OF vertex1 IN THE adjacencyList OBJECT
      C.  IF vertex2 EXIST IN THE adjacencyList OBJECT
          I.    IF THE ARRAY OF vertex2 IN THE adjacencylist's ARRAY DOES NOT INCLUDE vertex1
                a.  PUSH vertex1 ONTO THE ARRAY OF vertex2 IN THE adjacencyList OBJECT

  10. CREATE METHOD NAMED removeVertex
      ( IT WILL TAKE A VERTEX, LOOK AT THE VERTICES IN THAT VERTEX'S ARRAY AND REMOVE VERTEX FROM
      THOSE ARRAYS AND DELETE VERTEX FROM THE adjacecyList OBJECT )
      A.  IT TAKES A VERTEX AS ITS PARAMETER NAMED vertex
      B.  IF vertex AND adjacencyList OBJECT HAS A vertex KEY
          I.    LOOP OVER THE ARRAY OF VERTICES THAT'S ASSIGNED TO vertex IN THE adjacecyList OBJECT
                ( EACH VERTEX IN ARRAYS WILL BE AN OBJECT WITH A val PROPERTY AND A weight PROPERTY)
                a.  LOOP OVER EACH ELEMENT/VERTEX'S ARRAY IN THE adjacencyList OBJECT
                    a1. FILTER OUT vertex FROM EACH v's RESPECTIVE ARRAY

      C.  DELETE VERTEX FROM THE adjacencyList OBJECT

  11. CREATE METHOD shortestPath
      A.  IT TAKES TWO VERTICES AS ITS PARAMATERS NAMED start, end
      B.  IF start AND end ARE PASSED IN AND start and end ARE BOTH IN THE adjacencyList OBJECT
          I.    CREATE AN OBJECT NAMED distances
          II.   CREATE AN OBJECT NAMED previous
          III.  CREATE A PRIORITY QUEUE BY CALLING BHTPQ NAMED queue
          IV.   LOOP OVER THE adjacencyList OBJECT VERTICES
                a.  FOR EACH VERTEX ADD IT TO queue BY CALLING THE enqueue MEHOD WITH THAT VERTEX
                    AS THE val ARGMENT AND Infinity AS THE weight ARGUMENT, EXCEPT IF THE VERTEX
                    EQUALS start, GIVE THE weight ARGUMENT THE VALUE OF ZERO
                b.  FOR EACH VERTEX ADD IT TO distances OBJECT WITH THE VALUE OF Infinity,
                      EXCEPT FOR start, GIVE IT THE VALUE OF ZERO
                c.  FOR EACH VERTEX ADD IT TO THE PREVIOUS OBJECT WITH THE VALUE OF NULL
      C.  LOOP WHILE queue HAS A VERTEX IN ITS ARRAY
          I.    DEQUEUE A VERTEX FROM THE queue ARRAY BY CALLING THE dequeue METHOD AND NAME IT current
          II.   IF current's val PROPERTY EQUALS THE end ARGUMENT, break OUT OF LOOP
          III.  IF current's weight PROPERTY DOES NOT EQUAL Infinity
                a.  LOOP OVER THE VERTICES ARRAY OF current THAT ARE FOUND IN THE adjacencyList OBJECT
                    ( NAME THE ELEMENT/VERTEX IN THIS LOOP v )
                    a1. CREATE A VARIABLE NAMED pathCost AND ASSIGN IT THE VALUE OF ADDING current's
                        weight PROPERTY WITH THE WEIGHT PROPTERTY OF v's weight PROPERTY
                    a2. IF THE VALUE OF pathcost IS LESS THAN THE VALUE OF THE VALUE OF v IN THE distances OBJECT
                        2a. ASSIGN THE VALUE OF pathCost TO THE distances OBJECT FOR THE KEY v
                        2b. ASSIGN THE VALUE OF current's val PROPERTY TO THE previous OBJECT FOR
                            THE KEY v
                        2c. ENQUEUE v ONTO queue's ARRAY BY CALLING THE enqueue METHOD ON queue WITH
                            v AS THE val ARGUMENT AND pathCost AS THE weight ARGUMENT

      D.  CREATE A VARIABLE NAMED path AND ASSIGN IT AN ARRAY WITH THE SOLE ELEMENT BEING end IN IT
      E.  CREATE A VARTIABLE NAMED tmp AND ASSIGN IT THE VALUE OF end
      F.  LOOP WHILE true
          I.    PUSH THE VALUE OF tmp IN THE previous OBJECT ONTO THE path ARRAY
          II.   ASSIGN tmp THE VALUE OF tmp IN THE previous OBJECT
          III.  IF THE VALUE OF tmp EQUALS THE VALUE OF start break OUT OF LOOP

      G.  RETURN path IN REVERSE ORDER; THAT IS, BEGINNING WITH start AND UP TO end

*/

const Node = function (value, weight) {
  this.val = value;
  this.weight = weight;
};

const BHTPQ = class {
  constructor() {
    this.pq = [];
  }

  enqueue(val, weight) {
    if (val && weight >= 0) {
      const incoming = new Node(val, weight);
      if (this.pq[0]) {
        this.pq[this.pq.length] = incoming;
        this.heapUp();
      } else this.pq[0] = incoming;
    }
  }

  heapUp() {
    if (this.pq[0]) {
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
  }

  dequeue() {
    if (this.pq[0]) {
      const min = this.pq[0];
      this.pq[0] = this.pq.pop();
      this.heapDown();
      return min;
    }
  }

  heapDown() {
    if (this.pq[0]) {
      let pIdx = 0,
        leftCIdx = pIdx * 2 + 1,
        rightCIdx = leftCIdx + 1,
        smallCIdx,
        tmp;

      while (
        (this.pq[leftCIdx] &&
          this.pq[leftCIdx].weight < this.pq[pIdx].weight) ||
        (this.pq[rightCIdx] && this.pq[rightCIdx].weight < this.pq[pIdx].weight)
      ) {
        if (!this.pq[rightCIdx]) {
          smallCIdx = leftCIdx;
        } else {
          smallCIdx =
            this.pq[leftCIdx].weight < this.pq[rightCIdx].weight
              ? leftCIdx
              : rightCIdx;
        }

        tmp = this.pq[pIdx];
        this.pq[pIdx] = this.pq[smallCIdx];
        this.pq[smallCIdx] = tmp;

        pIdx = smallCIdx;
        leftCIdx = pIdx * 2 + 1;
        rightCIdx = leftCIdx + 1;
      }
    }
  }
};

const myGraphraph = class {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (vertex && !this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (vertex1 && vertex2 && weight) {
      if (this.adjacencyList[vertex1]) {
        if (!this.adjacencyList[vertex1].includes(vertex2)) {
          this.adjacencyList[vertex1][this.adjacencyList[vertex1].length] =
            new Node(vertex2, weight);
        }
      }

      if (this.adjacencyList[vertex2]) {
        if (!this.adjacencyList[vertex2].includes(vertex1)) {
          this.adjacencyList[vertex2][this.adjacencyList[vertex2].length] =
            new Node(vertex1, weight);
        }
      }
    }
  }

  removeVertex(vertex) {
    if (vertex && this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.adjacencyList[v.val] = this.adjacencyList[v.val].filter(
          (e) => e.val !== vertex
        );
      });

      delete this.adjacencyList[vertex];
    }
  }

  shortestPath(start, end) {
    if (start && end && this.adjacencyList[start] && this.adjacencyList[end]) {
      const distances = {},
        previous = {},
        queue = new BHTPQ();

      for (const vertex in this.adjacencyList) {
        vertex !== start
          ? queue.enqueue(vertex, Infinity)
          : queue.enqueue(vertex, 0);
        distances[vertex] = vertex !== start ? Infinity : 0;
        previous[vertex] = null;
      }

      while (queue.pq[0]) {
        const current = queue.dequeue();

        if (current.val === end) break;

        if (current.weight !== Infinity) {
          this.adjacencyList[current.val].forEach((v) => {
            const pathCost = current.weight + v.weight;

            if (pathCost < distances[v.val]) {
              distances[v.val] = pathCost;
              previous[v.val] = current.val;
              queue.enqueue(v.val, pathCost);
            }
          });
        }
      }

      const path = [end];
      let tmp = end;

      while (true) {
        path[path.length] = previous[tmp];
        tmp = previous[tmp];
        if (tmp === start) break;
      }

      return path.reverse();
    }
  }
};

// const myPQ = new BHTPQ();
// myPQ.enqueue('one', 41);
// myPQ.enqueue('two', 39);
// myPQ.enqueue('three', 33);
// myPQ.enqueue('four', 18);
// myPQ.enqueue('five', 27);
// myPQ.enqueue('six', 12);
// myPQ.enqueue('seven', 55);
// console.log('myPQ.pq: ', myPQ.pq);
// console.log('remove a node from pq: ', myPQ.dequeue());
// console.log('myPQ.pq: ', myPQ.pq);

const myGraph = new myGraphraph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');
myGraph.addEdge('A', 'B', 4);
myGraph.addEdge('A', 'C', 2);
myGraph.addEdge('B', 'E', 3);
myGraph.addEdge('C', 'D', 2);
myGraph.addEdge('C', 'F', 4);
myGraph.addEdge('D', 'E', 3);
myGraph.addEdge('D', 'F', 1);
myGraph.addEdge('E', 'F', 1);
// console.log('myGraph: ', myGraph.adjacencyList);
// myGraph.removeVertex('D');
// console.log('\n\n\n myGraph: ', myGraph.adjacencyList);

console.log(
  'shortest path between two vertices: ',
  myGraph.shortestPath('A', 'E')
);
