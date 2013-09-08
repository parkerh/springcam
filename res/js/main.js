$(document).ready(function () {
  var paper = new Raphael(document.getElementById("canvas_container"),
    500,500);

  var ball;
  var time = 0;

  var equation;

  var move_ball = function () {
    /* First get the position at time, then increment time
     * by one second, then get the next position.
     */
    var posn1 = equation(time);
    time += .01;
    var posn2 = equation(time);

    /* We have to set the transform attribute of the ball
     * back to 0, 0 for the animation to work more than once.
     * Otherwise, the ball will think it's been transformed
     * on the next iteration.
     */
    ball.attr({
      "transform" : "t 0 0",
      "cy" : posn1 + 200
    }).animate( // posn2 - posn1 is a displacement vector.  This lasts 1 sec.
      {"transform" : ["t", 0, posn2 - posn1]}, 1, move_ball);
  };

  $("#start").click( function () {
    var spring_constant = $("#spring").val();
    var damping_constant = $("#damping").val();

    if (
        $.isNumeric(spring_constant) && 
        $.isNumeric(damping_constant)) 
    {
      eqn_coeffs = equation_solver(damping_constant,spring_constant);
      if (ball) {
        ball.hide();
      };
      ball = paper.circle(150, 50, 10);
      equation = overdamped_equation(
        eqn_coeffs[0],
        eqn_coeffs[1],
        eqn_coeffs[2],
        eqn_coeffs[3]);

      ball.attr({"gradient": "90-#526c7a-#64a0c1"});
      move_ball(); 
    }
  });

  /*Solution, according to page 59 of "Numerical Analysis, Fifth Edition by Burden and Faires,
  //is 0.7390851332
<<<<<<< HEAD
  var result = newton_solve(cos_minus_x, cos_minus_x_prime, Math.PI/4, 1e-6, 4); */
=======
  //var result = newton_solve(cos_minus_x, cos_minus_x_prime, Math.PI/4, 1e-6, 4);
  //Solution, according to p. 59 of the same textbook, is 1.36523001
  //var result = newton_solve(test_poly, test_poly_prime, 1.5, 1e-6, 6);
  //alert("Newtown-Raphson result is: " + result);
>>>>>>> 0bdfff3862d8ff517725474dabf84bd39f2d49fb
});
