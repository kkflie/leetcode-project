/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let cur = head
  const dummyHead = { next : head }
  let i = 1
  let preLeft = dummyHead, afterRight, pre = dummyHead
  while (cur) {
    if (i > right) break
    if (i < left) {
      preLeft = cur
    }
    if (i === right) {
      afterRight = cur.next
    }
    if (left < i && i <= right) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
      i++
      continue
    }
    if (i <= left) {
      pre = cur
    }
    cur = cur.next
    i++
  }
  const next = preLeft.next
  preLeft.next = pre
  next.next = afterRight

  return dummyHead.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */


