/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30204
 *
 * [56] 合并区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  const n = intervals.length
  let left = intervals[0][0], right = intervals[0][1]
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      right = Math.max(intervals[i - 1][1], intervals[i][1])
      intervals[i][1] = right
    } else {
      res.push([left, right])
      left = intervals[i][0]
      right = intervals[i][1]
    }
  }
  res.push([left, right])
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */

