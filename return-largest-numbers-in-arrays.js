function largestOfFour(arr) {
  let a = [];
  
  for(let i = 0; i < arr.length; i++ ){
let max = arr[i][0];
    for(let k = 0; k < arr[i].length; k++){
     if( arr[i][k] > max){
        max = arr[i][k]
     }
    }
    a[i] = max
  }
  return a;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);