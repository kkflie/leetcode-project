/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30204
 *
 * [88] 合并两个有序数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let j = n - 1, k = m - 1
  for (let i = m + n - 1; i >= 0 && j >= 0; i--) {
    if (nums1[k] === undefined || nums1[k] < nums2[j]) {
      nums1[i] = nums2[j--]
    } else {
      nums1[i] = nums1[k--]
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */

