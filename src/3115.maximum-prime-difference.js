/*
 * @lc app=leetcode.cn id=3115 lang=javascript
 * @lcpr version=30204
 *
 * [3115] 质数的最大距离
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
  const primeArr = [2,3,5,7,11,13,17,19,23,29,31,37]

  let i = 0, j = nums.length - 1
  while (i < nums.length) {
    if (isPrime(nums[i])) {
      break
    } 
    i++
  }
  while (0 <= j) {
    if (isPrime(nums[j])) {
      break
    } 
    j--
  }
  return j - i
  function isPrime(num) {
    if (num===1)return false
    if (primeArr.every((e) => num === e || num % e)) {
      return true
    }
    return false
  }
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,9,5,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,8,2,8]\n
// @lcpr case=end

 */

