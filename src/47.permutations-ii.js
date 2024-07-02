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
  const len = nums.length
  nums.sort((a, b) => a - b)
  backTrack(nums.map(()=>0))
  function backTrack(used) {
    if (path.length === len) {
      res.push([...path])
      return
    }
    for (let i = 0; i < len; i++) {
      if ((i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
        continue
      }
      if (used[i]) continue
      path.push(nums[i])
      used[i] = 1
      backTrack(used)
      used[i] = 0
      path.pop()
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

