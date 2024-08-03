/*
 * @lc app=leetcode.cn id=941 lang=javascript
 * @lcpr version=30204
 *
 * [941] 有效的山脉数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  const n = arr.length
  let i = 0, j = n - 1
  while(i < n && arr[i] < arr[i + 1]) {
    i++
  }
  while(j > 0 && arr[j] < arr[j - 1]) {
    j--
  }
  return i === j && j < n - 1 && i > 0
};
// @lc code=end



/*
// @lcpr case=start
// [2,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,5,5]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,2,1]\n
// @lcpr case=end

 */

