const input = [
  [1, 1, 0, 0, 0,],
  [1, 1, 0, 0, 0,],
  [0, 0, 1, 0, 0,],
  [0, 0, 0, 1, 1,],
]
const visited = new Array(input.length).fill(undefined)
  .map(() => new Array(input[0].length).fill(false))

// 上右下左
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
function main() {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 1 && !visited[i][j]) {
        count++
        dfs(input, i, j)
      }
    }
  }
  // console.log(input)
  console.log(visited)
  console.log('count', count)
}

function dfs(graph, x, y) {
  visited[x][y] = true
  // graph[x][y] = 0
  for (let i = 0; i < dir.length; i++) {
    const [x2, y2] = dir[i]
    if (
      x + x2 >= 0 &&
      x + x2 < graph.length &&
      y + y2 >= 0 &&
      y + y2 < graph[x + x2].length &&
      !visited[x + x2][y + y2] &&
      graph[x + x2][y + y2] === 1
    ) {
      visited[x + x2][y + y2] = true
      dfs(graph, x + x2, y + y2)
    }
  }
}
main()