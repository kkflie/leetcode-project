export function subarraySum(nums: number[]): number {
  const n = nums.length
  const dp = new Array(n).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < n; i++) {
    dp[i] += dp[i - 1] + nums[i]
  }

  // console.log(dp)
  let res = 0
  for (let i = 0; i < n; i++) {
    const start = Math.max(0, i - nums[i])
    let value = 0
    if (start === 0) {
      value = dp[i]
    } else {
      value = dp[i] - dp[start - 1]
    }
    res += value
  }
  return res
}