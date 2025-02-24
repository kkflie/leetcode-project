/*
 * @lc app=leetcode.cn id=2266 lang=javascript
 * @lcpr version=30204
 *
 * [2266] 统计打字方案数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
  const m = 1000000007
  const dp3 =[1, 1, 2, 4]
  const dp4 =[1, 1, 2, 4]
  const n = pressedKeys.length
  for (let i = 4; i <= n; i++) {
    dp3[i] = (dp3[i - 1] + dp3[i - 2] + dp3[i - 3]) % m
    dp4[i] = (dp4[i - 1] + dp4[i - 2] + dp4[i - 3] + dp4[i - 4]) % m
  }
  // console.log('dp3', dp3)
  // console.log('dp4', dp4)
  let res = BigInt(1), cnt = 1
  for (let i = 1; i < n; i++) {
    if (pressedKeys[i - 1] === pressedKeys[i]) {
      cnt++
    } else {
      if (['7', '9'].includes(pressedKeys[i - 1])) {
        // console.log(4, res, cnt, dp4[cnt])
        res = (res * BigInt(dp4[cnt])) % BigInt(m)
      } else {
        // console.log(3, res, cnt, dp3[cnt])
        res = (res * BigInt(dp3[cnt])) % BigInt(m)
      }
      cnt = 1
    }
  }
  if (['7', '9'].includes(pressedKeys[n - 1])) {
    // console.log(4, res, cnt, dp4[cnt])
    res = (res * BigInt(dp4[cnt])) % BigInt(m)
  } else {
    // console.log(3, res, cnt, dp3[cnt])
    res = (res * BigInt(dp3[cnt])) % BigInt(m)
  }
  return Number(res)
};
// @lc code=end



/*
// @lcpr case=start
// "22233"\n
// @lcpr case=end

// @lcpr case=start
// "222222222222222222222222222222222222"\n
// @lcpr case=end

 */

