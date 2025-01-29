/*
 * @lc app=leetcode.cn id=3065 lang=javascript
 * @lcpr version=30204
 *
 * [3065] 超过阈值的最少操作数 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let res = 0
  for (const num of nums) {
    if (num < k) res++
  } 
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,11,10,1,3]\n10\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,4,9]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,4,9]\n9\n
// @lcpr case=end

 */

