/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30204
 *
 * [234] 回文链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let node = head
  let len = 0
  const arr = []
  while(node) {
    arr.push(node.val)
    node=node.next
    len++
  }
  let i = 0, j = len - 1
  while(i < j) {
    if (arr[i] !== arr[j]) {
      break
    } else {
      i++
      j--
    }
  }
  return i === j || i - 1 === j
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

