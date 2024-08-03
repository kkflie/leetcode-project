/*
 * @lc app=leetcode.cn id=219 lang=javascript
 * @lcpr version=30204
 *
 * [219] 存在重复元素 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = {}
  nums.forEach((e, i) => {
    if (!map[e]) {
      map[e] = []
    }
    map[e].push(i)
  })
  Object.entries(map).forEach((e) => {
    if (e[1].length < 2) {
      delete map[e[0]]
    }
  })
  const values = Object.values(map)
  for (let arr of values) {
    let l = 0, r = l + 1
    while (r < arr.length) {
      if (arr[r]- arr[l] <= k) {
        return true
      }
      l++
      r = l + 1
    }
  }
  return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */

