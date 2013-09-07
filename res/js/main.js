$(document).ready(function() {
  var paper = new Raphael(document.getElementById("canvas_container"),
    500,500);
  var ball = paper.circle(50, 50, 40);
  ball.attr({"gradient": "90-#526c7a-#64a0c1"});

  var time = 0;

  var equation = overdamped_equation(50,-3,-2,-7);

  var move_ball = function () {
    var posn1 = equation(time) * 500;
    time += 1;
    var posn2 = equation(time) * 500;
    ball.attr({
      "transform" : "t 0 0",
      "cy" : posn1
    }).animate(
      {"transform" : ["t", 0, posn2 - posn1]}, 1000, move_ball);
  };

  move_ball(); 
});

