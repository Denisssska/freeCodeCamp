function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for( let i = 0; i < arr.length; i++){
  for( let k = 0; k < arr[i].length; k++){
    product *= arr[i][k];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);