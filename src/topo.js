// 拓扑-排序

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
]

const map = {}

for (let i = 0; i < edges.length; i++) {
  if (!map[edges[i][0]]) {
    map[edges[i][0]] = []
  }
  map[edges[i][0]].push(edges[i][1])
}

// console.log(map)

const n = 5 // 节点数为5

const inDegree = new Array(n).fill(0)

for (let i = 0; i < edges.length; i++) {
  inDegree[edges[i][1]]++
}
// console.log('edges', inDegree)

const que = []

for (let i = 0; i < inDegree.length; i++) {
  if (inDegree[i] === 0) que.push(i)
}

while(que.length) {
  const node = que.pop()
  console.log(node)
  const nodeList = map[node]
  if (!nodeList) continue
  for (let i = 0; i < nodeList.length; i++) {
    const node2 = nodeList[i]
    inDegree[node2]--
    if (inDegree[node2] === 0) {
      que.push(node2)
    }
  }
}