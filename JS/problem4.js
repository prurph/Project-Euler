var products = [],
    i = 100;
    j = 100;

var isPalindrome = function(n) {
  var reversed = 0,
      initial  = n;
  while (n > 0) {
    reversed *= 10; // shifts each digit one to the left
    reversed += (n % 10); // gets ones digit of initial and tacks it on
    n = parseInt(n / 10); // removes first digit of n
  }
  return (reversed === initial);
};

var numSort = function(a,b) {
  if (a === b) {
    return 0;
  } else {
    return a < b ? -1 : 1;
  }
};

for (; i < 1000; i++) {
  for (j = i; j < 1000; j++) {
    if (isPalindrome(i*j)) {
      products.push(i*j);
    }
  }
}

console.log(products.sort(numSort).slice(-1)[0]);
