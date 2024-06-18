/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30203
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // review
  let temp
  let cur = head
  let pre = null
  while (cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

