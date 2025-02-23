var maxDistance = function(s, k) {
  const dirs = new Map([
    ['N', [0, 1]],
    ['S', [0, -1]],
    ['W', [-1, 0]],
    ['E', [1, 0]],
  ])
  const oppositeDir = new Map([
    ['N', 'S'],
    ['S', 'N'],
    ['W', 'E'],
    ['E', 'W'],
  ])
  const oriK = k
  let res = 0
  let i = 0
  let maxRes = 0
  const n = s.length
  let start = [0, 0]
  const oriS = s
  s = s.split('')
  while (i < n) {
    const dir = s[i]
    const move = dirs.get(dir)
    const dest = [start[0] + move[0], start[1] + move[1]]
    const value = Math.abs(dest[0]) + Math.abs(dest[1])
    if (value > res) {
      res = value
      start = dest
      maxRes = res
    } else if (k) {
      k--
      s[i] = oppositeDir.get(dir)
      continue
    } else {
      start = dest
      res = value
    }
    i++
  }
  s = oriS.split('').reverse()
  i = 0
  res = 0
  start = [0, 0]
  k = oriK
  // while (i < n) {
  //   const dir = s[i]
  //   const move = dirs.get(dir)
  //   const dest = [start[0] + move[0], start[1] + move[1]]
  //   const value = Math.abs(dest[0]) + Math.abs(dest[1])
  //   if (value > res) {
  //     res = value
  //     start = dest
  //     maxRes = res
  //   } else if (k) {
  //     k--
  //     s[i] = oppositeDir.get(dir)
  //     continue
  //   } else {
  //     start = dest
  //     res = value
  //   }
  //   i++
  // }
  return maxRes
};
const s = 'EWWE', k = 1
// const s = 'NWSE', k = 1
// const s = 'NSES', k = 1
// const s = 'NSWWEW', k = 3
const res = maxDistance(s, k)
console.log(res)