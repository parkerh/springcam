$(document).ready(function() {
  var paper = new Raphael(document.getElementById("canvas_container"),
    500,500);
  var ball = paper.circle(50, 50, 40);
  ball.attr({"gradient": "90-#526c7a-#64a0c1"});

  var time = 0;

  var equation = critdamped_equation(300,0,-1);

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

  move_ball(); 

  //Solution, according to page 59 of "Numerical Analysis, Fifth Edition by Burden and Faires,
  //is 0.7390851332
  var result = newtown_solve(cos_minus_x, cos_minus_x_prime, Math.PI/4, 1e-6, 4);
  alert("Newtown-Raphson result is: " + result);
});
