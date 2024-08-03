/*
 * @lc app=leetcode.cn id=55 lang=javascript
 * @lcpr version=30204
 *
 * [55] 跳跃游戏
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const n = nums.length
  let right = 0
  for (let i = 0; i <= right; i++) {
    right = Math.max(right, i + nums[i])
    if (right >= n - 1) return true
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */

