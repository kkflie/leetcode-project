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
  if (!head) return head
  if (!head.next) return head
  let p = head, q = head.next, newHead = new ListNode(0, head), pre = newHead
  while (p && p.next) {
    p.next = q.next
    q.next = p
    pre.next = q
    pre = p
    // console.log('pre', pre)
    p = pre.next
    if (p) {
      q = p.next
    }
    // console.log('p', p)
    // console.log('q', q)
  }
  return newHead.next
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

