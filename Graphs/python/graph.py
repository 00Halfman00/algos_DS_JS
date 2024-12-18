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


  """
    get_vertices_dfs method
    1.  if vertex name is valid
        I.    create a list to keep track of visited nodes
        II.   validate argument passed in and if it can be found in graph
        III.  create a helper funciton to recurse with
              a.  create entry for vertex in hash table
              b.  now iterate over the edges of vertex
              c.  if current vertex is not in visisted list
                  1c. call helper function on the current vertex
        III.  invoke recurse function with vertex name
        IV.   return list of visited nodes
  """

  def get_vertices_dfs_recurse(self, v_name):
    visited = []
    if type(v_name) == str and v_name in self.adjacency_list:
      def recurse_dfs(v_name):
        visited.append(v_name)
        for _, vertex in enumerate(self.adjacency_list[v_name]):
          if not vertex in visited:
            recurse_dfs(vertex)
      recurse_dfs(v_name)
    return visited

  """
    get_vertices_dfs_iterate
    1.  create a list to keep track of visited verices
    2.  if argument is valid
        I.    create a stack with the vertex gotten from argument passed
        II.   outer loop over the len of the stack
              a.  if vertex is not in list of visited nodes
                  1a. add vertex to list of visited vertices
                  2a.  inner loop over the edges found for the vertex
                      a1. if current vertex is not in visited list
                          _a1. append current vertex to stack
    3.  return list of visited nodes

  """

  def get_vertices_dfs_iterate(self, v_name):
    visited = []
    if type(v_name) == str and v_name in self.adjacency_list:
      stack = [v_name]
      while len(stack):
        vertex = stack.pop()
        if not vertex in visited:
          visited.append(vertex)
          for _, vertex in enumerate(self.adjacency_list[v_name]):
            if not vertex in visited:
              stack.append(vertex)
    return visited




  ########################     for printing           ##########################

  # time complexity: O(n)
  def printer(self):
    if self.adjacency_list:
      for key, value in self.adjacency_list.items():
        print(f'key: {key}  value: {value}')




my_graph = Graph()
my_graph.add_vertex('Tokyo')
my_graph.add_vertex('Seoul')
my_graph.add_vertex('Hong Kong')
my_graph.add_vertex('Jakarta')
my_graph.add_edge('Tokyo', 'Hong Kong')
my_graph.add_edge('Tokyo', 'Seoul')
my_graph.add_edge('Tokyo', 'Jakarta')
my_graph.add_edge('Seoul', 'Jakarta')
my_graph.add_edge('Seoul', 'Hong Kong')
# my_graph.remove_edge('Tokyo', 'Hong Kong')
# my_graph.remove_vertex('Tokyo')
print('all vertices in graph: ', my_graph.get_vertices_dfs_recurse('Tokyo'))

my_graph.printer()
print('all vertices dfs recurse in graph: ', my_graph.get_vertices_dfs_recurse('Tokyo'))
print('all vertices dfs iterate in graph: ', my_graph.get_vertices_dfs_iterate('Tokyo'))
# print(my_graph.adjacency_list["Tokyo"][0])
