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
  function backTrack(used) {
    if (path.length >= nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === false) {
        continue
      }
      if (used[i] === true) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      backTrack(used)
      used[i] = false
      path.pop()
    }
  }
  nums.sort((a, b) => a - b)
  backTrack(nums.map((_) => false))
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

