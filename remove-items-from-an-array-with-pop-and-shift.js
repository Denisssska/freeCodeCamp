function popShift(arr) {
  let popped = arr.pop(arr[2]); // Change this line
  let shifted = arr.shift(arr[1]); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));