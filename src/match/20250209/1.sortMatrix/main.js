/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
export var sortMatrix = function(grid) {
  const n = grid.length
  // left
  for (let i = 0; i < n; i++) {
    const arr = []
    for (let j = i, k = 0; j < n; j++, k++) {
      arr.push(grid[j][k])
    }
    // console.log('arr', arr)
    if (isCorrect(arr, 'DESC')) continue
    arr.sort((a, b) => b - a)
    let m = 0
    for (let j = i, k = 0; j < n; j++, k++) {
      grid[j][k] = arr[m++]
    }
  }

  for (let i = 1; i < n; i++) {
    const arr = []
    for (let j = i, k = 0; j < n; j++, k++) {
      arr.push(grid[k][j])
    }
    if (isCorrect(arr)) continue
    arr.sort((a, b) => a - b)
    // console.log('arr', arr)
    let m = 0
    for (let j = i, k = 0; j < n; j++, k++) {
      grid[k][j] = arr[m++]
    }
  }

  return grid
};

export function isCorrect(arr, order = 'ASC') {
  if (arr.length < 2) return true
  const n = arr.length
  if (order === 'ASC') {
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) return false
    }
  } else {
    for (let i = 1; i < n; i++) {
      if (arr[i] > arr[i - 1]) return false
    }
  }
  return true
} 