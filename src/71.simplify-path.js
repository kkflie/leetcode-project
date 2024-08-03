/*
 * @lc app=leetcode.cn id=71 lang=javascript
 * @lcpr version=30204
 *
 * [71] 简化路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const st = []
  const arr = path.split('/').filter((e) => !!e)
  arr.forEach((e) => {
    if (e !== '..' && e!== '.') {
      st.push(e)
    } else if (e === '..') {
      st.pop()
    }
  })
  return '/' + st.join('/')
};
// @lc code=end



/*
// @lcpr case=start
// "/home/"\n
// @lcpr case=end

// @lcpr case=start
// "/../"\n
// @lcpr case=end

// @lcpr case=start
// "/home//foo/"\n
// @lcpr case=end

// @lcpr case=start
// "/a/./b/../../c/"\n
// @lcpr case=end

 */

