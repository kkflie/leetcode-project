/*
 * @lc app=leetcode.cn id=225 lang=javascript
 * @lcpr version=30204
 *
 * [225] 用队列实现栈
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MyStack = function() {
  this.stackIn = []
  this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (!this.stackIn.length) {
    [this.stackIn, this.stackOut] = [this.stackOut, this.stackIn]
  }
  while(this.stackIn.length > 1) {
    this.stackOut.push(this.stackIn.shift())
  }
  return this.stackIn.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const x = this.pop()
  this.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.stackIn.length && !this.stackOut.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MyStack", "push", "push", "top", "pop", "empty"][[], [1], [2], [], [], []]\n
// @lcpr case=end

 */

