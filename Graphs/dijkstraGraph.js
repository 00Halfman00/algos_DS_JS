///////////////////      MUSCLE MEMORY  MUSCLE MEMORY    ///////////////////////
///////////////////      UNDIRECTED GRAPH                ///////////////////////
///////////////////      WEIGHTED GRAPH                 ////////////////////////
//////////////////       BINARY HEAP TREE              /////////////////////////
//////////////////       PRIORITY QUEUE                /////////////////////////
//////////////////       NODES  NODES  NODES NODES     /////////////////////////

/*

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
      D.  LOOP WHILE THE pq ARRAY AT pIdx IS NOT NULL AND THE WEIGHT PROPERTY OF THE NODE AT pIdx IN THE pq ARRAY
          IS GREATER THAN THE WEIGHT PROPERTY OF THE NODE AT cIdx IN THE pq ARRAY
          I.    SWAP THE NODE AT pIdx IN THE pq ARRAY WITH THE NODE AT cIdx IN THE pq ARRAY
          II.   ASSIGN cIdx TO BE THE VALUE OF pIdx
          III.  ASSING pIdx TO BE THE VALUE OF USING THE FORMULA: ( n - 1 ) / 2
                WHERE n IS THE VALUE OF cIdx

  5.  CREATE METHOD NAMED dequeue
      ( IT WILL REMOVE THE FIRST NODE OF THE pq ARRAY AND CALL heapDown TO SORT pq )
      A.  IF pq ARRAY IS NOT EMPTY
          I.    CREATE A VARIABLE NAMED min AND ASSIGN IT THE VALUE OF THE FIRST ELMENT/NODE IN THE pq ARRAY
          II.   ASSIGN THE VALUE OF THE FIRST ELEMENT/NODE TO BE THE VALUE OF POPING OFF THE LAST ELEMENT/NODE IN THE pq ARRAY
          III.  CALL THE heapDown METHOD TO SORT pq ARRAY
          IV.   RETURN THE min VARIABLE

  6.  CREATE METHOD NAMED heapDown
      ( IT WIL SORT THE pq ARRAY BY USING THE RELATIONSHIP OF THE PARENT INDEX AND THE CHILD INDEX )
      A.  IF pq ARRAY IS NOT EMPTY
          I.    CREATE THE pIdx VARAIBLE AND ASSIGN IT THE VALUE OF ZERO, TO REPRESENT THE FIRST INDEX IN pq ARRAY
          II.   CREATE THE leftCIdx VARIABLE USING THE FORMULA: n * 2 + 1   WHERE n IS pIdx
          III.  CREATE THE rightCIdx VARIABLE USING THE FORMULA: n * 2 + 2   WHERE n IS pIdx
          IV.   CREATE THE smallCIdx VARIABLE TO HOLD THE VALUE OF THE CHILD WITH THE SMALLEST WEIGHT PROPTERTY
          V.    CREATE A tmp VARIABLE THAT WILL HELP SWAP THE VALUES OF pIdx WITH cIdx
          VI.   LOOP WHILE ( THE pq ARRAY AT leftCIdx IS NOT NULL AND THE WEIGHT PROPERTY'S VALUE OF THE NODE AT leftCIdx IS LESS THAN THE WEIGHT PROPERTY'S VALUE OF THE NODE AT pIdx)
                OR ( THE pq ARRAY AT rightCIdx IS NOT NULL AND THE WEIGHT PROPERTY'S VALUE OF THE NODE AT rightCIdx IS LESS THAN THE WEIGHT PROPERTY'S VALUE OF THE NODE AT pIdx )
          VII.  FIND THE NODE WITH THE SMALLEST WEIGHT PROPERTY VALUE BETWEEN LEFT AND RIGHT CHILDREN AND ASSIGN smallCIdx TO BE THE INDEX OF THAT NODE
          VIII. SWAP THE NODE AT pIdx WITH THE NODE AT smallCIdx IN THE pq ARRAY
          IX.   ASSIGN THE VALUE OF pIdx TO BE THE VALUE OF cIdx.
          X.    ASSIGN THE VALUE OF leftCIdx BY USING THE FORMULA: n * 2 + 1
                WHERE n IS pIdx
          XI.   ASSIGN THE VALUE OF rightCIdx By USING THE FORMULA: n * 2 + 2
                WHERE n IS pIdx

  ////////////////////////// WEIGHTED UNDIRECTED GRAPH  ////////////////////////

  7.  CREATE A WEIGHTED UNDIRECTED GRAPH NAMED WUGraph
      A.  IT WILL HAVE A OBJECT AS ITS SOLE PROPERTY NAMED adjacencyLit
      B.  IT WILL HAVE A METHOD NAMED addVertex THAT WILL ADD A VERTEX TO THE adjacencyList OBJECT
      C.  IT WILL HAVE A METHOD NAMED addEdge THAT WILL CREATE A CONNECTION BETWEEN TO VERTICES
      D.  IT WILL HAVE A METHOD NAMED removeVertex THAT WILL REMOVE A VERTEX AND ANY CONNECTIONS TO IT FROM THE adjacencyList OBJECT
      E.  IT WILL HAVE A METHOD NAMED shortestPath THAT WILL RETURN THE SHORTEST PATH BETWEEN ANY TWO VERTICES IN THE adjacencyList OBJECT

  8.  CREATE METHOD NAMED addVertex
      A.  IT WILL TAKE ONE ARGUMENT AS ITS PARAMETER (val) A STRING
      B.  IF THE adjacencyList OBJECT DOES NOT HAVE A KEY NAMED AFTER THE ARGUMENT PASSED IN FOR THE val PARAMETER
          I.   CREATE A NEW KEY WITH THE NAME OF THE ARGUMENT PASSED IN FOR THE PARAMETER val AND HAVE THE VALUE OF THAT KEY BE AN EMPTY ARRAY

  9.  CREATE METHOD NAMED addEdge
      A.  IT WILL TAKE TWO VERTICES AS ITS PARAMETERS NAMED vertex1 and vertex2
      B.  IF vertex1 EXIST IN THE adjacencyList OBJECT
          I.    IF THE ARRAY OF vertex1 IN THE adjacencylist's ARRAY DOES NOT INCLUDE vertex2
                a.  PUSH vertex2 ONTO THE ARRAY OF vertex1 IN THE adjacencyList OBJECT
      C.  IF vertex2 EXIST IN THE adjacencyList OBJECT
          I.    IF THE ARRAY OF vertex2 IN THE adjacencylist's ARRAY DOES NOT INCLUDE vertex1
                a.  PUSH vertex1 ONTO THE ARRAY OF vertex2 IN THE adjacencyList OBJECT
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
    const incoming = new Node(val, weight);
    if (this.pq[0]) {
      this.pq[this.pq.length] = incoming;
      this.heapUp();
    } else this.pq[0] = incoming;
  }

  heapUp() {
    // in case it's called without using enqueue()
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

const WUGraph = class {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && weight) {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1][this.adjacencyList[vertex1].length] =
          new Node(vertex2, weight);
      }
    }

    if (this.adjacencyList[vertex2] && weight) {
      if (!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2][this.adjacencyList[vertex2].length] =
          new Node(vertex1, weight);
      }
    }
  }
};

const myPQ = new BHTPQ();
myPQ.enqueue('one', 41);
myPQ.enqueue('two', 39);
myPQ.enqueue('three', 33);
myPQ.enqueue('four', 18);
myPQ.enqueue('five', 27);
myPQ.enqueue('six', 12);
myPQ.enqueue('seven', 55);
console.log('myPQ.pq: ', myPQ.pq);
console.log('remove a node from pq: ', myPQ.dequeue());
console.log('myPQ.pq: ', myPQ.pq);
