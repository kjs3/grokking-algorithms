function binarySearch (arr = [], number = 0) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = arr[mid]

    if (guess === number) {
      return mid
    } else if (guess > number) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return 'Not found'
}

const myArray = [0,2,3,6,7,8,9]

console.log(binarySearch(myArray, 2))
console.log(binarySearch(myArray, 0))
console.log(binarySearch(myArray, 8))
console.log(binarySearch(myArray, -4))
