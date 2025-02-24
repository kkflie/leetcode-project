/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * @lcpr version=
 *
 * [155] 最小栈
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MinStack = function() {
  this.arr = []
  this.min = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.arr.push(val)
  this.min.push(Math.min(this.min[this.min.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop()
  this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.min[this.min.length - 1] 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"][[],[-2],[0],[-3],[],[],[],[]]\n
// @lcpr case=end

 */

