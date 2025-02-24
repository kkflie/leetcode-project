export function minMaxSums(nums: number[], k: number): number {
  const m = 1000000007
  const n = nums.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  let sum = 0 
  for (let i = 0; i < n; i++) {
    dp[i + 1] = dp[i] * (i + 1)
    sum = (sum + nums[i]) % m
  }
  // console.log(dp)
  // console.log(sum)
  let res = 0
  for (let j = 1; j <= k; j++) {
    if (j === n) {
      if (j !== 1) {
        res = (res + sum) % m
      } else {
        res = (res + 2 * sum) % m
      }
    } else {
      res = (res + 2 * sum) % m
    }
  }
  return res
}