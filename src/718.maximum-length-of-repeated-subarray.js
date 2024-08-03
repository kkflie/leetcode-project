/*
 * @lc app=leetcode.cn id=718 lang=javascript
 * @lcpr version=30204
 *
 * [718] 最长重复子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  // review
  let max = 0
  const len1 = nums1.length
  const len2 = nums2.length
  const dp = new Array(len2 + 1).fill(0)
  for (let i = 1; i <= len1; i++) {
    for (let j = len2; j >= 1; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      max = Math.max(max, dp[j])
    }
  }
  return max
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,2,1]\n[3,2,1,4,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0,0,0]\n[0,0,0,0,0]\n
// @lcpr case=end

 */

