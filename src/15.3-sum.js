/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // review
  nums.sort((a, b) => a - b)
  let i = 0
  const len = nums.length
  const res = []
  while (i < len) {
    const num = nums[i]
    if (num > 0) return res
    if (i > 0 && num === nums[i -1]) {
      i++
      continue
    }
    let l = i + 1, r = len - 1
    while (l < r) {
      const sum = num + nums[l] + nums[r]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        res.push([num, nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      }
    }
    i++
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

