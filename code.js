/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 0) {
    return 0;
  }
  if (n  == 1 || n == 0) {
    return 1;
  }
  // the recursion is being applied on the subproblem.
  return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3)
};
