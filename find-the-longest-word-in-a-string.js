function findLongestWordLength(str) {
    let a = str.split(' ');
    let max = 0;
for(let i = 0; i < a.length; i++){
    
   // console.log(a[i].length)
    if (max < a[i].length ){
        max = a[i].length
    }
    
}
return max
  }

findLongestWordLength("The quick brown fox jumped over the lazy dog");