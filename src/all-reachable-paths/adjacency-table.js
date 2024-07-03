const input = [
  [1, 3],
  [3, 5],
  [1, 2],
  [2, 4],
  [4, 5],
]

function main() {
  /** n为节点数量，m为边数 */
  const n = 5, m = 5
  const graph = new Array(n + 1).fill(undefined)
  for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i]
    if (!graph[x]) {
      graph[x] = []
    }
    graph[x].push(y)
  }
  console.log(graph)

  const res = []
  const path = [1]
  dfs(1)
  console.log(res)
  function dfs(start) {
    if (start === n) {
      res.push([...path])
      return
    }
    for (let i = 0; i < graph[start].length; i++) {
      const num = graph[start][i]
      path.push(num)
      dfs(num)
      path.pop()
    }
  }
}

main()