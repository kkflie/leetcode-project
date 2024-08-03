/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 * @lcpr version=30204
 *
 * [1365] 有多少小于当前数字的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const map = {}
  nums.forEach((e) => {
    if (!map[e]) {
      map[e] = 0
    }
    map[e]++
  })
  let count = 0
  Object.entries(map).forEach((arr) => {
    map[arr[0]] = count
    count += arr[1]
  })
  return nums.map((e) => map[e])
};
// @lc code=end



/*
// @lcpr case=start
// [8,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,4,8]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7]\n
// @lcpr case=end

 */

