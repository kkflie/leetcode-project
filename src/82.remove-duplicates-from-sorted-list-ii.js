/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30204
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  const dummyHead = new ListNode()
  dummyHead.next = head
  let pre = dummyHead
  while(head && head.next) {
    let flag = false
    while(head && head.next && head.next.val === head.val) {
      flag = true
      head = head.next
      continue
    }
    if (flag && head) {
      head = head.next
      // console.log('flag', pre, head)
    }
    if (head && head.next && head.next.val === head.val) continue
    pre.next = head
    pre = head
    if (!head) break
    head = head.next
  }
  return dummyHead.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

