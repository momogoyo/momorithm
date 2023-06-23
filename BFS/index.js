const makeGraph = () => {
  return {}
}

const addVertex = (graph, vertex) => {
  return { ...graph, [vertex]: [] }
}

const addEdge = (graph, v1, v2) => {
  return { ...graph, [v1]: [...graph[v1], v2], [v2]: [...graph[v2], v1] }
}

const removeEdge = (graph, vertex1, vertex2) => {
  return { 
    ...graph, 
    [vertex1]: graph[vertex1].filter(v => v !== vertex2),
    [vertex2]: graph[vertex2].filter(v => v !== vertex1)
  }
}

const removeVertex = (graph, vertex) => {
  const newGraph = { ...graph }
  while (newGraph[vertex].length) {
    const adjacentVertex = newGraph[vertex].pop()
    newGraph = removeEdge(newGraph, vertex, adjacentVertex)
  }

  delete newGraph[vertex]
  return newGraph
}

const breadthFirst = (graph, start) => {
  let queue = [start]
  const result = []
  const visited = { [start]: true }

  while (queue.length) {
    let currentVertex = queue.shift()
    result.push(currentVertex)
    
    graph[currentVertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        queue.push(neighbor)
      }
    })
  }

  return result
}

let g = makeGraph()
g = addVertex(g, 'A')
g = addVertex(g, 'B')
g = addVertex(g, 'C')
g = addVertex(g, 'D')
g = addVertex(g, 'E')
g = addVertex(g, 'F')

g = addEdge(g, 'A', 'B')
g = addEdge(g, 'A', 'C')
g = addEdge(g, 'B', 'D')
g = addEdge(g, 'C', 'E')
g = addEdge(g, 'D', 'E')
g = addEdge(g, 'D', 'F')
g = addEdge(g, 'E', 'F')

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]