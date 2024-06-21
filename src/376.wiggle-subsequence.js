/*
 * @lc app=leetcode.cn id=376 lang=javascript
 * @lcpr version=30204
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length < 2) return nums.length
  let idx1 = 0, idx2 = 0
  let i = 1
  let res = 0
  while (i < nums.length) {
    const n = nums[i - 1] - nums[i]
    if (n === 0) {
      i++
      continue
    }
    if (res === 0) {
      idx1 = i - 1
      idx2 = i
      i++
      res = 2
      continue
    }
    const lastTrend = nums[idx1] - nums[idx2]
    const curTrend = nums[idx2] - nums[i]
    if (lastTrend * curTrend < 0) {
      idx1 = idx2
      res++
    }
    idx2 = i
    i++
  }
  return res === 0 ? 1 : res
};
// @lc code=end



/*
// @lcpr case=start
// [1,7,4,9,2,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,17,5,10,13,15,10,5,16,8]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6,7,8,9]\n
// @lcpr case=end

 */

