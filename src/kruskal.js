// kruskal算法-无向图生成最小生成树，根据并查集来生成
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

edges.sort((a, b) => a[2] - b[2])

const n = edges.length

const father = new Array(m + 1).fill(-1)

for (let i = 1; i < father.length; i++) {
  father[i] = i
}

function find(u) {
  if (u === father[u]) {
    return u
  }
  return father[u] = find(father[u])
}

function isSame(u, v) {
  u = find(u)
  v = find(v)
  return u === v
}

const parent = new Array(m + 1).fill(-1)
function join(u, v) {
  u2 = find(u)
  v2 = find(v)
  if (u2 === v2) return
  father[v2] = u2
  parent[v] = u
}

for (let i = 0; i < n; i++) {
  const [u, v] = edges[i]
  join(u, v)
}

for (let i = 1; i <= m; i++) {
  console.log(i, '=>', parent[i])
}


