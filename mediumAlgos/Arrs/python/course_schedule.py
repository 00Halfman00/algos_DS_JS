"""
207. Course Schedule
Medium
Topics
Companies
Hint
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.


CODE BELOW IS FROM THE LEETCODE EDITORIAL PAGE, GOTTEN FOR LEARNING PURPOSES; THAT IS, TO UNDERSTAND IT.

"""

from collections import deque


def canFinish(numCourses, prerequisites):
    indegree = [0] * numCourses
    adj = [[] for _ in range(numCourses)]

    for prerequisite in prerequisites:
        adj[prerequisite[1]].append(prerequisite[0])
        indegree[prerequisite[0]] += 1

    queue = deque()
    for i in range(numCourses):
        if indegree[i] == 0:
            queue.append(i)

    nodesVisited = 0
    while queue:
        node = queue.popleft()
        nodesVisited += 1

        for neighbor in adj[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return nodesVisited == numCourses


numCourses1 = 2
prerequisites1 = [[1, 0]]
print(canFinish(numCourses1, prerequisites1))

numCourses2 = 2
prerequisites2 = [[1, 0], [0, 1]]
print(canFinish(numCourses2, prerequisites2))


"""
Interesting puzzle. Glad to work with graphs again, but it is relatively still new territory and will take a bit of
time to really understand all/most of the work that is being done with them. Rome wasn't built in a day
but the mind can only take so much in a day, like weight lifting, before you are just mindlessly typing away.
So let the new thoughts settle before you start beating on them again tomorrow or you won't form the right/proper
neural pathways. There are thinkers and repeaters, which one are you?
"""
