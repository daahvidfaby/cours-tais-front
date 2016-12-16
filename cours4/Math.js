//ex4
/*exports.PI = 3.141592;

var _sqrt = function(s, x, last) {
  return x != last ? _sqrt(s, (x + s /x) / 2.0, x) : x;
};
exports.sqrt = function(s) {
  return _sqrt(s, s/2.0, 0.0);
}
exports.square = function(x) {
  return x * x;
}
*/

//ex5
const PI = 3.141592;

const _sqrt = function(s, x, last) {
  return x != last ? _sqrt(s, (x + s /x) / 2.0, x) : x;
};
const sqrt = function(s) {
  return _sqrt(s, s/2.0, 0.0);
}
const square = function(x) {
  return x * x;
}

export default {
  PI: PI,
  sqrt: sqrt,
  square: square
}
