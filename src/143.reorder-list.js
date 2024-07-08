/*
 * @lc app=leetcode.cn id=143 lang=javascript
 * @lcpr version=30204
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let slow = head, fast = head, pre = null
  while(fast) {
    pre = slow
    slow = slow.next
    if (fast.next) {
      fast = fast.next
    }
    if (fast.next) {
      fast = fast.next
    } else {
      break
    }
  }
  // console.log(slow, fast)
  let head2 = reverse(slow)
  pre.next = null
  while (head2) {
    let temp = head2
    head2 = head2.next
    temp.next = head.next
    head.next = temp
    head = temp.next
  }
  // traverse(head2)
  // function traverse(head) {
  //   while(head){
  //     console.log(head.val)
  //     head=head.next
  //   }
  // }
  function reverse(head) {
    let cur = head, pre = null
    while(cur) {
      let temp = cur.next
      cur.next = pre
      pre = cur
      cur = temp
    }
    return pre
  }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

 */

