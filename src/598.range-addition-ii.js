/*
 * @lc app=leetcode.cn id=598 lang=javascript
 * @lcpr version=30204
 *
 * [598] 区间加法 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let minM = m, minN = n
  for (const op of ops) {
    minM = Math.min(minM, op[0])
    minN = Math.min(minN, op[1])
  } 
  return minM * minN
};
// @lc code=end



/*
// @lcpr case=start
// 3\n[[2,2],[3,3]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n[[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n[]\n
// @lcpr case=end

 */

