/*
 * @lc app=leetcode.cn id=45 lang=javascript
 * @lcpr version=30204
 *
 * [45] 跳跃游戏 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // review
  const n = nums.length
  let curDis = 0
  let count = 0
  let nextDis = 0
  for (let i = 0; i < n - 1; i++) {
    nextDis = Math.max(nextDis, i + nums[i])
    if (i === curDis) {
      curDis = nextDis
      count++
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */

