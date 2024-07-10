/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=30202
 *
 * [27] 移除元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const n = nums.length
  let i = 0, j = n
  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j - 1]
      j--
    } else {
      i++
    }
  }
  return i
};
module.exports = removeElement
// @lc code=end



/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

