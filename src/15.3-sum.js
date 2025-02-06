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
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1, r = nums.length - 1
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      } else {
        res.push([nums[i], nums[l], nums[r]])
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

