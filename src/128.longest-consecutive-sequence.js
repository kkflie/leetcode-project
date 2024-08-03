/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * @lcpr version=30204
 *
 * [128] 最长连续序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0
  const map = {}
  nums.forEach((e) => {
    map[e] = e
  })
  const keys = Object.keys(map).map((e) => e - 0).sort((a, b) => a - b)
  let ansL = 0, max = 1
  for (let i = 1; i < keys.length; i++) {
    if (keys[i - 1] + 1 !== keys[i]) {
      max = Math.max(max, i - ansL)
      ansL = i
    }
  }
  return Math.max(max, keys.length - ansL)
};
// @lc code=end



/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

 */

