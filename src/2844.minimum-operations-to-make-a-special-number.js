/*
 * @lc app=leetcode.cn id=2844 lang=javascript
 * @lcpr version=30204
 *
 * [2844] 生成特殊数字的最少操作
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
  let find0 = false, find5 = false
  const n = num.length
  for (let i = n - 1; i >= 0; i--) {
    if ((find0) && (num[i] === '0' || num[i] === '5')) {
      console.log(i, i - 2)
      return i - 2
    }
    if (find5 && (num[i] === '2' || num[i] === '7')) {
      return i - 2
    }
    if (num[i] === '0') {
      find0 = true
    }
    if (num[i] === '5') {
      find5 = true
    }
  }
  return n
};
// @lc code=end



/*
// @lcpr case=start
// "2245047"\n
// @lcpr case=end

// @lcpr case=start
// "2908305"\n
// @lcpr case=end

// @lcpr case=start
// "10"\n
// @lcpr case=end

 */

