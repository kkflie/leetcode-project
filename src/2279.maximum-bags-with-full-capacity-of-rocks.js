/*
 * @lc app=leetcode.cn id=2279 lang=javascript
 * @lcpr version=30203
 *
 * [2279] 装满石头的背包的最大数量
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  const arr = []
  for (let i = 0; i < capacity.length; i++) {
    arr[i] = capacity[i] - rocks[i]
  }
  arr.sort((a,b)=> a-b)
  let i = 0
  let j = 0
  while(i < arr.length && additionalRocks > 0) {
      if (additionalRocks >= arr[i]) {
      j++
      }
      additionalRocks -= arr[i]
    i++
  }
  return j
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,4,5]\n[1,2,4,4]\n2\n
// @lcpr case=end

// @lcpr case=start
// [10,2,2]\n[2,2,0]\n100\n
// @lcpr case=end

 */

