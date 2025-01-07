function LazyMan(name) {
  console.log(`Hi I am ${name}`)
  const queue = []
  const TIME_OUT_MAX_NUM = 3
  let timeoutNum = 0
  const interval = setInterval(() => {
    if (queue.length > 0) {
      queue.forEach(fn => {
        fn()
      })
      queue.length = 0
    } else if (timeoutNum < TIME_OUT_MAX_NUM) {
      timeoutNum++
    } else {
      clearInterval(interval)
    }
  }, 17)
  return {
    name,
    sleep: function (time) {
      queue.push(() => {
        console.log(`等待了${time}秒...`)
      })
      return this
    },
    eat: function (food) {
      queue.push(() => {
        console.log(`I am eating ${food}`)
      })
      return this
    },
    sleepFirst: function (time) {
      queue.unshift(() => {
        console.log(`等待了${time}秒...`)
      })
      return this
    }
  }
}

// LazyMan('Tony');
// // Hi I am Tony

// LazyMan('Tony').sleep(10).eat('lunch');
// // Hi I am Tony
// // 等待了10秒...
// // I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// // Hi I am Tony
// // I am eating lunch
// // 等待了10秒...
// // I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
