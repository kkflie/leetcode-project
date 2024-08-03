/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30204
 *
 * [283] 移动零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // review
  const n = nums.length
  let i = 0, j = 0
  while(j < n) {
    if(nums[j] !== 0) {
      nums[i++]=nums[j]
    }
    j++
  }
  while(i < n) {
    nums[i++]=0
  }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

