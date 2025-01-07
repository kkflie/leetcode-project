function test(index, ...val) {
  console.log(val)
  test2(...val)
}

function test2(...args) {
  console.log('test2', args)
}

test(0, 1, 2, 3)