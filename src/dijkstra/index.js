const { MinHeap } = require('./minHeap')
const { Pair } = require('./pair')

const v = 7 // 7个节点

const edges = [
  [1, 3, 4],
  [1, 2, 1],
  [2, 3, 2],
  [2, 4, 5],
  [3, 4, 2],
  [4, 5, 3],
  [2, 6, 4],
  [5, 7, 4],
  [6, 7, 9],
] 

const grid = new Array(v + 1).fill(undefined).map(() => new Array(0))

edges.forEach(([i, j, w]) => {
  grid[i].push(new Pair(j, w))
})

const minDist = new Array(v + 1).fill(Number.MAX_SAFE_INTEGER)
minDist[1] = 0
const heap = new MinHeap()
const inTree = new Array(v + 1).fill(false)

heap.push(new Pair(1, 0))

// console.log(heap)
while(heap.length) {
  const node = heap.pop()
  if (inTree[node.to]) continue
  inTree[node.to] = true
  const adjList = grid[node.to]
  for (let i = 0; i < adjList.length; i++) {
    const node2 = adjList[i]
    const dis = minDist[node.to] + node2.val
    if (!inTree[node2.to] && dis < minDist[node2.to]) {
      minDist[node2.to] = dis
      heap.push(node2)
    }
  }
}
console.log('minDist', minDist)
return minDist[minDist.length - 1]