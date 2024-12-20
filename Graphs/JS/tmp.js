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


rPostDFS(vertex, res = [], vis = {}) {
  // the callstack is the stack

  if (vertex && this.adjacencyList[vertex]) {
    vis[vertex] = true;
    this.adjacencyList[vertex].forEach((v) => {
      // easier/more efficient to shuttle data structures in parameters
      if (!vis[v]) {
        this.rPostDFS(v, res, vis);
        res[res.length] = vertex;
      }
    });
  }

  return res;
}

iDFS(vertex) {
  const res = [];

  if (vertex && this.adjacencyList[vertex]) {
    const stack = [vertex], // an array is the stack
      vis = {};
    let v;
    vis[vertex] = true;

    while (stack[0]) {
      v = stack.pop();
      res[res.length] = v;
      this.adjacencyList[v].forEach((e) => {
        if (!vis[e]) {
          vis[e] = true;
          stack[stack.length] = e;
        }
      });
    }
  }

  return res;
}
