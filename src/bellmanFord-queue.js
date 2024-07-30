// 负权回路
const v = 6
const edges = [
  [5, 6, -2],
  [1, 2, 1],
  [5, 3, 1],
  [2, 5, 2],
  [2, 4, -3],
  [4, 6, 4],
  [1, 3, 5],  
]
const n = edges.length
const minDist = new Array(v + 1).fill(Number.MAX_SAFE_INTEGER)
minDist[1] = 0
const que = [1]
const visited = new Array(v + 1).fill(false)

while(que.length) {
  const node = que.shift()
  if (visited[node]) continue
  visited[node] = true
  for (let i = 0; i < edges.length; i++) {
    if (node !== edges[i][0]) continue
    const [s, t, w] = edges[i]
    if (minDist[s] + w < minDist[t]) {
      minDist[t] = minDist[s] + w
      que.push(t)
    }
  }
}
console.log(minDist)