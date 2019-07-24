var HavingFunHarold = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="HavingFunHarold heartBeat"></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.step();
};
HavingFunHarold.prototype = Object.create(Dancer.prototype);
HavingFunHarold.prototype.constructor = HavingFunHarold;

HavingFunHarold.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.slideDown();
}
HavingFunHarold.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top : top,
    left : left
  };
  this.$node.css(styleSettings);
}