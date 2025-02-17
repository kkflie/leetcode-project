/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 * @lcpr version=30204
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const n = arr.length
  const target = n / 4
  let slow = 0
  for (let i = 1; i < n; i++) {
    if ((arr[i] !== arr[slow]) || i === n - 1) {
      if ((i - slow) > target) break
      slow = i
    }
  }
  return arr[slow]
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,6,6,6,6,7,10]\n
// @lcpr case=end

 */

