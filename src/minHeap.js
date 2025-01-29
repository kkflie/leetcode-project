// 最小堆
export class MinHeap {
  heap = []
  constructor (arr = []) {
    arr.forEach(e => {
      this.push(e)
    })
  }
  get length() {
    return this.heap.length
  }

  get top() {
    return this.heap[0]
  }

  get bottom() {
    return this.heap[this.length - 1]
  }

  toString() {
    return this.heap.join('->')
  }

  push(val) {
    console.log(this.heap)
    this.heap.push(val)
    this.shiftUp(this.length - 1)
  }

  pop() {
    const val = this.top
    if (this.length === 1) {
      this.heap.pop()
      return val
    }
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return val
  }



  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]]
  }

  shiftUp(index) {
    while (index) {
      const parentIndex = (index - 1) >> 1
      const parentVal = this.heap[parentIndex]
      const val = this.heap[index]
      if (parentVal <= val) {
        break
      }
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  shiftDown(index) {
    while(1) {
      const leftChildIndex = index * 2 + 1
      const rightChildIndex = index * 2 + 2
      let minIndex = index
      if (this.heap[index] > this.heap[leftChildIndex]) {
        minIndex = leftChildIndex
      }
      if (this.heap[index] > this.heap[rightChildIndex]) {
        minIndex = rightChildIndex
      }
      if (minIndex === index) return
      this.swap(index, minIndex)
      index = minIndex
      // this.shiftDown(minIndex)
    }
  }
}


// const heap = new MinHeap([4, 3, 2, 123, 23, 1435, 567, 234])
// // const heap = new MinHeap()
// console.log('init: ' + heap)
// heap.pop()
// console.log('init: ' + heap)
// heap.push(1)
// console.log('after push 1 :' + heap)
// heap.push(1)
// console.log('after push 1 :' + heap)
// console.log('top: ', heap.top)
// console.log('bottom: ', heap.bottom)
