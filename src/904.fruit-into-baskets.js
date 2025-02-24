/*
 * @lc app=leetcode.cn id=904 lang=javascript
 * @lcpr version=30204
 *
 * [904] 水果成篮
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const n = fruits.length, arr = new Array(n).fill(0)
  let typeNum = 0
  let count = maxCount = 0
  let i = 0
  for (let j = 0; j < n; j++) {
    const fruit = fruits[j]
    if (typeNum < 2) {
      if (arr[fruit] === 0) {
        typeNum++
      }
      arr[fruit]++
    } else if (arr[fruit] > 0) {
      arr[fruit]++
    } else {
      arr[fruit]++
      typeNum++
      while(typeNum > 2) {
        const oldFruit = fruits[i++]
        arr[oldFruit]--
        if (arr[oldFruit] === 0) typeNum--
        count--
      } 
    }
    count++
    maxCount = Math.max(maxCount, count)
  }
  return maxCount
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,3,3,1,2,1,1,2,3,3,4]\n
// @lcpr case=end

 */

