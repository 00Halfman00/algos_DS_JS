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
    METHOD ONE
    1.  method to create an entry in the adjacency list with a vertex's name
        as the key in adjacency list and a dictionary containing a class instance
        of a Node to represent an entity and a list of edges that are associated with
        the entity/vertex as the value.
    """

    def create_vertex(self, vertex_name):
        if type(vertex_name) == str:
            if not vertex_name in self.adjacency_list:
                self.adjacency_list[vertex_name] = {
                    "node": Node(vertex_name),
                    "edges": [],
                }
                return True
        return False

    """
    METHOD TWO
    1.  method to create an edge between two vertices
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
                return True
        return False

    """
    METHOD THREE
    1.  method to remove an edge from the adjacency list
    """

    def remove_edge(self, vertex1_name, vertex2_name):
        if type(vertex1_name) == str and type(vertex2_name) == str:
            if (
                vertex1_name in self.adjacency_list
                and vertex2_name in self.adjacency_list
            ):
                updated_edges1 = []
                for _, edge in enumerate(self.adjacency_list[vertex1_name]["edges"]):
                    if edge["node"] != vertex2_name:
                        updated_edges1.append(edge)
                self.adjacency_list[vertex1_name]["edges"] = updated_edges1
                updated_edges2 = []
                for _, edge in enumerate(self.adjacency_list[vertex2_name]["edges"]):
                    if edge["node"] != vertex1_name:
                        updated_edges2.append(edge)
                self.adjacency_list[vertex2_name]["edges"] = updated_edges2
                return True
        return False

    """
    METHOD FOUR
    1.  method to remove a vertex from the adjacency list; that is, vertex will be removed from the graph
    """

    def remove_vertex(self, vertex_name):
        if type(vertex_name) == str:
            if vertex_name in self.adjacency_list:
                for _, edge in enumerate(self.adjacency_list[vertex_name]["edges"]):
                    edges = self.adjacency_list[edge["node"]]["edges"]
                    updated_edges = []
                    for _, vertex in enumerate(edges):
                        if vertex["node"] != vertex_name:
                            updated_edges.append(vertex)
                    self.adjacency_list[edge["node"]]["edges"] = updated_edges
                del self.adjacency_list[vertex_name]
                return True
        return False

    """
    METHOD 5
    1.  method to find the shortest path betweeen to vertices in graph
    """

    def shortest_path(self, start_vertex_name, end_vertex_name):
        if type(start_vertex_name) == str and type(end_vertex_name) == str:
            if (
                start_vertex_name in self.adjacency_list
                and end_vertex_name in self.adjacency_list
            ):
                queue, distances, previous = Queue(), {}, {}
                for _, vertex in enumerate(self.adjacency_list):
                    if vertex == start_vertex_name:
                        queue.enqueue(vertex, 0)
                        distances[vertex] = 0
                    else:
                        queue.enqueue(vertex, float("inf"))
                        distances[vertex] = float("inf")
                    previous[vertex] = None

                vertex_payload = None
                path_cost = 0

                while queue:
                    node = queue.dequeue()
                    if node["val"] == end_vertex_name:
                        print("found the end vertex: ", node)
                        print("previous: ", previous)
                        print("distances: ", distances)
                        return None
                    vertex_payload = self.adjacency_list[node["val"]]
                    if node or distances[node["node"]]:
                        for _, edge in enumerate(vertex_payload["edges"]):
                            path_cost = distances[node["val"]] + edge["weight"]
                            if path_cost < distances[edge["node"]]:
                                distances[edge["node"]] = path_cost
                                previous[edge["node"]] = node["val"]
                                queue.enqueue(edge["node"], path_cost)

    ########################                 for printing                 ##########################

    # time complexity: O(n)
    def printer(self):
        if self.adjacency_list:
            for key, value in self.adjacency_list.items():
                print(f"node: {key}  edges: {value}")


dijkstra_graph = Dijkstra()


dijkstra_graph.create_vertex("A")
dijkstra_graph.create_vertex("B")
dijkstra_graph.create_vertex("C")
dijkstra_graph.create_vertex("D")
dijkstra_graph.create_vertex("E")
dijkstra_graph.create_vertex("F")


dijkstra_graph.create_edge("A", "B", 4)
dijkstra_graph.create_edge("A", "C", 2)
dijkstra_graph.create_edge("B", "E", 3)
dijkstra_graph.create_edge("C", "D", 2)
dijkstra_graph.create_edge("C", "F", 4)
dijkstra_graph.create_edge("D", "E", 3)
dijkstra_graph.create_edge("D", "F", 1)
dijkstra_graph.create_edge("E", "F", 1)


# dijkstra_graph.remove_edge("A", "B")

# dijkstra_graph.remove_vertex("A")
dijkstra_graph.shortest_path("A", "E")

# dijkstra_graph.printer()
