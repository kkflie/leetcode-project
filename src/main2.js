async function async2() {
  console.log('async2');
  return 1
}

console.log((async2()) instanceof Promise)