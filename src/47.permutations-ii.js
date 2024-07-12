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
  const res = []
  const path = []
  const n = nums.length
  const used = new Array(n).fill(false)
  nums.sort((a, b) => a - b)
  backTrack(used)
  function backTrack(used) {
    if (path.length === n) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i] ||
        (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])
      ) {
        continue
      }
      used[i] = true
      path.push(nums[i])
      backTrack(used)
      path.pop()
      used[i] = false
    }
  }
  return res
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

