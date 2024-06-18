/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * @lcpr version=30203
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  let p = head
  let pre = null
  while(p && p.next) {
    const q = p.next
    p.next = q.next
    q.next = p
    if (pre) {
      pre.next = q
    }
    if (p === head) {
      head = q
    }
    pre = p
    p = p.next
  }
  return head
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

