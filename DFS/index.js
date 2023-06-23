const makeGraph = () => {
  return {}
}

const addVertex = (adjacencyList, vertex) => {
  return { ...adjacencyList, [vertex]: [] }
}

const addEdge = (adjacencyList, v1, v2) => {
  return { ...adjacencyList, [v1]: [...adjacencyList[v1], v2], [v2]: [...adjacencyList[v2], v1] }
}

const removeEdge = (adjacencyList, vertex1, vertex2) => {
  return { 
    ...adjacencyList, 
    [vertex1]: adjacencyList[vertex1].filter(v => v !== vertex2),
    [vertex2]: adjacencyList[vertex2].filter(v => v !== vertex1)
  }
}

const removeVertex = (adjacencyList, vertex) => {
  let newList = { ...adjacencyList }
  while (newList[vertex].length) {
    const adjacentVertex = newList[vertex].pop()
    newList = removeEdge(newList, vertex, adjacentVertex)
  }

  delete newList[vertex]
  return newList
}

const depthFirstRecursive = (adjacencyList, start) => {
  const result = []
  const visited = {}

  const dfs = (vertex) => {
    if (!vertex) return null

    visited[vertex] = true
    result.push(vertex)
    adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        return dfs(neighbor)
      }
    })
  }
    
  dfs(start)

  return result
}

const depthFirstIterative = (adjacencyList, start) => {
  let stack = [start]
  const result = []
  const visited = { [start]: true }
  let currentVertex

  while(stack.length) {
    currentVertex = stack.pop()
    result.push(currentVertex)
    
    adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        stack.push(neighbor)
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