/*
 * @lc app=leetcode.cn id=219 lang=javascript
 * @lcpr version=30204
 *
 * [219] 存在重复元素 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const n = nums.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (map.has(num)) {
      const preIdx = map.get(num)
      if (i - preIdx <= k) return true
    }
    map.set(num, i)
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */
p
