// Only change code below this line
function countdown(n){
  if ( n < 1){
    return [];
    } else {
let countArr = countdown( n - 1 )
countArr.unshift(n)
   
  console.log(countArr)
  return countArr;
   }
}
// Only change code above this line