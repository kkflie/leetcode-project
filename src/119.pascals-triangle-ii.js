/*
 * @lc app=leetcode.cn id=119 lang=javascript
 * @lcpr version=30204
 *
 * [119] 杨辉三角 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const dp = [1] 
  for (let i = 1; i <= rowIndex; i++) {
    // console.log('tmp')
    for (let j = i - 1; j >= 1; j--) {
      dp[j] = dp[j - 1] + dp[j]
      // console.log('loop')
    }
    dp[i] = 1
    // console.log(dp.toString())
  }
  return dp
};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

