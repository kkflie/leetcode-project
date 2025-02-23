/*
 * @lc app=leetcode.cn id=2944 lang=javascript
 * @lcpr version=30204
 *
 * [2944] 购买水果需要的最少金币数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
  const memo = new Map();

  const dp = (index) => {
    if (2 * index + 2 >= prices.length) {
      return prices[index];
    }
    if (!memo.has(index)) {
      let minValue = Infinity;
      for (let i = index + 1; i <= 2 * index + 2; i++) {
        minValue = Math.min(minValue, dp(i));
        console.log('min', minValue)
      }
      const val = prices[index] + minValue
      console.log('val', index, val)
      memo.set(index, val);
    }
    return memo.get(index);
  };

  return dp(0);
};
// @lc code=end



/*
// @lcpr case=start
// [3,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,10,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [26,18,6,12,49,7,45,45]\n
// @lcpr case=end

 */

