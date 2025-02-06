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
  const len = nums.length
  class MStack {
    constructor() {
      this.st = []
    }

    push(x) {
      while (x > this.st[this.st.length - 1]) {
        this.st.pop()
      }
      this.st.push(x)
    }

    pop(x) {
      if (this.st[0] === x) {
        this.st.shift()
      }
    }

    get(i) {
      return this.st[i]
    }
  }
  const st = new MStack()
  let res = []
  for (let i = 0; i < len; i++) {
    if (i >= k) {
      st.pop(nums[i - k])
    }
    st.push(nums[i])
    // console.log(st.st)
    if (i >= k - 1) {
      res.push(st.get(0))
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

