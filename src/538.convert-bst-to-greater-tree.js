/*
 * @lc app=leetcode.cn id=538 lang=javascript
 * @lcpr version=30204
 *
 * [538] 把二叉搜索树转换为累加树
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  const res = []
  function traverse(root) {
    if (root === null)return
    traverse(root.left)
    res.push(root.val)
    traverse(root.right)
  }
  let idx = 0
  function traverse2(root) {
    if (root === null)return
    traverse2(root.left)
    root.val = res[idx++]
    traverse2(root.right)
  }
  traverse(root)
  let total = res.reduce((a, b) => a + b, 0)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    res[i] = total
    total -= cur
  }
  traverse2(root)

  return root
};
// @lc code=end



/*
// @lcpr case=start
// [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [0,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4,1]\n
// @lcpr case=end

 */

