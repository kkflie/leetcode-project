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
    this.q1= []
    this.q2= []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (!this.q1.length) {
      [this.q1, this.q2] = [this.q2, this.q1]
    }
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift())
    }
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const top = this.pop()
    this.q1.push(top)
    return top
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.q1.length && !this.q2.length
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

