const { MinHeap } = require('./minHeap')
const { Knight } = require('./knight')

const cases = [
  [5, 2, 5, 4],
  [1, 1, 2, 2],
  [1, 1, 8, 8],
  [1, 1, 8, 7],
  [2, 1, 3, 3],
  [4, 6, 4, 6],
]

const dir = [
  // 东北
  [-2, 1],
  [-1, 2],
  // 东南
  [1, 2],
  [2, 1],
  // 西南
  [2, -1],
  [1, -2],
  // 西北
  [-1, -2],
  [-2, -1],
]
const grid = new Array(1001).fill(undefined)
  .map(() => new Array(1001).fill(0))

for (let i = 0; i < 1; i++) {
  const [x1, y1, x2, y2] = cases[i]
  const s = new Knight(x1, y1)
  const t = new Knight(x2, y2)
  const res = getDistance(s, t)
  console.log('case', i, ' distance: ', res)
}

function getDistance(s, t) {
  const que = [s]
  let next = new Knight()
  while(que.length) {
    const cur = que.unshift()
    for (let i = 0; i < dir.length; i++) {
      const [x, y] = dir[i]
      const nextX = cur.x + x
      const nextY = cur.y + y
      if (!grid[nextX])
    }
  }
}