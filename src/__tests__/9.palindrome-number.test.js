const isPalindrome = require('../9.palindrome-number')

test('case 1', () => {
  const res = isPalindrome(121)
  expect(res).toEqual(true)
})

test('case 2', () => {
  const res = isPalindrome(1000021)
  expect(res).toEqual(false)
})

test('case 3', () => {
  const res = isPalindrome(10)
  expect(res).toEqual(false)
})