
function random(min, max) {
  return (max-min)*Math.random()+min;
}

/* I Am not a Human Being */
function Ianahb() {
}

function nderiv(f, x, h) {
  return f(x+h)/h;
}

function curve(x) {
  var t = 2*x-1;
  return [ t, t*t*t ];
}

function circle2(t) {
  var z = 2*Math.PI*(10*t);
  return [Math.sin(z), Math.cos(z)];
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
  this.sketch(
    circle2,
    300,
    0.025
  );
};

/* Clear */
App.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

/* ... */
App.prototype.sketch = function (path, steps, wobble) {
  this.ctx.save();
  var p = 100;
  var w = this.canvas.width-p;
  var h = this.canvas.height-p;
  this.ctx.transform(w/2, 0, 0, h/2, w/2+p/2., h/2+p/2.);
  this._sketch(path, steps, wobble);
  this.ctx.restore();
};

/* Sketch */
App.prototype._sketch = function (path, steps, wobble) {
  // ...

  var h = 1./steps;
  var xy0 = path(0);

  // ...
  this.ctx.beginPath();
  this.ctx.moveTo(
    xy0[0]+random(-wobble, wobble),
    xy0[1]+random(-wobble, wobble)
  );

  // ...
  for (var i=1; i <= steps; i++) {

    // Get new
    var xy1 = path(h*(i));

    var vec = [
      xy1[0] - xy0[0] + random(-wobble, wobble),
      xy1[1] - xy0[1] + random(-wobble, wobble)
    ];

    // Pairs
    var x1 = xy0[0]+vec[0];
    var y1 = xy0[1]+vec[1];

    xy0 = [x1, y1];

    // context.moveTo(x0, y0);
    this.ctx.lineTo(x1, y1);
  }

  // Stroke line
  this.ctx.strokeStyle = "#000000";
  this.ctx.lineWidth = 0.0005;
  this.ctx.stroke();
};
