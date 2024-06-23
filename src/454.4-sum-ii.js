/*
 * @lc app=leetcode.cn id=454 lang=javascript
 * @lcpr version=30204
 *
 * [454] 四数相加 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const dic = new Map
  let res = 0
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2
      dic.set(sum, (dic.get(sum) || 0) + 1)
    }
  }
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4
      res += dic.get(0 - sum) || 0
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2]\n[-2,-1]\n[-1,2]\n[0,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n[0]\n[0]\n
// @lcpr case=end

 */

