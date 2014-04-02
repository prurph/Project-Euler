var divide20 = function(n) {
  for(var i = 1; i <= 20; i++) {
    if (n % i !== 0) {
      return false;
    }
  }
  return true;
};

n = 20;
while (!divide20(n)) {
  n += 20;
}
console.log(n);
