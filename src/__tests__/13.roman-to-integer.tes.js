const romanToInt = require('../13.roman-to-integer')

test('I', () => {
  const res = romanToInt('I')
  expect(res).toEqual(1)
})

// test('11', () => {
//   const res = romanToInt(11)
//   expect(res).toEqual('XI')
// })

// test('40', () => {
//   const res = romanToInt(40)
//   expect(res).toEqual('XL')
// })

test('XLI', () => {
  const res = romanToInt('XLI')
  expect(res).toEqual(41)
})

test.only('MCMXCIV', () => {
  const res = romanToInt('MCMXCIV')
  expect(res).toEqual(1994)
})

// test('49', () => {
//   const res = romanToInt(49)
//   expect(res).toEqual('XLIX')
// })

// test('50', () => {
//   const res = romanToInt(50)
//   expect(res).toEqual('L')
// })

// test('51', () => {
//   const res = romanToInt(51)
//   expect(res).toEqual('LI')
// })

// test('90', () => {
//   const res = romanToInt(90)
//   expect(res).toEqual('XC')
// })

// test('91', () => {
//   const res = romanToInt(91)
//   expect(res).toEqual('XCI')
// })

// test('100', () => {
//   const res = romanToInt(100)
//   expect(res).toEqual('C')
// })

// test('101', () => {
//   const res = romanToInt(101)
//   expect(res).toEqual('CI')
// })