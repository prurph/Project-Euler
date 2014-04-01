var factorTree = function(n) {
  var tree = [];

  for (var i = 2; i <= n; i++) {
    if (n % i === 0) {
      tree.push(i);
      n = n/i;
      i = 1; // gets autoincremented to 2 on next loop
    }
  }
  return tree;
};

console.log(factorTree(600851475143).slice(-1)[0]);
