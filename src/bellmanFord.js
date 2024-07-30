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
for (let i = 0; i < n -1; i++) {
  for (let j = 0; j < n; j++) {
    const [s, t, w] = edges[j]
    if (minDist[s] + w < minDist[t]) {
      minDist[t] = minDist[s] + w
    }
  }
} 
console.log(minDist)