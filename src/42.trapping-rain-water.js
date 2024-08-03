/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30204
 *
 * [42] 接雨水
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // review
  const st = [0]
  const n = height.length
  let res = 0
  for (let i = 1; i < n; i++) {
    while (st.length && height[i] > height[st[st.length - 1]]) {
      const mid = st.pop()
      if (!st.length) break
      const midHeight = height[mid]
      const h = Math.min(height[st[st.length - 1]], height[i]) - midHeight
      const w = i - st[st.length - 1] - 1
      res += h * w
    }
    st.push(i)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */

