// 前序遍历
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function createTree() {
  const root = new TreeNode(5)
  root.left = new TreeNode(4, new TreeNode(1), new TreeNode(2))
  root.right = new TreeNode(6, new TreeNode(7), new TreeNode(8))
  return root
}

const tree = createTree()
// console.log(tree)

// foreTraverse(tree)
// centerTraverse(tree)
// lastTraverse(tree)

function foreTraverse(root) {
  const stack = []
  const res = []
  stack.push(root)
  while(stack.length) {
    const node = stack.pop()
    res.push(node.val) 
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  console.log(res)
  return res
}

function centerTraverse(root) {
  const stack = []
  const res = []
  let node = root
  while(node || stack.length) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      res.push(node.val)
      node = node.right
    }
  }
  console.log(res)
  return res
}

function lastTraverse(root) {
  const stack = []
  let res = []
  stack.push(root)
  while(stack.length) {
    const node = stack.pop()
    res.push(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  res = res.reverse()
  console.log(res)
  return res
}