/**
 * Box-Muller
 */
var BoxMuller = {};

/**
 * Return a random number from a normal distribution
 */
BoxMuller.nrand = function (mu, sigma) {
  var u = Math.random();
  var v = Math.random();
  
  var TWO_PI = 2*Math.PI;

  var z0 = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(TWO_PI*v);
  var z1 = Math.sqrt(-2.0 * Math.log(u)) * Math.sin(TWO_PI*v);

  return [z0*sigma+mu, z1*sigma+mu];
};

/**
 * Return n random numbers
 */
BoxMuller.random = function (n, mu, sigma) {
  var returns = [];

  do {
    var rands = this.nrand(mu, sigma);
    returns.push(rands[0]);
    returns.push(rands[1]);
  } while (returns.length < n);

  // Ensure that the array is the correct size
  returns.splice(0, n);

  return returns;
};
