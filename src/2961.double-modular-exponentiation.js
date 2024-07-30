/*
 * @lc app=leetcode.cn id=2961 lang=javascript
 * @lcpr version=30204
 *
 * [2961] 双模幂运算
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function(variables, target) {
  // review
  const res = []
  variables.forEach((e, i) => {
    const res2 = powMod(powMod(e[0], e[1], 10), e[2], e[3])
    if (res2 === target) {
      res.push(i)
    }
  })
  return res

  function powMod(x, y, mod) {
    let res = 1
    while (y > 0) {
      if (y & 1 === 1) {
        res = (res * x) % mod
      } 
      x = (x * x) % mod
      y = y >> 1
    }
    return res
  }
};
// @lc code=end



/*
// @lcpr case=start
// [[2,3,3,10],[3,3,3,1],[6,1,1,4]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[39,3,1000,1000]]\n17\n
// @lcpr case=end

 */

