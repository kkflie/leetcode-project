function test() {
  const array = new Array(1).fill(0)
  const n = array.length
  for (let i = 0; i < n; i++) {
    array.splice(i + 1, 0,array.length)
  }
  console.log(array)
}

test()