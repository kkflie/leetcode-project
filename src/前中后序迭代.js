function ListNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

function buildTree() {
  const root = new ListNode(5)
  root.left = new ListNode(4, new ListNode(1), new ListNode(2))
  root.right = new ListNode(6)
  return root
}

const root = buildTree()

function preOrder(root) {
  const st = [root]
  while (st.length) {
    const node = st.pop()
    console.log(node.val)
    const left = node.left
    const right = node.right
    if (right) {
      st.push(right)
    }
    if (left) {
      st.push(left)
    }
  }
}

function centerOrder(root) {
  const st = []
  let cur = root
  while (cur || st.length) {
    if (cur) {
      st.push(cur)
      cur = cur.left
    } else {
      cur = st.pop()
      console.log(cur.val)
      cur = cur.right
    }
  }
}

function afterOrder(root) {
  const st = [root]
  const res = []
  while(st.length) {
    const node = st.pop()
    res.push(node.val)
    if (node.left) st.push(node.left)
    if (node.right) st.push(node.right)
  }
  res.reverse()
  console.log(res)
}

// preOrder(root)
// centerOrder(root)
afterOrder(root)