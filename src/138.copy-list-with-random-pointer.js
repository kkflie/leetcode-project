/*
 * @lc app=leetcode.cn id=138 lang=javascript
 * @lcpr version=
 *
 * [138] 随机链表的复制
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head, cached = new Map()) {
  // const dummyHead = new _Node()
  // let newHead = dummyHead
  // let i = 0
  // const arr = []
  // while(head) {
  //   head.id = i
  //   const node = new _Node(head.val, null, head.random)
  //   node.id = i
  //   i++
  //   newHead.next = node
  //   arr.push(node)
  //   head = head.next
  //   newHead = newHead.next
  // }
  // newHead = dummyHead.next
  // while (newHead) {
  //   const { random } = newHead
  //   if (random) {
  //     newHead.random = arr[random.id]
  //   }
  //   newHead = newHead.next
  // }
  // return dummyHead.next
  if (head === null) return null
  if (!cached.has(head)) {
    cached.set(head, { val: head.val })
    Object.assign(
      cached.get(head),
      {
        next: copyRandomList(head.next, cached),
        random: copyRandomList(head.random, cached)
      }
    )
  }
  return cached.get(head) 
};
// @lc code=end



/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */

