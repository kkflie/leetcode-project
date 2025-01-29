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
  const n = prices.length;
    const queue = [];
    queue.push([n, 0]);
    console.log('init ', queue)
    for (let i = n - 1; i >= 0; i--) {
      console.log('第', i, '次循环')
      while (queue[queue.length - 1][0] > 2 * (i + 1)) {
          queue.pop();
          console.log('queue ', queue)
      }
      let cur = queue[queue.length - 1][1] + prices[i];
      while (queue[0][1] >= cur) {
          queue.shift();
          console.log('shift ', queue)
      }
      queue.unshift([i, cur]);
      console.log('unshift ', queue)
    }
    return queue[0][1];
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

