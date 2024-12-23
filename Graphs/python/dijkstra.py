class Queue:
    def __init__(self):
        self.values = []

    def enqueue(self, val, pri):
        if type(val) == str and pri >= 0:
            self.values.append({"val": val, "priority": pri})
            self.values.sort(key=lambda info: info["priority"])

    def dequeue(self):
        node = None
        if self.values:
            node = self.values.pop(0)
        return node


class Node:
    def __init__(self, label):
        self.label = label


class Dijkstra:
    def __init__(self):
        self.adjacency_list = {}

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
                # a dictionary data structure  will contain a class to keep information about the vertex
                # and a list data structure will contain dictionaries that have a node key and an
                # edges key. Their values, respectively, a name as a string and a weight as an integer
                self.adjacency_list[label] = {"node": Node(label), "edges": []}

    """
    NOTE: the list of edges should continue to be as light as can be for speed and memory efficiency
    add_edge
    1.  if valid arguments are passed in
        2.  if the titles of both vertices exist in adjacency list
            3.  add each other to each others respective adjacency list
    time complexity: O(1)
    """
    #  "A" :  { "node":  class,  "edges":  [ { "node": string,  "weight": integer  } ] }

    def add_edge(self, v1_name, v2_name, weight):
        if type(v1_name) == str and type(v2_name) == str:
            if v1_name in self.adjacency_list and v2_name in self.adjacency_list:
                self.adjacency_list[v1_name]["edges"].append(
                    {"node": v2_name, "weight": weight}
                )
                self.adjacency_list[v2_name]["edges"].append(
                    {"node": v1_name, "weight": weight}
                )

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
          3.  iterate over the list of the edges for the vertex that is to be deleted
              4.  for each vertex in list, iterate over that vertex's list
                  5.  remove the node to be deleted from the list
          6.  delete from the adjacency list the vertex passed in as an argument
    """

    def remove_vertex(self, v_name):
        if type(v_name) == str:
            if v_name in self.adjacency_list:
                update_edges = None
                name = None
                for _, edge in enumerate(self.adjacency_list[v_name]["edges"]):
                    name = edge["node"]
                    update_edges = []
                    for _, others_edge in enumerate(self.adjacency_list[name]["edges"]):
                        if others_edge["node"] != v_name:
                            update_edges.append(others_edge)
                    self.adjacency_list[name] = update_edges
            del self.adjacency_list[v_name]

    """
    NOTE:   shortest parth from one vertex to another in graph
    shortest_path()
    STEP I:     INITIATE DATA STRUCTURES WITH DATA
                1.  create dictionary, call it distances. While iterating over the adjacecy list, it
                    will create a key in dictionary, representing each vertex in adjacency list.
                    Moreover, it will initiate each key with a value of Infinity, except for the
                    starting vertex, which will have a value of zero.
                2.  create a priority queue, call it queue. While iterating over adjacency list, it
                    will place the vertex with a priority of Infinity in the priority queue, except
                    for the starting vertex, which will have a priority of zero.
                3.  create another dictionary, call it previous. While iterating over the adjacency list,
                    it will create a key in dictionary, representing each vertex in the adjacency list.
                    Moreover, it will it will initiate each key will a value of None.

    STEP II:    LOOP OVER PRIORITY QUEUE WHILE QUEUE IS NOT EMPTY OR DESTINATION VERTEX IS FOUNDJ
    """

    def shortest_path(self, start_vertex, end_vertex):
        distances = {}
        queue = Queue()
        previous = {}

        for _, vertex in enumerate(self.adjacency_list):
            if vertex == start_vertex:
                distances[vertex] = 0
                queue.enqueue(vertex, 0)
            else:
                distances[vertex] = float("inf")
                queue.enqueue(vertex, float("inf"))
            previous[vertex] = None

        print("distances: ", distances)
        print("previous: ", previous)
        print("queue: ", queue.values)

        path = None
        while queue:
            #  FIRST TIME: THE STARTING VERTEX WILL BE USED
            #  AFTER FIRST TIME: VERTEX WITH THE HIGHEST PRIORITY IN QUEUE WILL BE GOTTEN
            vertex = queue.dequeue()  # { "val": 'A', 'priority': 0 }
            #  IF DESTINATION VERTEX IS FOUND
            if vertex["val"] == end_vertex:
                print("distances done: ", distances)
                print("previous done: ", previous)
                path = [end_vertex]
                while previous[end_vertex]:
                    path.append(previous[end_vertex])
                    end_vertex = previous[end_vertex]
                path.reverse()
                break
            #  GET THE VALUE/PAYLOAD FOR THE CURRENT VERTEX IN THE ADJACENCY LIST
            node = self.adjacency_list[vertex["val"]]

            if vertex or distances[vertex["val"]] != float("inf"):
                current_path_cost = 0
                for _, edge in enumerate(
                    node["edges"]
                ):  #  [{'node': 'B', 'weight': 4}, .....]
                    current_path_cost = edge["weight"] + distances[vertex["val"]]
                    if current_path_cost < distances[edge["node"]]:
                        distances[edge["node"]] = current_path_cost
                        previous[edge["node"]] = vertex["val"]
                        queue.enqueue(edge["node"], current_path_cost)
        return path

    ########################              for printing           ###################################

    # time complexity: O(n)
    def printer(self):
        if self.adjacency_list:
            for key, value in self.adjacency_list.items():
                print(f"node: {key}  edges: {value}")


####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################


dijkstra_graph = Dijkstra()


dijkstra_graph.add_vertex("A")
dijkstra_graph.add_vertex("B")
dijkstra_graph.add_vertex("C")
dijkstra_graph.add_vertex("D")
dijkstra_graph.add_vertex("E")
dijkstra_graph.add_vertex("F")

dijkstra_graph.add_edge("A", "B", 4)
dijkstra_graph.add_edge("A", "C", 2)
dijkstra_graph.add_edge("B", "E", 3)
dijkstra_graph.add_edge("C", "D", 2)
dijkstra_graph.add_edge("C", "F", 4)
dijkstra_graph.add_edge("D", "E", 3)
dijkstra_graph.add_edge("D", "F", 1)
dijkstra_graph.add_edge("E", "F", 1)

# print("adjacency list: ", dijkstra_graph.adjacency_list)
# print("before: ")
# dijkstra_graph.printer()

# # dijkstra_graph.remove_edge('Seoul', "Nagasaki")
# # dijkstra_graph.remove_edge('Seoul', "Tokyo")
# dijkstra_graph.remove_vertex("Seoul")
# print("after: ")
# dijkstra_graph.printer()


# my_queue = Queue()
# my_queue.enqueue("A", 50)
# my_queue.enqueue("C", 30)
# my_queue.enqueue("F", 40)
# my_queue.enqueue("D", 10)
# my_queue.enqueue("E", 20)


# print(my_queue.values)
# print(my_queue.dequeue())
# print(my_queue.values)

print("shortest path: ", dijkstra_graph.shortest_path("A", "E"))
