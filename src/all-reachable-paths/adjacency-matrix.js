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
    .map(() => new Array(n + 1).fill(0))
  for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i]
    graph[x][y] = 1
  }
  // console.log(graph)

  const res = []
  const path = [1]
  dfs(1)
  console.log(res)
  function dfs(start) {
    if (start === n) {
      res.push([...path])
      return
    }
    for (let i = 1; i <= n; i++) {
      if (graph[start][i] === 1) {
        path.push(i)
        dfs(i)
        path.pop()
      }
    }
  }
}

main()