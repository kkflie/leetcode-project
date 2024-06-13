/*
 * @lc app=leetcode.cn id=2813 lang=javascript
 * @lcpr version=30203
 *
 * [2813] 子序列最大优雅度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
  items.sort((a, b) => b[0] - a[0])
  const set = new Set()
  const st = []
  let profit = 0
  let res = 0
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const v = item[0]
    const key = item[1]
    if (i < k) {
      profit += item[0]
      if (!set.has(key)) {
        set.add(key)
      } else {
        st.push(v)
      }
    } else {
      if (st.length > 0 && !set.has(key)) {
        profit += v - st.pop()
        set.add(key)
      }
    }
    res = Math.max(res, profit + set.size * set.size)
  }
  return res
};
module.exports = findMaximumElegance 
// @lc code=end



/*
// @lcpr case=start
// [[3,2],[5,1],[10,1]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[3,1],[3,1],[2,2],[5,3]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1],[3,1]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[2,2],[6,2],[8,2]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[2,2],[8,3],[8,3]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[9,2],[8,2]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[3,3],[2,3],[9,1]]\n2\n
// @lcpr case=end
 */

