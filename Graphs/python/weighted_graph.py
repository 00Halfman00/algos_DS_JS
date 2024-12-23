"""
    STEP 7
    Queue
    1.  create a Queue class that will serve as a priority queue, keeping a list of dictionaries
        in sorted order by their priority property

"""


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


"""
    STEP 1
    Node
    1.  Create a Node class that will provide nodes/vertices for the Weighted_Graph class
        I.  It will take a values and make them properties of the class instance
"""


class Node:
    def __init__(self, val):
        self.val = val


"""
    STEP 2
    Weighted_Graph
    1.  Create a Weighted_Graph class that have and adjacency list property that
        will be a dictionary of all vertices in graph as keys, and each key will have
        a value of that vertex's neighbors as a list of dictionaries with information
        about the neighbor
        2.  add_vertex method will add a vetex to the adjacency list
        3.  create_edge method will create and edge between two vertices
        4.  remove_edge method will remove an edge between two vertices
        5.  remove_vertex method will delete a vertex from the adjacency list
"""


class Weighted_Graph:
    def __init__(self):
        self.adjacency_list = {}

    """
        STEP 3
        NOTE: IN REAL WORLD SCENARIOS OBJECTS/NODES ARE MOST LIKELY USED TO REPRESENT SOME ENTITY
        add_vertex
        1.  if valid argument is passed in
            2.  if a vertex by such a title does not already exist in the adjacency list
                3.  create a vertex/node by calling Node class with the argument/s passed in
                4.  add that vertex/node as a value with the key of the title passed in
        time complexity: O(1)
    """

    def add_vertex(self, vertex_name):
        if type(vertex_name) == str:
            if vertex_name not in self.adjacency_list:
                self.adjacency_list[vertex_name] = {
                    "node": Node(vertex_name),
                    "edges": [],
                }

    """
        STEP 4
        NOTE: the list of edges should be as light as can be for speed and memory efficiency
        create_edge
        1.  if valid arguments are passed in
            2.  if the titles of both vertices exist in adjacency list
                3.  add each other to each others respective adjacency list
        time complexity: O(1)
    """

    def create_edge(self, vertex1_name, vertex2_name, weight):
        if type(vertex1_name) == str and type(vertex2_name) == str:
            if (
                vertex1_name in self.adjacency_list
                and vertex2_name in self.adjacency_list
            ):
                self.adjacency_list[vertex1_name]["edges"].append(
                    {"node": vertex2_name, "weight": weight}
                )
                self.adjacency_list[vertex2_name]["edges"].append(
                    {"node": vertex1_name, "weight": weight}
                )

    """
        STEP 5
        remove_edge
        1.  if valid arguments are passed in
            2.  if the titles of both vertices exist in adjacency list
                3.  remove each other from each others respective adjacecy list
                    by filtering out the edge to remove
        time complexity: O(n)
    """

    def remove_edge(self, vertex1_name, vertex2_name):
        if type(vertex1_name) == str and type(vertex2_name) == str:
            if (
                vertex1_name in self.adjacency_list
                and vertex2_name in self.adjacency_list
            ):
                vertex1_updated_edges = []
                for _, edge in enumerate(self.adjacency_list[vertex1_name]["edges"]):
                    if edge["node"] != vertex2_name:
                        vertex1_updated_edges.append(edge)
                self.adjacency_list[vertex1_name]["edges"] = vertex1_updated_edges
                vertex2_updated_edges = []
                for _, edge in enumerate(self.adjacency_list[vertex2_name]["edges"]):
                    if edge["node"] != vertex1_name:
                        vertex2_updated_edges.append(edge)
                self.adjacency_list[vertex2_name]["edges"] = vertex2_updated_edges

    """
        STEP 6
        1.  if valid argument is passed in
        2.  if the title of the vertex to be deleted exist in the adjacecy list
            3.  iterate over the list of the edges for the vertex that is to be deleted
                4.  for each vertex in list, iterate over that vertex's list of edges
                    5.  remove the node to be deleted from the list
            6.  delete from the adjacency list the vertex passed in as an argument
    """

    def remove_vertex(self, vertex_name):
        if type(vertex_name) == str:
            if vertex_name in self.adjacency_list:
                for _, edge in enumerate(self.adjacency_list[vertex_name]["edges"]):
                    updated_edges = []
                    edges = self.adjacency_list[edge["node"]]["edges"]
                    for _, other_edge in enumerate(edges):
                        if other_edge["node"] != vertex_name:
                            updated_edges.append(other_edge)
                    self.adjacency_list[edge["node"]]["edges"] = updated_edges
                del self.adjacency_list[vertex_name]

    """
        STEP 8
        NOTE:   shortest parth from one vertex to another in graph
        shortest_path()
        INITIATE DATA STRUCTURES WITH DATA
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

        LOOP OVER PRIORITY QUEUE WHILE QUEUE IS NOT EMPTY OR DESTINATION VERTEX IS FOUND
            4.  loop while queue has an item in it
            5.  remove the first item
            6.  check if it is the destination vertex and return if it is
            7.  get the payload from the adjacency for the popped item
            8.

    """

    def shortest_path(self, start_vertex_name, end_vertex_name):
        #   initiate data structures with data
        queue, distances, previous = Queue(), {}, {}
        for _, vertex_name in enumerate(self.adjacency_list):
            if vertex_name == start_vertex_name:
                queue.enqueue(start_vertex_name, 0)
                distances[start_vertex_name] = 0
            else:
                queue.enqueue(vertex_name, float("inf"))
                distances[vertex_name] = float("inf")
            previous[vertex_name] = None
        print("queue: ", queue.values)
        print("distances: ", distances)
        print("previous: ", previous)
        #  loop while priority queue has something in the queue
        while queue:
            #  remove the first item in queue
            node = queue.dequeue()
            #   if destination vertex is dequeued from priority queue
            if node["val"] == end_vertex_name:
                print("found the destination node: ", node)
                break

            payload = self.adjacency_list[node["val"]]
            path_cost = 0

            if node or distances[node["val"]] != float("inf"):
                #  iterate over the list of edges for the current vertex
                for _, edge in enumerate(payload["edges"]):
                    # calculate the path cost at this point in the graph
                    # path cost = the value in distances table for previous node + the value of the edge between the previous node and current node
                    path_cost = distances[node["val"]] + edge["weight"]
                    #  if a shorter path has been found from the start vertex to the current vertex
                    if path_cost < distances[edge["node"]]:
                        # mark the new shorter distance to the current vertex in the distances dictionary
                        distances[edge["node"]] = path_cost
                        # mark the vertex that came before the current vertex
                        previous[edge["node"]] = node["val"]
                        # enqueue the current vertex with the updated path cost/ priority
                        queue.enqueue(edge["node"], path_cost)

    ########################                 for printing                 ##########################

    # time complexity: O(n)
    def printer(self):
        if self.adjacency_list:
            for key, value in self.adjacency_list.items():
                print(f"node: {key}  edges: {value}")


dijkstra_graph = Weighted_Graph()


dijkstra_graph.add_vertex("A")
dijkstra_graph.add_vertex("B")
dijkstra_graph.add_vertex("C")
dijkstra_graph.add_vertex("D")
dijkstra_graph.add_vertex("E")
dijkstra_graph.add_vertex("F")


dijkstra_graph.create_edge("A", "B", 4)
dijkstra_graph.create_edge("A", "C", 2)
dijkstra_graph.create_edge("B", "E", 3)
dijkstra_graph.create_edge("C", "D", 2)
dijkstra_graph.create_edge("C", "F", 4)
dijkstra_graph.create_edge("D", "E", 3)
dijkstra_graph.create_edge("D", "F", 1)
dijkstra_graph.create_edge("E", "F", 1)

# dijkstra_graph.remove_edge("D", "E")
# dijkstra_graph.remove_edge("D", "F")
# dijkstra_graph.remove_edge("C", "A")

# dijkstra_graph.remove_vertex("A")
# dijkstra_graph.remove_vertex("D")

print("finished: ", dijkstra_graph.shortest_path("A", "E"))

# dijkstra_graph.printer()
