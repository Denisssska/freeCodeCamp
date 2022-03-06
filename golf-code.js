const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if ( strokes == 1 ){
    par = names[0];
   return par;
  } else if( strokes <= par - 2){
    par = names[1];
    return par;
  } else if( strokes == par - 1){
    par = names[2];
    return par;
  } else if( strokes == par){
    par = names[3];
    return par;
  } else if( strokes == par + 1){
    par = names[4];
    return par;
  } else if( strokes == par + 2){
    par = names[5];
    return par;
  } else if( strokes >= par + 3){
    par = names[6];
    return par;
  }
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);