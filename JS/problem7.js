var isPrime = function(num) {
  var divisor = 2;
  for (; divisor*divisor <= num; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

var count = 0,
    num   = 2;

do {
  if (isPrime(num)) {
    count++;
    console.log("prime # " + count + " is: " + num);
  }
  num++;
} while (count <= 10000);
