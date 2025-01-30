/*
 * @lc app=leetcode.cn id=350 lang=javascript
 * @lcpr version=30204
 *
 * [350] 两个数组的交集 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map() 
  nums1.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1)
  })
  const res = []
  nums2.forEach((e) => {
    if (map.has(e)) {
      res.push(e)
      const count = map.get(e) - 1
      if (count === 0) {
        map.delete(e)
      } else {
        map.set(e, count)
      }
    }
  })
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n[2,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,5]\n[9,4,9,8,4]\n
// @lcpr case=end

 */

