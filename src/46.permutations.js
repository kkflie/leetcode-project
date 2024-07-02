/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30203
 *
 * [46] 全排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const path = []
  const len = nums.length
  function backTrack(arr) {
    if (path.length === len) {
      res.push([...path])
      return
    }
    for (let i = 0; i < len; i++) {
      if (arr[i]) {
        continue
      }
      path.push(nums[i])
      arr[i] = true
      backTrack(arr)
      arr[i] = false
      path.pop()
    }
  }
  backTrack(nums.map(() => false))
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

