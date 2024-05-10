const romanToInt = require('../13.roman-to-integer')

test('1', () => {
  const res = romanToInt(1)
  expect(res).toEqual('I')
})

test('11', () => {
  const res = romanToInt(11)
  expect(res).toEqual('XI')
})

test('40', () => {
  const res = romanToInt(40)
  expect(res).toEqual('XL')
})

test('41', () => {
  const res = romanToInt(41)
  expect(res).toEqual('XLI')
})

test('49', () => {
  const res = romanToInt(49)
  expect(res).toEqual('XLIX')
})

test('50', () => {
  const res = romanToInt(50)
  expect(res).toEqual('L')
})

test('51', () => {
  const res = romanToInt(51)
  expect(res).toEqual('LI')
})

test('90', () => {
  const res = romanToInt(90)
  expect(res).toEqual('XC')
})

test('91', () => {
  const res = romanToInt(91)
  expect(res).toEqual('XCI')
})

test('100', () => {
  const res = romanToInt(100)
  expect(res).toEqual('C')
})

test('101', () => {
  const res = romanToInt(101)
  expect(res).toEqual('CI')
})