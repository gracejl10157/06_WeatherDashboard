// Write code to create a function that returns the factorial of `num`
// 4! = 4 * 3 * 2 * 1

var factorial = function(num) {
  var result = 1;
  // multiply it by the next smallest number and then the next smallest number, etc.
  // until you hit 1
  for (let i = num; i > 1; i--) {
    // multiply num * i
    result = result * i;

  }
  // return the result
  return result;
};
