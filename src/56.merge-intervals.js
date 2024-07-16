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
  // review
  intervals.sort((a, b) => a[0] - b[0])
  const n = intervals.length
  const res = [intervals[0]]
  for (let i = 1; i < n; i++) {
    if (res[res.length - 1][1] >= intervals[i][0]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    } else {
      res.push(intervals[i])
    }
  }
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

