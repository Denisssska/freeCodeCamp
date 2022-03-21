function truncateString(str, num) {
  if( num < str.length){
    let a = str.slice(0,num)
   
   
  return a + "...";
  }
   return str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);