/* This is an implementation of a Newton-Raphson Solver in
 * JavaScript. It takes as input a f(x), f'(x), a guess
 * p near the root, a tolerance (how close we want to be to the solution),
 * and the maximum number of iterations.
 *
 * It returns the root that it found, or it
 * returns the closes guess before we encounter a guess that
 * casuses f'(x) to equal zero, which causes Newton-Raphson to
 * fail.
 */

var cos_minus_x_prime = function(x){
	return -Math.sin(x) - 1;
}

var cos_minus_x = function(x){
	return Math.cos(x) - x;
}

var newtown_solve = function(f, f_prime, start_p, tol, max_iter){
	var i = 1;	
	var p0 = start_p;
	while( i < max_iter ){
		var p = p0 - f(p0)/f_prime(p0);
		if( Math.abs(p - p0) < tol ){
			return p; 
		}
		++i;
		p0 = p;
	}
	alert("Newton-Raphson failed to converge!");
	return p;
}
