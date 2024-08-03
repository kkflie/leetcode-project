/*
 * @lc app=leetcode.cn id=135 lang=javascript
 * @lcpr version=30204
 *
 * [135] 分发糖果
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  // reviews
  const n = ratings.length
  const arr = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      if (arr[i + 1]  + 1> arr[i]) {
        arr[i] = arr[i + 1] + 1
      }
    }
  }
  // console.log(arr)
  return arr.reduce((a, b) => a + b)
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

 */

