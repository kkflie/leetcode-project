import { minMaxSums } from '../index'

describe('test 3428 变长子数组求和', () => {
  test('case 1', () => {
    const nums = [1, 2, 3],k = 2
    const res = minMaxSums(nums, k)
    expect(res).toBe(24)
  })

  test('case 2', () => {
    const nums = [5, 0, 6], k = 1
    const res = minMaxSums(nums, k)
    expect(res).toBe(22)
  })

  test('case 3', () => {
    const nums = [262, 988], k = 2
    const res = minMaxSums(nums, k)
    expect(res).toBe(3750)
  })

  test('case 4', () => {
    const nums = [310], k = 1
    const res = minMaxSums(nums, k)
    expect(res).toBe(620)
  })

  test('case 5', () => {
    const nums = [0, 1, 1], k = 3
    const res = minMaxSums(nums, k)
    expect(res).toBe(9)
  })
})