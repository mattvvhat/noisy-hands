function Path() {
  this.fx = null;
  this.fy = null;
  this.h = 0.1;
}

Path.prototype.f = function (t) {
  return [
    this.fx(t),
    this.fy(t)
  ];
}

Path.prototype.df = function (t) {
  return [
    (this.fx(t+this.h/2.)-this.fx(t-this.h/2.))/this.h,
    (this.fy(t+this.h/2.)-this.fy(t-this.h/2.))/this.h
  ];
}
