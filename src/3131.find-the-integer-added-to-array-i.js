/*
 * @lc app=leetcode.cn id=3131 lang=javascript
 * @lcpr version=30204
 *
 * [3131] 找出与数组相加的整数 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
  const { max } = Math
  const gap = max(...nums2) - max(...nums1)
  return gap
};
// @lc code=end



/*
// @lcpr case=start
// [2,6,4]\n[9,7,5]\n
// @lcpr case=end

// @lcpr case=start
// [10]\n[5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1]\n[1,1,1,1]\n
// @lcpr case=end

 */

