const arrayPairSum = require('../561.array-partition')

test('case 1', () => {
  const nums = [1,4,3,2]
  const res = arrayPairSum(nums)
  expect(res).toBe(4)
})

test('case 2', () => {
  const nums = [6,2,6,5,1,2]
  const res = arrayPairSum(nums)
  expect(res).toBe(9)
})

test.only('case 3', () => {
  const nums = [6214, -2290, 2833, -7908]
  const res = arrayPairSum(nums)
  expect(res).toBe(-5075)
})