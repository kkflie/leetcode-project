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
    this.st1 = []
    this.st2 = []
};

MyQueue.prototype.log = function(fnName) {
  // console.log(fnName, this)
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (!this.st1.length) {
      this.st1.push(x)
    } else {
      this.st2.push(x)
    }
    this.log('push')
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let top = null
  if (this.st1.length) {
    top = this.st1.pop()
    if (this.st2.length) {
      while (this.st2.length) {
        this.st1.push(this.st2.pop())
      }
      const newTop = this.st1.pop()
      while (this.st1.length) {
        this.st2.push(this.st1.pop())
      }
      this.st1.push(newTop)
      // [this.st1, this.st2] = [this.st2, this.st1]
    }
  } 
  this.log('pop')
  return top
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let top = null
  if (this.st1.length) {
    top = this.st1[0]
  } 
  this.log('peek')
  return top
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.st1.length === 0
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

