/*
 * @lc app=leetcode.cn id=47 lang=javascript
 * @lcpr version=30203
 *
 * [47] 全排列 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = [], n = nums.length, path = []
  nums.sort((a, b) => a - b)
  const used = new Array(n).fill(false)
  backTrack(0)
  return res
  function backTrack() {
    if (path.length === n) {
      res.push([...path])
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
      path.push(nums[i])
      used[i] = true
      backTrack()
      used[i] = false
      path.pop()
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

