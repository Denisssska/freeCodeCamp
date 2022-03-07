let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  case 3: 
  case 4:
  case 5:
  case 6:
  count++;
 // console.log(count)
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
   // console.log(count)
  break;
}
if ( count <= 0){
  return count + " Hold";
   
 // console.log(count)
} else{
 return count + " Bet";
  }


// if( card >= 2 || card <= 6){
//     console.log(count++)
//     return count++;
    
//   }else if( card >= 7 || card <= 9){
//     return count + 0;
//   } else if( card == "string" ||  card == 10){
//     count -= 1
//     return count--
//   }

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');