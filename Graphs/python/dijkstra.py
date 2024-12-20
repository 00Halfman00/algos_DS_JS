class Node:
  def __init__(self, label):
    self.label = label


class Dijkstra:
  def __init__(self):
    self.adjacency_list = {}


  """
    1.  add a vertex
    2.  create an edge, if the two vertices exist in adjacency list
    3.  remove an edge, if the edge exist
    4.  delete a vertex, or maybe disable a vertex....


    priority.....

  """

  """
    NOTE: IN REAL WORLD SCENARIOS OBJECTS/NODES ARE MOST LIKELY USED TO REPRESENT SOME ENTITY
    add_vertex
    1.  if valid argument is passed in
        2.  if a vertex by such a title does not already exist in adjacency list
            3.  add that vertex/node as a value with the key of the title passed in
    time complexity: O(1)
  """

  def add_vertex(self, label):
    if type(label) == str:
      if label not in self.adjacency_list:
        # value must be a list or atleast contain a list
        self.adjacency_list[label] = {"node": Node(label), "edges": [] }


  """
  NOTE: the list of edges should continue to be as light as can be for speed and memory efficiency
  add_edge
  1.  if valid arguments are passed in
      2.  if the titles of both vertices exist in adjacency list
          3.  add each other to each others respective adjacency list
  time complexity: O(1)
  """

  def add_edge(self, v1_name, v2_name, weight):
    if type(v1_name) == str and type(v2_name) == str:
      if v1_name in self.adjacency_list and v2_name in self.adjacency_list:
        self.adjacency_list[v1_name]["edges"].append({"node": v2_name, "weight": weight})
        self.adjacency_list[v2_name]["edges"].append({"node": v1_name, "weight": weight})


  """
  remove_edge
  1.  if valid arguments are passed in
      2.  if the titles of both vertices exist in adjacency list
          3.  remove each other from each others respective adjacecy list
  time complexity: O(n)
  """

  def remove_edge(self, v1_name, v2_name):
    if type(v1_name) == str and type(v2_name) == str:
      if v1_name in self.adjacency_list and v2_name in self.adjacency_list:
        edges1 = []
        edges2 = []
        for _, edge in enumerate(self.adjacency_list[v1_name]["edges"]):
          if edge["node"] != v2_name:
            edges1.append(edge)
        self.adjacency_list[v1_name]["edges"] = edges1
        for _, edge in enumerate(self.adjacency_list[v2_name]["edges"]):
          if edge["node"] != v1_name:
            edges2.append(edge)
        self.adjacency_list[v2_name]["edges"] = edges2

  """
  1.  if valid argument is passed in
      2.  if the title of the vertex to be deleted exist in the adjacecy list
          3.  iterate over the list of its edges for the vertex that is to be deleted
              4.  remove the node to be deleted from the list of each vertex's list of edges
          5.  delete from the adjacency list the vertex passed in as an argument
  """

  def remove_vertex(self, v_name):
    if type(v_name) == str:
      if v_name in self.adjacency_list:
        update_edges = None
        name = None
        for _, edge in enumerate(self.adjacency_list[v_name]["edges"]):
          name = edge["node"]
          update_list = []
          for _, others_edge in enumerate(self.adjacency_list[name]["edges"]):
            if others_edge["node"] != v_name:
              update_list.append(others_edge)
          self.adjacency_list[name] = update_list
      del self.adjacency_list[v_name]



  ########################     for printing           ##########################

  # time complexity: O(n)
  def printer(self):
    if self.adjacency_list:
      for key, value in self.adjacency_list.items():
        print(f'vertex: {key}  adjacency list: {value}')









dijkstra_graph = Dijkstra()


dijkstra_graph.add_vertex('Tokyo')
dijkstra_graph.add_vertex('Nagasaki')
dijkstra_graph.add_vertex('Seoul')
dijkstra_graph.add_vertex('Hong Kong')


dijkstra_graph.add_edge("Tokyo", "Nagasaki", 150)
dijkstra_graph.add_edge("Tokyo", "Seoul", 800)
dijkstra_graph.add_edge("Seoul", "Nagasaki", 900)
dijkstra_graph.add_edge("Seoul", "Hong Kong", 1000)

print('before: ')
dijkstra_graph.printer()

# dijkstra_graph.remove_edge('Seoul', "Nagasaki")
# dijkstra_graph.remove_edge('Seoul', "Tokyo")
dijkstra_graph.remove_vertex("Seoul")
print('after: ')
dijkstra_graph.printer()
