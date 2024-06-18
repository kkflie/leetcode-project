/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30203
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p = head
  let q = head
  let index = 0
  while (q) {
    q = q.next
    if (index++ >n) {
      p = p.next
    }
  }
  if (index <= n) {
    return head.next
  }
  const temp = p.next
  if (temp) {
    p.next = temp.next
  }else {
    return null
  }
  return head
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

