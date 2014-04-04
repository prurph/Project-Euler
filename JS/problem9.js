var a = 1, b, squaredSum,
    c = 0;

(function() {
  for (; a < 500; a++) {
    b = a + 1;
    for (; a + b + c <= 1000; b++) {
      squaredSum = Math.pow(a,2) + Math.pow(b,2);
      c = Math.sqrt(squaredSum);
      if (a + b + c === 1000) {
        console.log(a*b*c);
      }
    }
  }
})();
