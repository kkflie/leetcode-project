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
  const map = {}
  for (let i of nums1) {
    for (let j of nums2) {
      map[i + j] = (map[i + j] || 0) + 1
    }
  }
  let count = 0
  for (let i of nums3) {
    for (let j of nums4) {
      const sum = i + j
      if (map[-sum] !== undefined) {
        count +=map[-sum]
      }
    }
  }
  return count
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

