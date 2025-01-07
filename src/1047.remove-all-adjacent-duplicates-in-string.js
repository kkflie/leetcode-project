/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 * @lcpr version=30204
 *
 * [1047] 删除字符串中的所有相邻重复项
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const st = []
  for (let i of s) {
    if (st[st.length - 1] !== i) {
      st.push(i)
    } else {
      st.pop()
    }
  }
  return st.join('')
};
// @lc code=end



/*
// @lcpr case=start
// "abbaca"\n
// @lcpr case=end

 */

