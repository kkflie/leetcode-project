const input = [
  [1, 3, 1, 2, 4],
  [1, 2, 1, 3, 2],
  [2, 4, 7, 2, 1],
  [4, 5, 6, 1, 1],
  [1, 4, 1, 2, 1],
]
const n = 5
const m = 5

const visited = new Array(input.length).fill(undefined)
  .map(() => new Array(input[0].length).fill(false))

const visited2 = new Array(input.length).fill(undefined)
  .map(() => new Array(input[0].length).fill(false))

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
]

const res = []

function dfs(graph, visited, x, y) {
  if (visited[x][y]) return
  visited[x][y] = true
  const h = graph[x][y]
  for (let i = 0; i < dir.length; i++) {
    const [x1, y1] = dir[i]
    const x2 = x + x1 
    const y2 = y + y1 
    if (x2 < 0 || x2 >= n || y2 < 0 || y2 >= m) continue 
    if (h > graph[x2][y2]) continue
    dfs(graph, visited, x2, y2)
  }
  return
}

function main() {
  const graph = input
  for (let i = 0; i < n; i++) {
    dfs(graph, visited, i, 0)
    dfs(graph, visited2, i, m - 1)
  }
  for (let i = 0; i < m; i++) {
    dfs(graph, visited, 0, i)
    dfs(graph, visited2, n - 1, i)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] && visited2[i][j]) {
        res.push([i, j])
      }
    }
  }
  console.log(res)
  visited.forEach((e, i) => {
    e.forEach((_, j) => {
      visited[i][j] = visited[i][j] && visited2[i][j]
    })
  })
  console.log(visited)
}

main()