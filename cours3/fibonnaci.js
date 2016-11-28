function fibonnaciNonRecursive(nb){
  var n = 0,
      m = n,
      fibonnaci = [];
  for(var i = 0; i < nb; i++){
    if(n > 0){
      fibonnaci.push(n);
      n = n + m;
      m = n - m;
    } else {
      fibonnaci.push(n);
      n = 1;
    }
  }


  return fibonnaci;
}
