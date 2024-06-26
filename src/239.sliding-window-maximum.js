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
  class MonoQueue {
    queue
    constructor() {
      this.queue = []
    }
    enqueue(value) {
      let back = this.queue[this.queue.length - 1]
      while(back !== undefined && back < value) {
        this.queue.pop()
        back = this.queue[this.queue.length - 1]
      }
      this.queue.push(value)
    }
    dequeue(value) {
      let front = this.front() 
      if (value === front) {
        this.queue.shift()
      }
    }
    front() {
      return this.queue[0]
    }
  }
  let queue = new MonoQueue()
  let i = 0, j = 0
  const res = []
  while (j < k) {
    queue.enqueue(nums[j++])
  }
  res.push(queue.front())
  while(j < nums.length) {
    queue.enqueue(nums[j])
    queue.dequeue(nums[i])
    res.push(queue.front())
    j++
    i++
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

