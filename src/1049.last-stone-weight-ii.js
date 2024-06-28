/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 * @lcpr version=30204
 *
 * [1049] 最后一块石头的重量 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const total = stones.reduce((a,b)=>a+b,0)
  const target = Math.ceil(total / 2)
  const dp = new Array(target + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return Math.abs(total - 2 * dp[target])  
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,4,1,8,1]\n
// @lcpr case=end

// @lcpr case=start
// [31,26,33,21,40]\n
// @lcpr case=end

 */

