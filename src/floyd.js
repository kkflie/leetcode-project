const edges = [
  [1, 2, 10],
  [1, 3, 1],
  [3, 4, 1],
  [4, 2, 1],
]

const v = 4
const grid = new Array(v + 1).fill(undefined)
  .map(() => new Array(v + 1).fill(Number.MAX_SAFE_INTEGER))

for (let i = 0; i < edges.length; i++) {
  const [s, t, w] = edges[i]
  grid[s][t] = w
  grid[t][s] = w
}
for (let i = 1; i <= v; i++) {
  grid[i][i] = 0
  for (let j = 1; j <= v; j++) {
    for (let k = 1; k <= v; k++) {
      grid[i][j] = Math.min(grid[i][j], grid[i][k] + grid[k][j])
    }
  }
}

console.log(grid)