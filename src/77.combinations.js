/*
 * @lc app=leetcode.cn id=77 lang=javascript
 * @lcpr version=30203
 *
 * [77] 组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []
  const path = []
  function backTrack(n, k, start) {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let i = start; i <= n + 1 - k + path.length; i++) {
      path.push(i)
      backTrack(n, k, i + 1)
      path.pop()
    }
  }
  backTrack(n, k, 1)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */

