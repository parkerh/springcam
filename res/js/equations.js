/* These functions take the constants c_1 and c_2, and r_1
 * and r_2 (or just r in the case of critical damping)
 * and return a function x(t) that takes a time argument t
 * and returns the position of the object at time t
 * (first class function ftw) */

var overdamped_equation = function(c_1,c_2,r_1,r_2) {
  return function(time) {
    var a = r_1 * time;
    var b = r_2 * time;
    var posn = c_1 * Math.pow(Math.E, a) +
      c_2 * Math.pow(Math.E, b);
    return posn;
  };
};

var underdamped_equation = function(c_1,c_2,r_1,r_2,r_r) {
  return function(time) {
    var a = r_1 * time;
    var b = r_2 * time;
    var e = Math.pow(Math.E, r_r * time);

    /* Math.cos and Math.sin take arguments in radians. */
    var posn = e * 
      (c_1 * Math.cos(a) +
      c_2 * Math.sin(b));
    return posn;
  };
};

var critdamped_equation = function(c_1,c_2,r) {
  return function(time) {
    var a = c_1 * time + c_2;
    var b = r * time;
    var posn = a * Math.pow(Math.E, b);
    return posn;
  };
};
