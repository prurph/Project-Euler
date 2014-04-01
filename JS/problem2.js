var fib = function(n) {
  return (n < 2) ? n : fib(n-1) + fib(n-2);
};

var i   = 1,
    sum = 0;

while (fib(i) <= 4e6) {
  if (fib(i) % 2 === 0) {
    sum += fib(i);
  }
  i++;
}
