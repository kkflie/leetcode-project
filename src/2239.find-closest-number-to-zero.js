/*
 * @lc app=leetcode.cn id=2239 lang=javascript
 * @lcpr version=30204
 *
 * [2239] 找到最接近 0 的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let diff = 100001
  for (let i = 0; i < nums.length; i++) {
    const curAbs = Math.abs(nums[i])
    const absDiff = Math.abs(diff)
    if (curAbs < absDiff || curAbs === absDiff && nums[i] > diff) {
      diff = nums[i]
    }
  }
  return diff
};
// @lc code=end



/*
// @lcpr case=start
// [-4,-2,1,4,8]\n
// @lcpr case=end

// @lcpr case=start
// [2,-1,1]\n
// @lcpr case=end

 */

