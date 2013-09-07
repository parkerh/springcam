$(document).ready(function() {
  var paper = new Raphael(document.getElementById("canvas_container"),
    500,500);
  var ball = paper.circle(50, 50, 40);
  ball.attr({"gradient": "90-#526c7a-#64a0c1"});

  var time = 0;

  var equation = overdamped_equation(50,-3,-2,-7);

  var move_ball = function () {
    /* First get the position at time, then increment time
     * by one second, then get the next position.
     */
    var posn1 = equation(time) * 500;
    time += 1;
    var posn2 = equation(time) * 500;

    /* We have to set the transform attribute of the ball
     * back to 0, 0 for the animation to work more than once.
     * Otherwise, the ball will think it's been transformed
     * on the next iteration.
     */
    ball.attr({
      "transform" : "t 0 0",
      "cy" : posn1
    }).animate( // posn2 - posn1 is a displacement vector.  This lasts 1 sec.
      {"transform" : ["t", 0, posn2 - posn1]}, 1000, move_ball);
  };

  move_ball(); 
});

