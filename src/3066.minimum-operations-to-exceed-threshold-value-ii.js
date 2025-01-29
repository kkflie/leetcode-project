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
      constructor() {
          this.heap = [];
      }

      size() {
          return this.heap.length;
      }

      isEmpty() {
          return this.size() === 0;
      }

      peek() {
          return this.heap[0];
      }

      push(val) {
          this.heap.push(val);
          this._heapifyUp();
      }

      pop() {
          if (this.size() === 1) return this.heap.pop();

          const root = this.heap[0];
          this.heap[0] = this.heap.pop();
          this._heapifyDown();
          return root;
      }

      _heapifyUp() {
          let index = this.size() - 1;
          const element = this.heap[index];

          while (index > 0) {
              const parentIndex = Math.floor((index - 1) / 2);
              const parent = this.heap[parentIndex];

              if (element >= parent) break;

              this.heap[index] = parent;
              this.heap[parentIndex] = element;
              index = parentIndex;
          }
      }

      _heapifyDown() {
          let index = 0;
          const length = this.size();
          const element = this.heap[0];

          while (true) {
              let leftChildIndex = 2 * index + 1;
              let rightChildIndex = 2 * index + 2;
              let smallest = index;

              if (
                  leftChildIndex < length &&
                  this.heap[leftChildIndex] < this.heap[smallest]
              ) {
                  smallest = leftChildIndex;
              }

              if (
                  rightChildIndex < length &&
                  this.heap[rightChildIndex] < this.heap[smallest]
              ) {
                  smallest = rightChildIndex;
              }

              if (smallest === index) break;

              this.heap[index] = this.heap[smallest];
              this.heap[smallest] = element;
              index = smallest;
          }
      }
  }
  let res = 0;
  const pq = new MinHeap();

  for (const num of nums) {
      pq.push(num);
  }
  while (pq.peek() < k) {
      const x = pq.pop();
      const y = pq.pop();
      pq.push(x + x + y);
      res++;
  }

  return res;
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

