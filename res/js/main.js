$(document).ready(function() {
  var paper = new Raphael(document.getElementById("canvas_container"),
    500,500);
  var ball = paper.circle(50, 50, 40);
  ball.attr({"gradient": "90-#526c7a-#64a0c1"});

  var move_ball = function () {
    ball.attr({
      "transform" : "t 0 0",
      "cx" : ball.attr("cx") + 10}).animate(
      {"transform" : ["t", 10, 0]}, 1000, move_ball);
  };

  move_ball();
});

