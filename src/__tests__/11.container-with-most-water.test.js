const maxArea = require('../11.container-with-most-water')

test('case 1', () => {
  const arr = [1,8,6,2,5,4,8,3,7]
  const res = maxArea(arr)
  expect(res).toBe(49)
})

test('case 2', () => {
  const arr = [1,1]
  const res = maxArea(arr)
  expect(res).toBe(1)
})