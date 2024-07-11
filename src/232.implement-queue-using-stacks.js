/*
 * @lc app=leetcode.cn id=232 lang=javascript
 * @lcpr version=30204
 *
 * [232] 用栈实现队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MyQueue = function() {
  this.stackIn = []
  this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stackOut.length) {
    return this.stackOut.pop()
  }
  while(this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop())
  }
  return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const x = this.pop()
  this.stackOut.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.stackIn.length  && !this.stackOut.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MyQueue", "push", "push", "peek", "pop", "empty"][[], [1], [2], [], [], []]\n
// @lcpr case=end

 */

