/*
 * @lc app=leetcode.cn id=274 lang=javascript
 * @lcpr version=30204
 *
 * [274] H 指数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a,b)=>a-b)
  const n = citations.length
  let h = 0
  let i = n - 1
  while (i >= 0 && citations[i--] > h) {
    h++
  }
  return h 
};
// @lc code=end



/*
// @lcpr case=start
// [3,0,6,1,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,1]\n
// @lcpr case=end

 */

