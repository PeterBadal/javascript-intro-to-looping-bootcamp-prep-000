
function forLoop(arr) {
  for (var i = 0; i<25; i++) {
    arr.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
  return arr
}
forLoop([])

function whileLoop (num) {
  while(num>0) {
    num--
    console.log(num)
  }
  return 'done'
}

function doWhileLoop(arr) {
  do{
    arr.pop()
  } while (arr.length >= 0 && maybeTrue())
  return arr
}

function maybeTrue() {
  return Math.random() >= 0.5
}
