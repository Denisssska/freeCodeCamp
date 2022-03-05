function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  let firstItem = arr.shift(item)

  return firstItem;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log(nextInLine(testArr, 10), testArr[4])
//console.log("Before: " + JSON.stringify(testArr));
//console.log(nextInLine(testArr, 6));
//console.log("After: " + JSON.stringify(testArr));