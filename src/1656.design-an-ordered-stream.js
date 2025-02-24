/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 * @lcpr version=30204
 *
 * [1656] 设计有序流
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.arr = new Array(n + 1).fill(undefined) 
  this.ptr = 1
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.arr[idKey] = value 
  const res = []
  for (let i = this.ptr; i < this.arr.length; i++) {
    if (this.arr[i]) {
      res.push(this.arr[i])
      this.ptr++
    } else break
  }
  return res
};


/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end



