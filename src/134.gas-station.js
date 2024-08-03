/*
 * @lc app=leetcode.cn id=134 lang=javascript
 * @lcpr version=30204
 *
 * [134] 加油站
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // review
  const n = gas.length
  let sum = 0, curSum = 0, start = 0
  for (let i = 0; i < n; i++) {
    sum += gas[i] - cost[i]
    curSum += gas[i] - cost[i]
    if (curSum < 0) {
      curSum = 0
      start = i + 1
    }
  } 
  if (sum < 0) return - 1
  return start
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n[3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n[3,4,3]\n
// @lcpr case=end

 */

