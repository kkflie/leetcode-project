/*
 * @lc app=leetcode.cn id=12 lang=javascript
 * @lcpr version=30204
 *
 * [12] 整数转罗马数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const dic = [
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ].reverse()
  const res = []
  for (const [value, symbol] of dic) {
    while (num >= value) {
      num -= value
      res.push(symbol)
    }
    if (num === 0) {
      break
    }
  }
  return res.join('')
};
// @lc code=end



/*
// @lcpr case=start
// 3749\n
// @lcpr case=end

// @lcpr case=start
// 58\n
// @lcpr case=end

// @lcpr case=start
// 1994\n
// @lcpr case=end

 */

