/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30203
 *
 * [46] 全排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const path = []
  function backTrack(used) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      backTrack(used)
      path.pop()
      used[i] = false
    }
  }
  backTrack([false, false, false])
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

