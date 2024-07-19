/*
 * @lc app=leetcode.cn id=3096 lang=javascript
 * @lcpr version=30204
 *
 * [3096] 得到更多分数的最少关卡数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function(possible) {
  const n = possible.length
  for (let i = 0; i < n; i++) {
    if (possible[i] === 0) {
      possible[i] = -1
    }
  }

  const total = possible.reduce((a, b) => a + b)
  let sum = 0
  for (let i = 0; i < n - 1; i++) {
    sum += possible[i]
    if (sum > total - sum) {
      return i + 1
    }
  }
  return -1
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0]\n
// @lcpr case=end

 */

