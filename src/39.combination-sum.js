/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30203
 *
 * [39] 组合总和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = []
  const path = []
  backTrack(0, 0)
  function backTrack(sum, start) {
    if (sum === target) {
      res.push([...path])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i]
      if (sum + num > target) {
        continue 
      }
      path.push(num)
      backTrack(sum + num, i)
      path.pop()
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */

