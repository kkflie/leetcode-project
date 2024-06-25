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
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop()
      stack.pop()
    }
    stack.push(s[i])
  }
  if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
    stack.pop()
    stack.pop()
  }
  return stack.join('')
};
// @lc code=end



/*
// @lcpr case=start
// "abbaca"\n
// @lcpr case=end

 */

