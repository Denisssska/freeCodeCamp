const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let out = 0;
for( let key in usersObj){
 console.log(usersObj[key])
  if(usersObj[key]['online'] == true){
     out = out + 1
     console.log(usersObj[key])
  }
  }
  return out
  

  // Only change code above this line
}

console.log(countOnline(users));
