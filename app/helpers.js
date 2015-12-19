/**
 * Return Current Time
 */
var getCurrentTime = function () {
  return new Date().getTime() / 1000;
};

/**
 * Return Time Since (More-or-less) the Page Initialized
 */
var getElapsedTime = (function () {
  var start = new Date().getTime() / 1000;
  return function () {
    return getCurrentTime() - start;
  };
}());

/**
 * Random
 */
function random(min, max) {
  return (max-min)*Math.random()+min;
}
