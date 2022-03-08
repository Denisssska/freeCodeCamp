function rangeOfNumbers(startNum, endNum) {
 if( endNum - startNum === 0){
   return [startNum];
 } else {
   let a =  rangeOfNumbers( startNum, endNum - 1);
   a.push(endNum);
 return a;
 }

}
