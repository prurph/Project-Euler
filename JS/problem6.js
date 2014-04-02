var sumSquares = function(num) {
  var result = 0,
      i = 1;
  for (;i <= num; i++) {
    result += i * i;
  }
  return result;
};

var squareSum = function(num) {
  var result = 0,
      i = 1;
  for (;i <= num; i++) {
    result += i;
  }
  return result * result;
};

console.log(squareSum(100) - sumSquares(100));
