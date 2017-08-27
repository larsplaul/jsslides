var app = angular.module('demoApp3', []);

app.controller('ControllerA', [function() {
  this.msg = "I'm from a type A Controller"
}]);

app.controller('ControllerB', [ function() {
  this.msg = "I'm from a type B Controller"
}]);

app.controller('ControllerC', [function() {
  this.msg = "I'm from a type C Controller"
}]);