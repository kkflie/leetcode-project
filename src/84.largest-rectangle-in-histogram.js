/*
 * @lc app=leetcode.cn id=84 lang=javascript
 * @lcpr version=30204
 *
 * [84] 柱状图中最大的矩形
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.unshift(0)
  heights.push(0)
  const st = [0]
  let res = 0
  for (let i = 0; i < heights.length; i++) {
    while (st.length && heights[i] < heights[st[st.length -1]]) {
      const mid = st.pop()
      if (!st.length)break
      const h = heights[mid]
      const w = i - st[st.length - 1] - 1
      res = Math.max(res, h * w)
    }
    st.push(i)
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,1,5,6,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,4]\n
// @lcpr case=end

 */

