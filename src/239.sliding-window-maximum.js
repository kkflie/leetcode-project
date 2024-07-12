/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=30204
 *
 * [239] 滑动窗口最大值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // review
  const st = [], n = nums.length, res = []
  for (let i = 0; i < n; i++) {
    if (st.length < 1) {
      st.push(i)
      if (i === k - 1) {
        res.push(nums[st[0]])
      }
      continue
    }
    if (i - k + 1 > st[0]) {
      st.shift()
    }
    while (st.length > 0 && nums[i] > nums[st[st.length - 1]]) {
      st.pop()
    }
    st.push(i)
    if (i >= k -1) {
      res.push(nums[st[0]])
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */

