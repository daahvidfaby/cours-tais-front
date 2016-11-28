function fibonacciNonRecursive(nb){
  var n = 0,
      m = n,
      fibonacci = [];
  for(var i = 0; i < nb; i++){
    if(n > 0){
      fibonacci.push(n);
      n = n + m;
      m = n - m;
    } else {
      fibonacci.push(n);
      n = 1;
    }
  }
  return fibonacci;
}


function fibonacciRecursive(num){
  if (num <= 1) return 1;
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
