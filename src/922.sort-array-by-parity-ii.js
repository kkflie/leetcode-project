/*
 * @lc app=leetcode.cn id=922 lang=javascript
 * @lcpr version=30204
 *
 * [922] 按奇偶排序数组 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      // 奇数
      if (nums[i] % 2 === 1) {
        let j = i + 1
        for (; j < n; j++) {
          if (j % 2 === 1 && nums[j] % 2 === 0) {
            break
          }
        }
        if (j < n) {
          swap(nums, i, j)
        }
      }
    } else {
      // 偶数
      if (nums[i] % 2 === 0) {
        let j = i + 1
        for (; j < n; j++) {
          if (j % 2 === 0 && nums[j] % 2 === 1) {
            break
          }
        }
        if (j < n) {
          swap(nums, i, j)
        }
      }
    }
  }
  function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  return nums
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,3]\n
// @lcpr case=end

 */

