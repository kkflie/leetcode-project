function backup0(arr) {
  const n = arr.reduce((pre, cur) => {
    return pre + cur[0]
  }, 0)
  const m = arr.length
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const [w, p] = arr[i - 1]
      if (j < w)continue
      dp[i][j] = Math.max(dp[i - 1][j - w] + p, dp[i][j - 1])
    }
  }
  console.log('dp', dp)
  return dp[m][n]
}

function backup(arr) {
  const n = arr.reduce((pre, cur) => {
    return pre + cur[0]
  }, 0)
  const m = arr.length
  const dp = new Array(n + 1).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = n; j >= arr[i][0]; j--) {
      const [w, p] = arr[i]
      dp[j] = Math.max(dp[j - w] + p, dp[j])
    }
  }
  console.log('dp', dp)
  return dp[n]
}

const arr = [
  [1, 15],
  [3, 20],
  [4, 30],
]
const res = backup(arr)
console.log(res)