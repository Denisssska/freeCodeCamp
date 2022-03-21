function repeatStringNumTimes(str, num) {
  if(num > 0){
  let a = str.split();
 for(let i = 1; i < num; i++){
    a.push(str) ;  
 }
  let b = a.join('')
 console.log(b)
 // str.repeat(num)
 // console.log(str.split())
  
  return b;
}
return ""
}
repeatStringNumTimes("*", 3);