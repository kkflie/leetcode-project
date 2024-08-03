/*
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=30204
 *
 * [6] Z 字形变换
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // review
  if (numRows < 2) return s
  const n = s.length
  const res = new Array(numRows).fill(undefined).map(() => new Array())
  let i = 0, j = 0, k = 1, flag = -1
  while (j < n) {
    res[i].push(s[j++])
    if (i === 0 || i === numRows - 1) {
      flag = -flag
    }
    i += flag 
  }
  // console.log(res)
  return res.map((e) => e.join('')).join('')
};
// @lc code=end



/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */

