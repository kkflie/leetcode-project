const isValid = require('../20.valid-parentheses')

test('case 1', () => {
  const res = isValid("()[]{}")
  expect(res).toBe(true)
})

test.only('case 2', () => {
  const res = isValid("((")
  expect(res).toBe(false)
})