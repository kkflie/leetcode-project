/*
 * @lc app=leetcode.cn id=228 lang=javascript
 * @lcpr version=30204
 *
 * [228] 汇总区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length < 2) return nums.map((e) => e + '')
  let ansL = nums[0]
  const res = []
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) {
      pushRes(ansL, nums[i - 1])
      ansL = nums[i]
    }
  }
    pushRes(ansL, nums[nums.length - 1])
  return res
  function pushRes(start, end) {
    if (start === end) {
      res.push(start + '')
    } else {
      res.push(`${start}->${end}`)
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,2,4,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,4,6,8,9]\n
// @lcpr case=end

 */

