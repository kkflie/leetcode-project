import { MinHeap } from "../../../minHeap"

describe('最小堆', () => {
  test('case 1', () => {
    // const arr = [100, 2, 3, 57, 123]
    const arr = [100, 2, 3]
    const res = new MinHeap(arr)
    while(res.length) {
      console.log(res.pop())
    }
    // expect(res.heap).toEqual([2, 3, 100])
  })
})