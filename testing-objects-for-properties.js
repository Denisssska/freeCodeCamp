function checkObj(obj, checkProp) {
  if( obj.hasOwnProperty(checkProp)){
    return obj[checkProp]
  }
  return "Not Found"
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}