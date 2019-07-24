var Carlton = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="Carlton zoomIn"></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.step();
};
Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;

Carlton.prototype.step = function () {
Dancer.prototype.step.call(this);
  // this.$node.slideDown();
}
Carlton.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top : top,
    left : left
  };
  this.$node.css(styleSettings);
}