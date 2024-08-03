/*
 * @lc app=leetcode.cn id=18 lang=javascript
 * @lcpr version=30204
 *
 * [18] 四数之和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // review
  nums.sort((a,b)=>a-b)
  // console.log(nums)
  const n = nums.length
  // const map = {}
  const res = []
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      const sum1 = nums[i] + nums[j]
      // if (sum1 > target) {
      //   console.log('sum1', sum1, target, i, j, nums[i], nums[j])
      // }
      // if (sum1 > target) return res
      let l = j + 1, r = n - 1
      // console.log('pre', l, r)
      while (l < r) {
        const sum = sum1 + nums[l] + nums[r]
        if (sum < target) {
          l++
        } else if (sum > target) {
          r--
        } else {
          // console.log('idx', i, j, l, r)
          // console.log('path', [nums[i], nums[j], nums[l], nums[r]])
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[++l]) {
            // l++
          }
          while (l < r && nums[r] === nums[--r]) {
            // r--
          }
          // l++
          // r--
        }
      }
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,-1,0,-2,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n8\n
// @lcpr case=end

 */

