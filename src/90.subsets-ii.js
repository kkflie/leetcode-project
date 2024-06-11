/*
 * @lc app=leetcode.cn id=90 lang=javascript
 * @lcpr version=30203
 *
 * [90] 子集 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = []
  const used = new Array(nums.length).fill(false)
  let path = []
  const end = nums.length
  function backTrack(start) {
    res.push([...path])
    for (let i = start; i < end; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue
      }
      const num = nums[i]
      path.push(num)
      used[i] = true
      backTrack(i + 1)
      used[i] = false
      path.pop()
    }
  }
  nums.sort((a, b) => a - b)
  backTrack(0)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

