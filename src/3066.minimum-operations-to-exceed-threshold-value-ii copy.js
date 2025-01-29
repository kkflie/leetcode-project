/*
 * @lc app=leetcode.cn id=3066 lang=javascript
 * @lcpr version=30204
 *
 * [3066] 超过阈值的最少操作数 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  class MinHeap {
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
      // console.log(this.heap)
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
        this.shiftDown(minIndex)
      }
    }
  }
  const minHeap = new MinHeap(nums.filter((x) => x < k))
  let top = minHeap.top
  let res = 0
  while (top < k) {
    res++
    const x = minHeap.pop()
    const y = minHeap.pop()
    const res2 = x * 2 + y
    minHeap.push(res2)
    top = minHeap.top
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,11,10,1,3]\n10\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,4,9]\n20\n
// @lcpr case=end

 */

