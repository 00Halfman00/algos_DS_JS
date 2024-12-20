class Node:
  def __init__(self, val):
    self.name = val


class Graph:
  def __init__(self):
    self.adjacency_list = {}


  ##################################################################################################
  #######################  adding and removing: vertices and edges  ################################
  ##################################################################################################

  # time complexity: O(1)
  def add_vertex(self, name):
    if type(name) == str and not name in self.adjacency_list:
      self.adjacency_list[name] = []

  # time complexity: O(1)
  def add_edge(self, v1_name, v2_name):
    if type(v1_name) == str and type(v2_name) == str:
      if v1_name in self.adjacency_list and v2_name in self.adjacency_list:
        self.adjacency_list[v1_name].append(v2_name)
        self.adjacency_list[v2_name].append(v1_name)

  # time complexity: O(n)
  def remove_edge(self, v1_name, v2_name):
    if type(v1_name) == str and type(v2_name) == str:
      if v1_name in self.adjacency_list and v2_name in self.adjacency_list:
        if v2_name in self.adjacency_list[v1_name]:
          self.adjacency_list[v1_name].remove(v2_name)
        if v1_name in self.adjacency_list[v2_name]:
          self.adjacency_list[v2_name].remove(v1_name)

  # time complexity: O(n)
  def remove_vertex(self, v_name):
    if type(v_name) == str and v_name in self.adjacency_list:
      for _, vertex in enumerate(self.adjacency_list[v_name]):
        # calling self.remove_edge can be done, but no point in emptying a list you are going to delete, entirely
        self.adjacency_list[vertex].remove(v_name)
      del self.adjacency_list[v_name]


  ##################################################################################################
  #######################  traversing graph from a starting vertex  ################################
  ##################################################################################################



  ###################                   DFS                    #####################################

  """
    get_vertices_dfs method
    1.  create a list to place vertices in
    1.  if argument is valid and is found in adjacency list
        I.    create a dictionary to keep track of visited nodes
        II.   validate argument passed in and if it can be found in graph
        III.  create a helper funciton to recurse with
              a.  create entry for vertex in hash table
              b.  now iterate over the edges of vertex
              c.  if current vertex is not in visisted list
                  1c. call helper function on the current vertex
        III.  invoke recurse function with name of vertex
        IV.   return list of visited nodes
    NOTE: THIS WAY OF TRAVERSING WILL ONLY GET NODES THAT ARE CONNECTED TO STARTING NODE
          EITHER DIRECTLY OR INDIRECTLY; THAT IS, ALL NODES TRAVERSED ARE CONNECTED
          TO EACH OTHER THRU EDGES THEY CAN POSSIBLY TRAVERSE IF WANTED
  """

  def get_vertices_dfs_recurse(self, v_name):
    results = []

    if type(v_name) == str and v_name in self.adjacency_list:
      visited = {}

      def recurse_dfs(v_name):
        visited[v_name] = True
        results.append(v_name)
        for _, vertex in enumerate(self.adjacency_list[v_name]):
          if not vertex in visited:
            recurse_dfs(vertex)

      recurse_dfs(v_name)

    return results

  """
    get_vertices_dfs_iterate
    1.  create a list to place vertices in
    2.  if argument is valid and is found in adjacency list
        I.    create a stack with the vertex gotten from argument passed
              create an empty dictionary to keep track of visited vertices
              create a variable to assign a popped vertex, initialize it with None
        II.   outer loop over the len of the stack
              a.  pop vertex from the stack and assign it as key in visited dictionary with value of True
              b.  add vertex to list of results
              c.  inner loop over the edges found in the adjacency list of the popped vertex
                  c1. if current vertex is not in visited list
                      1c. assign vertex as key in visited dictionary with the value of True
                      2c. append current vertex to stack
    3.  return list of visited nodes
    NOTE: THIS WAY OF TRAVERSING WILL ONLY GET NODES THAT ARE CONNECTED TO STARTING NODE
          EITHER DIRECTLY OR INDIRECTLY; THAT IS, ALL NODES TRAVERSED ARE CONNECTED
          TO EACH OTHER THRU EDGES THEY CAN POSSIBLY TRAVERSE IF WANTED
  """

  def get_vertices_dfs_iterate(self, v_name):
    results = []

    if type(v_name) == str and v_name in self.adjacency_list:
      stack, visited, current_vertex = [v_name], {}, None
      visited[v_name] = True
      while len(stack):
        current_vertex = stack.pop()
        results.append(current_vertex)
        for _, vertex in enumerate(self.adjacency_list[current_vertex]):
          if not vertex in visited:
            visited[vertex] = True
            stack.append(vertex)

    return results



  ###################                   BFS                    #####################################


  """

    get_vertices_bfs_iterative
    1.  create a list to place vertices in
    2.  if argument is valid and is found in adjacency list
        I.    create a queue with the vertex gotten from argument passed
              create an empty dictionary to keep track of visited vertices
              create a variable to assign a popped vertex, initialize it with None, call it current_vertex
        II.   outer loop while queue is not empty
              a.  remove the first vertex from the queue and assign it to current_vertex
              b.  add current vertex to list of results
              c.  inner loop over the edges found in the adjacency list of current vertex
                  c1. if vertex is not in visited list
                      1c. assign vertex as key in visited dictionary with the value of True
                      2c. append current vertex to queue
    3.  return list of visited nodes
  """


  def get_vertices_bfs_iterate(self, v_name):
    results = []

    if type(v_name) == str and v_name in self.adjacency_list:
      queue, visited, current_vertex = [v_name], {}, None
      visited[v_name] = True

      while queue:
        current_vertex = queue.pop(0)
        results.append(current_vertex)
        for _, vertex in enumerate(self.adjacency_list[current_vertex]):
          if vertex not in visited:
            visited[vertex] = True
            queue.append(vertex)


    return results


  ########################     for printing           ##########################

  # time complexity: O(n)
  def printer(self):
    if self.adjacency_list:
      for key, value in self.adjacency_list.items():
        print(f'vertex: {key}  adjacency list: {value}')




my_graph = Graph()
my_graph.add_vertex('A')
my_graph.add_vertex('B')
my_graph.add_vertex('C')
my_graph.add_vertex('D')
my_graph.add_vertex('E')
my_graph.add_vertex('F')
my_graph.add_edge('A', 'B')
my_graph.add_edge('A', 'C')
my_graph.add_edge('B', 'D')
my_graph.add_edge('C', 'E')
my_graph.add_edge('D', 'E')
my_graph.add_edge('D', 'F')
my_graph.add_edge('E', 'F')

"""

GRAPH'S ADJACENCY LIST

  vertex: A  adjacency list: ['B', 'C']
  vertex: B  adjacency list: ['A', 'D']
  vertex: C  adjacency list: ['A', 'E']
  vertex: D  adjacency list: ['B', 'E', 'F']
  vertex: E  adjacency list: ['C', 'D', 'F']
  vertex: F  adjacency list: ['D', 'E']


DFS ITERATIVE TRAVERSAL USING A STACK AND A HASH MAP
results: ['A', 'B', 'D', 'E', 'C', 'F']

                       STACK             VISITED
          A            ['A']             { 'A': True }
        /   \          ['B', 'C']        { 'A': True, 'B': True, 'C': True }
       B     C         ['B', 'E']        { 'A': True, 'B': True, 'C': True, 'E': True }
       |     |         ['B', 'D', 'F']   { 'A': True, 'B': True, 'C': True, 'E': True, 'D': True, 'F': True }
       D --- E         ['B', 'D', 'F']   { 'A': True, 'B': True, 'C': True, 'E': True, 'D': True, 'F': True }
        \   /          ['B', 'D']        { 'A': True, 'B': True, 'C': True, 'E': True, 'D': True, 'F': True }
          F            ['B']             { 'A': True, 'B': True, 'C': True, 'E': True, 'D': True, 'F': True }

"""






"""
GRAPH'S ADJACENCY LIST

  vertex: A  adjacency list: ['B', 'C']
  vertex: B  adjacency list: ['A', 'D']
  vertex: C  adjacency list: ['A', 'E']
  vertex: D  adjacency list: ['B', 'E', 'F']
  vertex: E  adjacency list: ['C', 'D', 'F']
  vertex: F  adjacency list: ['D', 'E']

BFS ITERATIVE TRAVERSAL USING A QUEUE AND A HASH MAP
  results: ['A', 'B', 'C', 'D', 'E', 'F']

  queue           visited                                                                             results
  ['A']           {'A': True}                                                                         []
  ['B', 'C']      {'A': True, 'B': True, 'C': True}                                                   ['A']
  ['C', 'D']      {'A': True, 'B': True, 'C': True, 'D': True}                                        ['A', 'B']
  ['D', 'E']      {'A': True, 'B': True, 'C': True, 'D': True, 'E': True}                             ['A', 'B', 'C']
  ['E', 'F']      {'A': True, 'B': True, 'C': True, 'D': True, 'E': True, 'F': True}                  ['A', 'B', 'C', 'D']
  ['F']           {'A': True, 'B': True, 'C': True, 'D': True, 'E': True, 'F': True}                  ['A', 'B', 'C', 'D', 'E']


"""

# my_graph.remove_edge('Tokyo', 'Hong Kong')
# my_graph.remove_vertex('Tokyo')
print('\n')
my_graph.printer()
# print('\nall vertices dfs recurse in graph: ', my_graph.get_vertices_dfs_recurse('A'))
print('\nall vertices bfs iterative in graph: ', my_graph.get_vertices_bfs_iterate('A'))
# print('\nall vertices dfs iterate in graph: ', my_graph.get_vertices_dfs_iterate('A'))
# print(my_graph.adjacency_list["Tokyo"][0])
