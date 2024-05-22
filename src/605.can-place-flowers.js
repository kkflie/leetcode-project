/*
 * @lc app=leetcode.cn id=605 lang=javascript
 * @lcpr version=30202
 *
 * [605] 种花问题
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) {
    return true
  }
  if (flowerbed.length === 1) {
    return n === 1 && !flowerbed[0]
  }
  if (n > flowerbed.length) {
    return false
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      if (!flowerbed[i] && !flowerbed[i + 1]) {
        flowerbed[i] = 1
        n--
      }
    } else if (i === flowerbed.length - 1) {
      if (!flowerbed[i] && !flowerbed[i - 1]) {
        flowerbed[i] = 1
        n--
      }
    } else if (!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]) {
      flowerbed[i] = 1
      n--
    }
  }

  return n <= 0
};
module.exports = canPlaceFlowers
// @lc code=end



/*
// @lcpr case=start
// [1,0,0,0,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,0,1]\n2\n
// @lcpr case=end

 */

