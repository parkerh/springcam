var equation_solver = function(c,k) {
  var roots = quadratic(1,c,k);

  var r_1 = roots[0];
  var r_2 = roots[1];

  var c_1 = 10 * r_2 / (r_2 - r_1);
  var c_2 = 10 * r_1 / (r_1 - r_2);

  return [c_1,c_2,r_1,r_2];
}
