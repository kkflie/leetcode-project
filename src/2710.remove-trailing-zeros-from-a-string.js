/*
 * @lc app=leetcode.cn id=2710 lang=javascript
 * @lcpr version=30204
 *
 * [2710] 移除字符串中的尾随零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  let i = num.length - 1
  for (; i >= 0; i--) {
    if (num[i] !== '0') break
  }
  return num.substring(0, i + 1)
};
// @lc code=end



/*
// @lcpr case=start
// "51230100"\n
// @lcpr case=end

// @lcpr case=start
// "123"\n
// @lcpr case=end

 */

