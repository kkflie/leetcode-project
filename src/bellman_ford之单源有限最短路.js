// 负权回路
const v = 4
// const edges = [
//   [1, 2, -1],
//   [2, 3, 1],
//   [3, 1, -1],
//   [3, 4, 1],
// ]
const edges = [
  [3, 1, -1],
  [3, 4, 1],
  [2, 3, 1],
  [1, 2, -1],
]
// const n = edges.length
// const minDist = new Array(v + 1).fill(Number.MAX_SAFE_INTEGER)
// minDist[1] = 0
// let minDistCopy
// for (let i = 0; i < n - 1; i++) {
//   minDistCopy = minDist.slice()
//   for (let j = 0; j < n; j++) {
//     const [s, t, w] = edges[j]
//     if (minDistCopy[s] + w < minDist[t]) {
//       minDist[t] = minDist[s] + w
//     }
//   }
//   console.log(minDist)
// } 

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