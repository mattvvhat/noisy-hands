/**
 *
 */
function yeah(canvas, context, path, steps, x, y, l, w) {
  context.save();
  var w = canvas.width;
  var h = canvas.height;
  context.transform(w/2, 0, 0, h/2, w/2, h/2);
  draw_path(context, path, steps);
  context.restore();
}

/**
 * Draw a function from 0 to 1
 */
function draw_path(context, path, steps) {
  var h = 1.0/steps;

  context.beginPath();

  var xy = path(0);

  context.moveTo(xy[0], xy[1]);

  for (var i=1; i <= steps; i++) {
    var xy0 = path(h*(i-1));
    var xy1 = path(h*(i-0));

    // Pairs
    var x0 = xy0[0], y0 = xy0[1];
    var x1 = xy1[0], y1 = xy1[1];

    // context.moveTo(x0, y0);
    context.lineTo(x1, y1);
  }

  context.strokeStyle = "#000000";
  context.lineWidth = 0.1;
  context.stroke();
}

/**
 *
 */
function circle(t) {
  var z = 2*Math.PI*t;
  return [Math.sin(z), Math.cos(z)];
}
