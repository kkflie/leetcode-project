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
  const n = nums.length
  backTrack(new Array(n).fill(false))
  function backTrack(used) {
    if (path.length === n) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      const num = nums[i]
      path.push(num)
      used[i] = true
      backTrack(used)
      used[i] = false
      path.pop()
    }
  }
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

