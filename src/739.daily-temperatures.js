/*
 * @lc app=leetcode.cn id=739 lang=javascript
 * @lcpr version=30204
 *
 * [739] 每日温度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  // review
  const n = temperatures.length
  const answer = new Array(n).fill(0)
  const stack = [0]
  for (let i = 1; i < n; i++) {
    const top = stack[stack.length - 1]
    if (temperatures[top] >= temperatures[i]) {
      stack.push(i)
    } else {
      while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const top = stack.pop()
        answer[top] = i - top
      }
      stack.push(i)
    } 
  }
  return answer
};
// @lc code=end



/*
// @lcpr case=start
// [73,74,75,71,69,72,76,73]\n
// @lcpr case=end

// @lcpr case=start
// [30,40,50,60]\n
// @lcpr case=end

// @lcpr case=start
// [30,60,90]\n
// @lcpr case=end

 */

