/*
 * @lc app=leetcode.cn id=LCP 61 lang=javascript
 * @lcpr version=30204
 *
 * [LCP 61] 气温变化趋势
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function(temperatureA, temperatureB) {
  const len = temperatureA.length
  let max = -1
  let num = 0
  for (let i = 1; i < len; i++) {
    if (isSameTrend(i)) {
      num++
    } else {
      max = max < num ? num : max
      num = 0
    }
  } 
  return max < num ? num : max
  function isSameTrend(i) {
    const trendA = temperatureA[i - 1] - temperatureA[i]
    const trendB = temperatureB[i - 1] - temperatureB[i]
    if (trendA === 0 && trendB === 0) return true
    if (trendA < 0 && trendB < 0) return true
    if (trendA > 0 && trendB > 0) return true
    return false
  }
};
// @lc code=end



/*
// @lcpr case=start
// [21,18,18,18\n[34,32,16,16,17]`>\n
// @lcpr case=end

// @lcpr case=start
// [5,10,16,-6,15,11\n[16,22,23,23,25,3,-16]`>\n
// @lcpr case=end

 */

