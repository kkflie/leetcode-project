/*
 * @lc app=leetcode.cn id=561 lang=javascript
 * @lcpr version=30202
 *
 * [561] 数组拆分
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a,b)=>a-b)
  let k = 0
  let res = 0
  while(k < nums.length) {
    res += nums[k]
    k += 2
  }
  return res
};
module.exports = arrayPairSum
// @lc code=end



/*
// @lcpr case=start
// [1,4,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [6,2,6,5,1,2]\n
// @lcpr case=end

 */

