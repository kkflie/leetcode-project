const mergeTwoLists = require('../21.merge-two-sorted-lists')

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function arr2List(arr) {
  let h = null
  let pre = h
  for (let i = 0; i < arr.length; i++) {
    if (!h) {
      h = new ListNode(arr[i])
      pre = h
    } else {
      pre.next = new ListNode(arr[i])
      pre = pre.next
    }
  }
  return h
}

function list2Arr(list) {
  let i = list
  const arr = []
  while(i) {
    arr.push(i.val)
    i = i.next
  }
  return arr
}

function log(list) {
  const arr = list2Arr(list)
  console.log('log', arr)
}
test('case 1', () => {
  const list1 = arr2List([1, 2, 4])
  const list2 = arr2List([1, 3, 4])
  const list3 = [1, 1, 2, 3, 4, 4]
  const res = mergeTwoLists(list1, list2)
  log(res)
  expect(list2Arr(res)).toEqual(list3)
})