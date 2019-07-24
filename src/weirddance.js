var HanDancing = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="HanDancing heartBeat"></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.step();
};
HanDancing.prototype = Object.create(Dancer.prototype);
HanDancing.prototype.constructor = HanDancing;

HanDancing.prototype.step = function () {
Dancer.prototype.step.call(this);
  // this.$node.slideDown();
}
HanDancing.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top : top,
    left : left
  };
  this.$node.css(styleSettings);
}