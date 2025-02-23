/*
 * @lc app=leetcode.cn id=1561 lang=javascript
 * @lcpr version=30204
 *
 * [1561] 你可以获得的最大硬币数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => b - a > 0 ? 1 : -1) 
  // console.log(piles)
  let res = 0, i = 1, n = 2 * piles.length / 3
  while (i <= n) {
    res += piles[i]
    i+= 2
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,1,2,7,8]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [9,8,7,6,5,1,2,3,4]\n
// @lcpr case=end

 */

