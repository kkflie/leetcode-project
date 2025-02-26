/*
 * @lc app=leetcode.cn id=1472 lang=javascript
 * @lcpr version=30204
 *
 * [1472] 设计浏览器历史记录
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.arr = [homepage] 
  this.idx = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.arr.length = this.idx++ + 1 
  this.arr.push(url)
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.idx -= steps
  if (this.idx < 0) this.idx = 0
  return this.arr[this.idx]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.idx += steps
  if (this.idx >= this.arr.length) this.idx = this.arr.length - 1
  return this.arr[this.idx]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end



/*
// @lcpr case=start
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"][["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]\n
// @lcpr case=end

 */

