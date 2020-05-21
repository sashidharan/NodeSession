var recursive = function(n) {
  if (n <= 2) {
    return 1;
  } else {
    return recursive(n - 1) + recursive(n - 2);
  }
};
var start = new Date();
var data = recursive(40);
console.log("Output", data);
var end = new Date() - start;
console.info("Execution time: %dms", end);
