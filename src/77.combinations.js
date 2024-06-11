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
  let res = []
  let path = []

  function backTrack(n, k, startIdx) {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let i = startIdx; i <= n; i++) {
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

