var quadratic = function(a, b, c)
{
  var discriminant = 
    Math.pow(b,2) - 4 * a * c
  if (discriminant <= 0) {
    alert("Please enter different constants.");
    return;
  }
  return [(-b + Math.sqrt(discriminant)) / (2*a),
         (-b - Math.sqrt(discriminant)) / (2*a)];
}
