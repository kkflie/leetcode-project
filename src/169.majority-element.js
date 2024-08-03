/*
 * @lc app=leetcode.cn id=169 lang=javascript
 * @lcpr version=30204
 *
 * [169] 多数元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const n = nums.length
  const map = {}
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (map[num] === undefined) {
      map[num] = 0
    }
    map[num]++
    if (map[num] > n >> 1) {
      return num
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

