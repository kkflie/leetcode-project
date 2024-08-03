// 普里姆算法-从无向图得到最小生成树
const m = 7 // 7个顶点

const edges = [
  [1, 2, 1],
  [1, 3, 1],
  [1, 5, 2],
  [2, 6, 1],
  [2, 4, 2],
  [2, 3, 2],
  [3, 4, 1],
  [4, 5, 1],
  [5, 6, 2],
  [5, 7, 1],
  [6, 7, 1],
] 

const n = edges.length

const grid = new Array(m + 1).fill(undefined)
  .map(() => new Array(m + 1).fill(10001))

edges.forEach(([u, v, w]) => {
  grid[u][v] = w
  grid[v][u] = w
})

// console.log(grid)
const minDist = new Array(m + 1).fill(10001)

const inTree = new Array(m + 1).fill(false)

const parent = new Array(m + 1).fill(-1)

// 将所有点连在一起，需要m-1条边
for (let i = 1; i < m; i++) {
  let cur = -1
  let min = Number.MAX_SAFE_INTEGER
  for (let j = 1; j <= m; j++) {
    if (!inTree[j] && minDist[j] < min) {
      min = minDist[j]
      cur = j
    }
  }
  inTree[cur] = true
  for (let j = 1; j <= m; j++) {
    if (!inTree[j] && grid[cur][j] < minDist[j]) {
      minDist[j] = grid[cur][j]
      parent[j] = cur
    }
  }
}
// console.log(minDist)

for (let i = 1; i <= m; i++) {
  console.log(i, '=>', parent[i])
}
// console.log(parent)