/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 * @lcpr version=30204
 *
 * [1221] 分割平衡字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  const n = s.length 
  let count = 0
  let rCount = 0
  let lCount = 0
  for (let i = 0; i < n; i++) {
    const c = s[i]
    if (c === 'R') {
      rCount++
    } else {
      lCount++
    }
    if (lCount === rCount) {
      count++
      lCount = 0
      rCount = 0
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// "RLRRLLRLRL"\n
// @lcpr case=end

// @lcpr case=start
// "RLRRRLLRLL"\n
// @lcpr case=end

// @lcpr case=start
// "LLLLRRRR"\n
// @lcpr case=end

 */

