import { subarraySum } from '../3427.变长子数组求和'

describe('test 3427 变长子数组求和', () => {
  test('case 1', () => {
    const nums = [2, 3, 1]
    const res = subarraySum(nums)
    expect(res).toBe(11)
  })

  test('case 2', () => {
    const nums = [3, 1, 1, 2]
    const res = subarraySum(nums)
    expect(res).toBe(13)
  })
})