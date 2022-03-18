function factorialize(num) {
  let out = 1;
  for (let i = 1; i <= num; i++){
    out = out * i  
  }
  return out;
}

factorialize(5);