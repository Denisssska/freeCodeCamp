function confirmEnding(str, target) {
  return str.slice(str.length - target.length) == target
 //str.fromCharCode(target)
  //  return str.charAt(str.length) == target
 
//   for(let i = 0; i < str.length; i++){
//     if( str[i] == target){
//       return true
//     }
//     return false
//     console.log(str[i])
    
//    // return true
//   }
//  // return false

//  // console.log(str.substring(target))
//  // return str;
}

confirmEnding("Bastian", "n");