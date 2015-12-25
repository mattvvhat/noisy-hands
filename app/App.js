var circle_path = new Path();

circle_path.fx = function (t) {
  return Math.cos(5*2*Math.PI*t);
};

circle_path.fy = function (t) {
  return Math.sin(2*2*Math.PI*t);
};

function random(min, max) {
  return (max-min)*Math.random()+min;
}

/* I Am not a Human Being */
function Ianahb() {
}

/* Constructor */
function App() {
  this.canvas  = document.getElementById("xoxo");
  this.ctx     = this.canvas.getContext("2d");
  this.width   = 125;
  this.height  = 105;
  this.padding = 20;
}

/* Update */
App.prototype.update = function() {
};

/* Draw */
App.prototype.draw = function() {
  this.sketchPath(
    circle_path,
    100,
    0
  );
};

/* Clear */
App.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

/**
 * Sketch Path
 */
App.prototype.sketchPath = function (path, steps, wobble) {
  this.ctx.save();
  var p = 100;
  var w = this.canvas.width-p;
  var h = this.canvas.height-p;
  this.ctx.transform(w/2, 0, 0, h/2, w/2+p/2., h/2+p/2.);
  this._sketchPath(path, steps, wobble);
  this.ctx.restore();
};

App.prototype._sketchPath = function (path, steps, wobble) {
  // ...

  this.h = 1/steps;
  this.h = 1.0;
  var xy0 = path.f(0);
  var first = xy0;

  var wobbles = BoxMuller.nrand(0, wobble);

  // ...
  this.ctx.beginPath();
  this.ctx.moveTo(
    xy0[0],
    xy0[1]
  );

  // ...
  for (var i=1; i <= steps; i++) {
    
    var m = path.df(i/steps);

    wobbles = BoxMuller.nrand(0, wobble);

    // Pairs
    var x1 = xy0[0] + 1/steps*m[0] + wobbles[0];
    var y1 = xy0[1] + 1/steps*m[1] + wobbles[1];

    xy0 = [x1, y1];

    // context.moveTo(x0, y0);
    this.ctx.lineTo(x1, y1);
    console.log(x1, y1);
  }

  // Stroke line
  this.ctx.strokeStyle = "#000000";
  this.ctx.lineWidth = 0.005;
  this.ctx.stroke();
};
