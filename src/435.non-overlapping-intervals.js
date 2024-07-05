/*
 * @lc app=leetcode.cn id=435 lang=javascript
 * @lcpr version=30204
 *
 * [435] 无重叠区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let count = 0
  for(let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      count++
      intervals[i][1] = Math.min(intervals[i - 1][1], intervals[i][1])
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2],[2,3],[3,4],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// [ [1,2], [1,2], [1,2] ]\n
// @lcpr case=end

// @lcpr case=start
// [ [1,2], [2,3] ]\n
// @lcpr case=end

 */

