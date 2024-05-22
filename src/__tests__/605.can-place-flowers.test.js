const canPlaceFlowers = require('../605.can-place-flowers')

test('case 1', () => {
  const flowerbed = [1,0,0,0,1]
  const n = 2
  const res = canPlaceFlowers(flowerbed, n)
  expect(res).toBe(false)
})